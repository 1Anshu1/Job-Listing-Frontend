/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primaryRed: "#ED5353",
            },
            backgroundImage: {
                "register-img": "url('./src/assets/images/registerImg.png')",
                "addjob-img": "url('./src/assets/images/addjobImg.png')",
            },
        },
    },
    plugins: [],
};
