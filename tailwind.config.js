module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'draw-path': 'draw-path 3.5s 1 linear forwards',
      },
      keyframes: {
        'draw-path': {
          '100%': {
            'stroke-dashoffset': '0%',
          },
        },
      },
    },
  },
  plugins: [],
};
