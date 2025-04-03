/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure this is correct
  theme: {
    extend: {
      color:
      {
        lightGray:"#555555",
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
