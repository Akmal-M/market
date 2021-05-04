module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'TextColor': '#2b2a2a',
                'MainColor': '#73d657',
                'btnColor': '#333',
                'btnColor2': '#73d657',
            }
        },
    },

    variants: {
        extend: {},
    },
    plugins: [],
}