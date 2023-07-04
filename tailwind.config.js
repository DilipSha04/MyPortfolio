/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [],

    theme: {
    extend: {
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'bounce-short': 'bounce 1s cubic-bezier(0.25, 1.89, 0.25, 1) 3'
      },
    }
  }
}


