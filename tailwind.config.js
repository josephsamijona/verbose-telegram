// tailwind.config.js
import typographyPlugin from '@tailwindcss/typography';
import formsPlugin from '@tailwindcss/forms';
import aspectRatioPlugin from '@tailwindcss/aspect-ratio';
import textShadowPlugin from 'tailwindcss-textshadow';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  // Mobile-first par défaut
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  // Thème personnalisé avec focus sur le luxe et la modernité
  theme: {
    // Breakpoints étendus pour une meilleure responsivité
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
      '2xl': '1536px',
      '3xl': '1920px',
    },
    
    extend: {
      // Palette de couleurs luxueuse
      colors: {
        // Couleurs principales
        'ranch': {
          50: '#E6F2F2',
          100: '#CCE5E5',
          200: '#99CBCB',
          300: '#66B2B2',
          400: '#4DA3A3', // Couleur principale
          500: '#337676',
          600: '#2A5F5F',
          700: '#224949',
          800: '#1A3737',
          900: '#112424',
          950: '#091919',
        },
        
        // Accents dorés pour le luxe
        'gold': {
          50: '#FBF7E5',
          100: '#F7EFCB',
          200: '#EFDF96',
          300: '#E7CF62',
          400: '#DFBF2D',
          500: '#C5A828', // Doré principal
          600: '#9E8620',
          700: '#786519',
          800: '#514313',
          900: '#28220A',
          950: '#141105',
        },
        
        // Palette bronze pour les accents secondaires
        'bronze': {
          50: '#F9F4EF',
          100: '#F2E9DE',
          200: '#E6D3BE',
          300: '#D9BD9D',
          400: '#CDA77D',
          500: '#C0915C', // Bronze principal
          600: '#A77A45',
          700: '#7F5C34',
          800: '#573D23',
          900: '#2E1F11',
          950: '#170F09',
        },
        
        // Gris élégants et neutres
        'silver': {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECF0', 
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD', // Argent principal
          600: '#868E96',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
          950: '#121416',
        },
        
        // Noir riche pour contraste
        'luxury-black': {
          DEFAULT: '#121212',
          light: '#1E1E1E',
          dark: '#0A0A0A',
        },
      },
      
      // Typographie luxueuse
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        display: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
      },
      
      // Tailles de polices élégantes
      fontSize: {
        'xxs': '0.65rem',
        'xs': '0.75rem',  
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      
      // Bordures élégantes
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      
      // Rayons de bordure pour éléments modernes
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      
      // Ombres premium
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'premium': '0 10px 50px -12px rgba(0, 0, 0, 0.25)',
        'premium-soft': '0 10px 30px -10px rgba(0, 0, 0, 0.2)',
        'gold': '0 8px 28px -6px rgba(197, 168, 40, 0.4)',
        'none': 'none',
      },
      
      // Transitions fluides
      transitionDuration: {
        DEFAULT: '150ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      
      // Animation spécifiques pour expérience luxueuse
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'scale': 'scale 0.3s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 4s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
      
      // Espacement personnalisé pour des mises en page élégantes
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
      
      // Hauteurs de ligne pour une typographie soignée
      lineHeight: {
        'tighter': '1.1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
        'extra-loose': '2.5',
      },
      
      // Z-index étendus pour les superpositions
      zIndex: {
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
        'auto': 'auto',
      },
      
      // Opacités précises
      opacity: {
        '0': '0',
        '5': '0.05',
        '10': '0.1',
        '15': '0.15',
        '20': '0.2',
        '25': '0.25',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '75': '0.75',
        '80': '0.8',
        '85': '0.85',
        '90': '0.9',
        '95': '0.95',
        '100': '1',
      },
      
      // Gradients élégants
      backgroundImage: {
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(45deg, #C5A828, #E7CF62, #C5A828)',
        'gradient-ranch': 'linear-gradient(to right, #337676, #4DA3A3)',
        'gradient-dark': 'linear-gradient(to right, #121212, #1E1E1E)',
      },
      
      // Effets backdrop pour un design moderne
      backdropBlur: {
        'none': '0',
        'sm': '4px',
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
    },
  },
  
  // Plugins pour fonctionnalités avancées
  plugins: [
    typographyPlugin, // Pour du contenu riche et bien formaté
    formsPlugin({
      strategy: 'class', // Uniquement appliqué aux éléments avec la classe 'form-input', etc.
    }),
    aspectRatioPlugin, // Pour maintenir les ratios d'aspect des images
    textShadowPlugin, // Pour des ombres de texte élégantes
    
    // Plugin pour créer des styles Safari/Chrome compatibles
    function({ addBase, theme }) {
      addBase({
        'html': { fontSmoothing: 'antialiased' },
        '*, ::before, ::after': { 
          boxSizing: 'border-box',
          borderStyle: 'solid',
          borderWidth: '0'
        },
        'body': {
          color: theme('colors.silver.800', '#212529'),
          fontFamily: theme('fontFamily.sans'),
          lineHeight: theme('lineHeight.normal'),
          fontSmoothing: 'antialiased',
          textRendering: 'optimizeLegibility',
        },
        ':focus': {
          outline: `2px solid ${theme('colors.ranch.400')}`,
          outlineOffset: '2px',
        },
        // Support pour les écrans sombres
        '@media (prefers-color-scheme: dark)': {
          'html': {
            colorScheme: 'dark',
          },
          'body': {
            color: theme('colors.silver.200', '#E9ECF0'),
            backgroundColor: theme('colors.luxury-black.DEFAULT', '#121212'),
          },
        },
      });
    },
  ],
  
  // Variables pour mode sombre
  darkMode: 'class',
};