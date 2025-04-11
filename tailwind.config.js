/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1e3a8a',
                secondary: '#1e40af',
                accent: '#3b82f6',
                dark: '#1e293b',
                light: '#f8fafc'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif']
            },
        },
    },
    plugins: [],
}
