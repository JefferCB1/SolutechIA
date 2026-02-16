/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: '#431844',
                primary: '#7D255B',
                secondary: '#965972',
                earth: '#B4958E',
                light: '#E6DEE4',
                text: '#FEFEFE',
            },
        },
    },
    plugins: [],
}
