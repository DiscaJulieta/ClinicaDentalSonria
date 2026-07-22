/** @type {import('tailwindcss').Config} */
// Tokens de marca — fuente de verdad: DESIGN.md §1 y §6
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        bg: '#FBFCFD',      // fondo (blanco cálido)
        alt: '#EAF4F2',     // fondo alterno / cards
        ink: '#12333F',     // texto y CTA (azul petróleo)
        brand: '#8FCFC4',   // marca menta
        accent: '#C9A96A',  // dorado — solo detalles finos
        error: '#BA1A1A',   // validación de formularios (DESIGN.md §1)
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'serif'], // títulos
        sans: ['Inter', 'sans-serif'],        // cuerpo/UI (default)
      },
      maxWidth: { container: '1280px' },
      boxShadow: { ambient: '0 10px 30px rgba(18,51,63,.05)' },
      spacing: { section: '120px' },
    },
    // radios de DESIGN.md §4: base 4px, cards/modales 8px
    borderRadius: {
      none: '0',
      DEFAULT: '4px',
      lg: '8px',
      full: '9999px',
    },
  },
  plugins: [],
};
