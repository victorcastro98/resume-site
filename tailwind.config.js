/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
            background: 'var(--background)',
            text: 'var(--text)',
            menu: 'var(--menu)',
            primary: '#FF007A'
          
        },
        keyframes: {
          glow: {
            '0%, 100%': {
              boxShadow: '0 0 10px rgba(255, 0, 150, 0.5)',
            },
            '50%': {
              boxShadow: '0 0 20px rgba(255, 0, 150, 0.8)',
            },
          },
        },
        animation: {
          glow: 'glow 2s ease-in-out infinite',
        },
      },
    },
  plugins: [],
}

