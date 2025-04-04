/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure this is correct
  theme: {
    extend: {
      colors:
      {
        lightGray:"#555555",
        darkGreen:"#01754F"
      },
      borderColor: {
        dark: '#1D1D1D', 
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}
