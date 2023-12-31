/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "290px",
        xs: "420px",
        sm: "601px",
        md: "769px",
        mdLg: "900px",
        lg: "1100px",
        xl: "1200px",
        "2xl": "1536px",
      },
      colors : {
        current: '#274C5B',
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'Yellowtail': ["Yellowtail"]
      },
      backgroundImage: {
        'testimonialBg': "url('assets/images/img7.jpg')",
        'landingBg': "url('assets/images/img1.jpg')",  
      },
    },
  },
  plugins: [],
}

