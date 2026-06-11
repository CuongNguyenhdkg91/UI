// @type {import('tailwindcss').Config}
module.exports = {
  corePlugins:{
    // preflight: false,
  },
  content: [
    "./reuseable/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        dark: {
          navy: "#162147",
        },
      },
      fontFamily: {
        jim: ['Jim Nightshade'],
      },
    },

    extend: {
       backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    }, 

    // screens: {
    //   md: { max: "550px" },
    //   tbl: { max: "1000px" },
    // },
  },
  plugins: [],
};
