/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './**/*.{js,ts,jsx,tsx}', // This covers all your TSX files
        './*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};