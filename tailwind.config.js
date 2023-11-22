/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                impact: ['Impact', 'sans-serif'],
            },
            colors: {
                green: {
                    80: '#E6F7F0',
                    550: '#91B820',
                    850: '#085700',
                    950: '#044C00',
                },
                dark: {
                    900: '#010101',
                },
            },
        },
    },
    plugins: [],
};
