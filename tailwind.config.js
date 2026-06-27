import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.{js,jsx,ts,tsx}',
        './storage/framework/views/*.php',
    ],
    theme: {
        extend: {},
    },
    plugins: [forms],
};
