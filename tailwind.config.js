/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.7s ease-out forwards',
        'slideInRight': 'slideInRight 0.7s ease-out forwards',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(25px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      backgroundColor: {
        'gradient-dark': 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [],
}
