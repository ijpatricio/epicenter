// Adding Tailwind CSS to an Existing Project: https://www.youtube.com/watch?v=oG6XPy1t1KA

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src'
  ],

  corePlugins: {
    preflight: false,
  },

  important: true,

  prefix: 'tw-',

  theme: {
    extend: {
      //
    },
  },

  plugins: [
    //
  ],
}
