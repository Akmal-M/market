const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userCtrl = {
    register: async (req, res) => {
        try {
            const {name, email, password} = req.body;
            const user = await Users.findOne({email})
            if (user) return res.status(400).json({msg: "Email address already exist"})
            if (password.length < 6) return res.status(400).json({msg: "Password less than 6 characters"})

            //password encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Users({
                name, email, password: passwordHash
            })

            //save mongo db
            await newUser.save()

            //create jsonwebtoken to authentication


        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    login: async (req, res ) => {
        try{
            const {email, password} = req.body;

            const user = await Users.findOne({email})
            if(!user) return res.status(400).json({msg: "User doesn't exist."})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Incorrect password"})

            //if login success, create access token and refresh token
            const accessToken = createAccessToken({id: user._id})
            const refreshtoken = createRefreshToken({id: user._id})

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token'
            })
            res.json({accessToken})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    refreshToken: (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken;
            if (!rf_token) return res.status(400).json({msg:"Please Login or Register"})
                jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                    if(err) return res.status(400).json({msg:"Please Login or Register"})
                    const accesstoken = createAccessToken({id: user.id})
                    res.json({accesstoken})
                })
                res.json({rf_token})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }


    }
}

const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}

const createRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = userCtrl