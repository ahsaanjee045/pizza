/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: '"Inter", sans-serif',
            },
            backgroundImage: {
                heroImage : "url('/src/assets/hero.png')"
            }
        },
    },
    plugins: [],
};
