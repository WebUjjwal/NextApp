/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },


      fontFamily: {
        'sfMono': ['sf mono'],
        'sfPro': ['sf pro'],
        'degular': ['degular'],
      },


      fontSize: {
        '18px': '18px',
        '20px': '20px',
        '74px': '74px',
      },

      screens: {
        '2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }


        '1199px': { 'max': '1199px' },

        '991px': { 'max': '991px' },
        // => @media (max-width: 1023px) { ... }

        '716px': { 'max': '716px' },
        // => @media (max-width: 767px) { ... }

        'sm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }
      }

    },




  },
  plugins: [],
};
