/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Alkatra: ["Alkatra"],
                TiltWarp: ["Tilt Warp"],
                Kanit: ["Kanit"],
                Header: ["Berkshire Swash"],
            },
            colors: {
                bluelight: '#CADCFC',
                bluemid: '#8AB6F9',
                bluedark: '#00246B',

            }
        },
    },
    plugins: [],
};