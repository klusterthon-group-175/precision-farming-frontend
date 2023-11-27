/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                impact: ['Impact', 'sans-serif'],
            },
            boxShadow: {
                modal: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
            },
            colors: {
                green: {
                    80: '#E6F7F0',
                    350: '#A3BB03',
                    550: '#91B820',
                    850: '#085700',
                    1000: '#044C00',
                },
                dark: {
                    900: '#010101',
                },
                gray: {
                    350: '#D0D5DD',
                    750: '#344054',
                    550: '#667085',
                },
                neutral: {
                    gray: {
                        600: '#757575',
                        800: '#424242',
                        900: '#212121',
                    },
                },
            },
        },
    },
    plugins: [],
};
