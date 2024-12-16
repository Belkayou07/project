/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.875rem',     // increased from default
        'sm': '1rem',          // increased from default
        'base': '1.125rem',    // increased from default
        'lg': '1.25rem',       // increased from default
        'xl': '1.5rem',        // increased from default
        '2xl': '1.875rem',     // increased from default
        '3xl': '2.25rem',      // increased from default
        '4xl': '3rem',         // increased from default
        '5xl': '3.75rem',      // increased from default
        '6xl': '4.5rem',       // increased from default
        '7xl': '5.5rem',       // increased from default
        '8xl': '6.5rem',       // increased from default
        '9xl': '8rem'          // increased from default
      },
      spacing: {
        // Increase default spacing by 25%
        '0.5': '0.125rem',
        '1': '0.25rem',
        '1.5': '0.375rem',
        '2': '0.5rem',
        '2.5': '0.625rem',
        '3': '0.75rem',
        '3.5': '0.875rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem'
      },
      colors: {
        'pure-white': '#FFFFFF',
        'off-white': '#F5F5F5',
        'deep-black': '#000000',
        'soft-black': '#1A1A1A'
      },
      backgroundImage: {
        'slatted-wall': `
          repeating-linear-gradient(
            90deg, 
            #FFFFFF 0%, 
            #FFFFFF 49%, 
            #000000 49%, 
            #000000 51%, 
            #FFFFFF 51%, 
            #FFFFFF 100%
          )
        `,
        'dense-slatted-wall': `
          linear-gradient(90deg, 
            rgba(0,0,0,0.2) 2px, 
            transparent 2px), 
          linear-gradient(rgba(0,0,0,0.2) 2px, 
            transparent 2px)
        `,
        'wooden-slatted-wall': `
          linear-gradient(to right, 
            rgba(255,255,255,0.9) 0%, 
            rgba(255,255,255,0.9) 95%, 
            rgba(0,0,0,0.1) 95%, 
            rgba(0,0,0,0.1) 100%
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 19px,
            rgba(0,0,0,0.05) 19px,
            rgba(0,0,0,0.05) 20px
          )
        `
      },
      backgroundSize: {
        'slatted-small': '50px 50px',
        'slatted-medium': '75px 75px',
        'slatted-large': '100px 100px',
        'slatted-narrow': '100px 100%',
        'slatted-medium': '200px 100%',
        'slatted-wide': '300px 100%'
      },
      boxShadow: {
        'wooden-panel': '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)',
        'wooden-panel-deep': '0 10px 15px rgba(0,0,0,0.15), 0 4px 6px rgba(0,0,0,0.1)'
      },
      borderWidth: {
        '1': '1px'
      },
      animation: {
        'scroll-right': 'scrollRight 120s linear infinite',
        'scroll-left': 'scrollLeft 120s linear infinite'
      },
      keyframes: {
        scrollRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        scrollLeft: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        }
      }
    },
  },
  plugins: [],
};
