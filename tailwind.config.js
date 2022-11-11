/** @type {import('tailwindcss').Config} */

const optsColors = ['primary', 'danger', 'secondary', 'success', 'danger', 'info', 'warning'];
const safelist = ['animate-spin', 'animate-spin-slow', 'hidden'];
optsColors.forEach(color => {
  safelist.push(`text-${color}`);
  safelist.push(`bg-${color}`);
  safelist.push(`hover:bg-${color}`);
  safelist.push(`hover:bg-${color}Hover`);
  safelist.push(`bg-${color}Disabled`);
  safelist.push(`border-${color}`);
  safelist.push(`border-${color}Hover`);
  safelist.push(`border-${color}Disabled`);
  safelist.push(`hover:border-${color}`);
  safelist.push(`hover:bg-${color}`);
});

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {

    extend: {
      container: {
        center: true
      },
      boxShadow: { '3xl': "rgba(0, 0, 0, 0.10) 0px 5px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-right': 'bounceRight 1s infinite',
        'bounce-left': 'bounceLeft 1s infinite',
      },
      colors: {
        primary: 'var(--primary-color)',
        primaryHover: 'var(--primary-hover-color)',
        primaryDisabled: 'var(--primary-disabled-color)',
        secondary: 'var(--secondary-color)',
        secondaryHover: 'var(--secondary-hover-color)',
        secondaryDisabled: 'var(--secondary-disabled-color)',
        success: 'var(--success-color)',
        successHover: 'var(--success-hover-color)',
        successDisabled: 'var(--success-disabled-color)',
        danger: 'var(--danger-color)',
        dangerHover: 'var(--danger-hover-color)',
        dangerDisabled: 'var(--danger-disabled-color)',
        info: 'var(--info-color)',
        infoHover: 'var(--info-hover-color)',
        infoDisabled: 'var(--info-disabled-color)',
        warning: 'var(--warning-color)',
        warningHover: 'var(--warning-hover-color)',
        warningDisabled: 'var(--warning-disabled-color)',
      },

      borderColor: {
        primary: 'var(--primary-color)',
        'primary-hover': 'var(--primary-hover-color)',
        'primary-disabled': 'var(--primary-disabled-color)',
        secondary: 'var(--secondary-color)',
        'secondary-hover': 'var(--secondary-hover-color)',
        'secondary-disabled': 'var(--secondary-disabled-color)',
        success: 'var(--success-color)',
        'success-hover': 'var(--success-hover-color)',
        'success-disabled': 'var(--success-disabled-color)',
        danger: 'var(--danger-color)',
        'danger-hover': 'var(--danger-hover-color)',
        'danger-disabled': 'var(--danger-disabled-color)',
        info: 'var(--info-color)',
        'info-hover': 'var(--info-hover-color)',
        'info-disabled': 'var(--info-disabled-color)',
        warning: 'var(--warning-color)',
        'warning-hover': 'var(--warning-hover-color)',
        'warning-disabled': 'var(--warning-disabled-color)',
      },
      keyframes: {
        bounceLeft: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(0)' },
          '80%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(0)' },
          '40%': { transform: 'translateX(10px)' },
          '60%': { transform: 'translateX(5px)' },
        },
        bounceRight: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(0)' },
          '80%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(0)' },
          '40%': { transform: 'translateX(-10px)' },
          '60%': { transform: 'translateX(-5px)' },
        },
      },
    },


  },

  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },


};
