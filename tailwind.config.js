// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      primary: '#1e40af', // Deep blue
      secondary: '#7c3aed', // Vibrant purple
      accent: '#facc15', // Warm yellow
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
};
export const plugins = [];