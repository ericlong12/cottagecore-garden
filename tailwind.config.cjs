/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF2E6",
        sage: "#A8C1A1",
        moss: "#6F8F6A",
        ink: "#3B3A3A",
        blush: "#EBC6B9",
        butter: "#F5E2A8",
        lavender: "#D4C5E2"
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      keyframes: {
        leafdrift: {
          '0%': { transform: 'translateY(-10%) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '100%': { transform: 'translateY(120%) translateX(40px) rotate(45deg)', opacity: '0' },
        }
      },
      animation: {
        leafdrift: 'leafdrift 12s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
