/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js,ts}'],
  theme: {
    extend: {
      textColor: {
        'grayish-blue': 'hsl(220, 15%, 55%)',
        'dark-blue': 'hsl(218, 44%, 22%)',
      },
      backgroundColor: {
        'light-gray': 'hsl(212, 45%, 89%)',
      },
    },
  },
  plugins: [],
};
