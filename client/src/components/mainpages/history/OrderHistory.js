import React, {useContext, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token


    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                if(isAdmin){
                    const res = await axios.get('/api/payment', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }else{
                    const res = await axios.get('/user/history', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }
            }
            getHistory()
        }
    },[token, isAdmin, setHistory])

    return (
        <div className="history-page overflow-x-auto">
            <h2 className='text-center m-8 uppercase tracking-wide'>History</h2>

            <h4 className='text-center m-8 uppercase tracking-wide'>You have {history.length} ordered</h4>

            <table className='w-full m-auto border border-gray-200 border-collapse '>
                <thead>
                <tr className=' border border-gray-200 border-collapse'>
                    <th className=' border border-gray-200 border-collapse text-center p-5 capitalize'>Payment ID</th>
                    <th className='border border-gray-200 border-collapse text-center p-5 capitalize'>Date of Purchased</th>
                    <th className='border border-gray-200 border-collapse text-center p-5 capitalize'></th>
                </tr>
                </thead>
                <tbody>
                {
                    history.map(items => (
                        <tr key={items._id}>
                            <td className=' border border-gray-200 border-collapse text-center p-5 capitalize'>{items.paymentID}</td>
                            <td className=' border border-gray-200 border-collapse text-center p-5 capitalize'>{new Date(items.createdAt).toLocaleDateString()}</td>
                            <td className=' border border-gray-200 border-collapse text-center p-5 capitalize text-red-300'><Link to={`/history/${items._id}`}>View</Link></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory