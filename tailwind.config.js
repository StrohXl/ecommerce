/** @type {import('tailwindcss').Config} */
console.log(useRuntimeConfig().public.colorPrimary)
export default {
  content: [],
  theme: {
    extend: {
      colors:{
        "primary": "#fff"
      },
      fontSize:{
        '10xl': '10rem',
        '12xl': '12rem',
        '14xl': '14rem',
        '16xl': '16rem',
        '18xl': '18rem',
        '20xl': '20rem',
        '22xl': '22rem',
        '24xl': '24rem',
        '26xl': '26rem',
        '28xl': '28rem',


      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
}

