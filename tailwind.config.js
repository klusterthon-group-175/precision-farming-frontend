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

            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },

                bounceIn: {
                    '0%': {
                        transform: 'translateY(-500px)',

                        animationTimingFunction: 'ease-in',
                        opacity: 0,
                    },
                    '38%': {
                        transform: ' translateY(0)',
                        animationTimingFunction: 'ease-out',

                        opacity: 1,
                    },
                    '55%': {
                        transform: 'translateY(-65px)',

                        animationTimingFunction: 'ease-in',
                    },
                    '72%': {
                        transform: 'translateY(0)',

                        animationTimingFunction: 'ease-out',
                    },
                    '81%': {
                        transform: 'translateY(-28px)',

                        animationTimingFunction: 'ease-in',
                    },
                    '90%': {
                        transform: ' translateY(0)',

                        animationTimingFunction: 'ease-out',
                    },
                    '95%': {
                        transform: 'translateY(-8px)',

                        animationTimingFunction: 'ease-in',
                    },
                    '100%': {
                        transform: 'translateY(0)',

                        animationTimingFunction: 'ease-out',
                    },
                },

                slideIn: {
                    '0%': {
                        transform: 'translateZ(-1400px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateZ(0)',
                        opacity: 1,
                    },
                },
            },
            animation: {
                fadeIn: 'fadeIn 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
                bounceIn: 'bounceIn 1.1s both',
                slideIn:
                    'slideIn 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
            },
        },
    },
    plugins: [],
};
