/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "lg": "900px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#04365c",
        input: "#04365c",
        ring: "#04365c",
        background: "#ffffff",
        foreground: "#000000",
        primary: {
          DEFAULT: "#406c8a",
          foreground: "#c6e1f5",
        },
        secondary: {
          DEFAULT: "#ffffff",
          foreground: "#04365c",
        },
        destructive: {
          DEFAULT: "#cac8d0",
          foreground: "#04365c",
        },
        muted: {
          DEFAULT: "#ebedf2",
          foreground: "#04365c",
        },
        accent: {
          DEFAULT: "#eeedf6",
          foreground: "#04365c",
        },
        popover: {
          DEFAULT: "#cac8d0",
          foreground: "#04365c",
        },
        card: {
          DEFAULT: "#cac8d0",
          foreground: "#04365c",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    
  },
  plugins: [require("tailwindcss-animate")],
}
