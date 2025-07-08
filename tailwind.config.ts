import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b6b',
        secondary: '#4ecdc4',
        accent: '#45b7d1',
        success: '#96ceb4',
        warning: '#feca57',
        error: '#ff7675',
        'gradient-start': '#667eea',
        'gradient-end': '#764ba2',
        'dark-gradient-start': '#2c3e50',
        'dark-gradient-end': '#3498db',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'primary-gradient': 'linear-gradient(45deg, #ff6b6b, #45b7d1)',
        'secondary-gradient': 'linear-gradient(45deg, #4ecdc4, #96ceb4)',
        'main-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'dark-gradient': 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 107, 107, 0.3)',
        'glow-secondary': '0 0 20px rgba(78, 205, 196, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
