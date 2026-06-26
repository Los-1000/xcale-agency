/** @type {import('tailwindcss').Config} */
// Config compartida por las 7 páginas (tokens Material Design 3 idénticos en todas).
// Build: npm run build:css  ->  genera xcale.css (utilidades purgadas + minificadas).
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "surface-container-high": "#272a2c",
        "surface-container-lowest": "#0b0f10",
        "inverse-primary": "#006397",
        "on-tertiary": "#472a00",
        "primary": "#92ccff",
        "on-background": "#e0e3e5",
        "tertiary": "#ffb962",
        "surface-container": "#1d2022",
        "on-secondary-container": "#a8b6ca",
        "on-primary-fixed": "#001d31",
        "on-secondary-fixed-variant": "#3a4859",
        "on-error": "#690005",
        "on-tertiary-fixed": "#2b1700",
        "on-tertiary-container": "#3e2400",
        "on-secondary-fixed": "#0f1c2c",
        "on-secondary": "#243141",
        "tertiary-fixed": "#ffddb9",
        "secondary-fixed-dim": "#bac8dc",
        "secondary-fixed": "#d6e4f9",
        "outline": "#8a919b",
        "tertiary-container": "#c68222",
        "surface-variant": "#323537",
        "inverse-on-surface": "#2d3133",
        "secondary-container": "#3a4859",
        "on-primary-fixed-variant": "#004b73",
        "error-container": "#93000a",
        "inverse-surface": "#e0e3e5",
        "primary-fixed-dim": "#92ccff",
        "primary-fixed": "#cce5ff",
        "on-primary": "#003351",
        "on-error-container": "#ffdad6",
        "surface-tint": "#92ccff",
        "surface-container-low": "#191c1e",
        "background": "#101415",
        "surface-container-highest": "#323537",
        "secondary": "#bac8dc",
        "surface-dim": "#101415",
        "on-primary-container": "#00060e",
        "surface-bright": "#363a3b",
        "tertiary-fixed-dim": "#ffb962",
        "on-tertiary-fixed-variant": "#663e00",
        "primary-container": "#1e7db8",
        "error": "#ffb4ab",
        "on-surface": "#e0e3e5",
        "outline-variant": "#404850",
        "surface": "#101415",
        "on-surface-variant": "#c0c7d1"
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      spacing: { "container-max": "1280px", "gutter": "24px", "margin-desktop": "64px", "base": "8px", "margin-mobile": "16px" },
      fontFamily: {
        // Display / titulares: Space Grotesk (carácter técnico-moderno)
        "headline-lg": ["Space Grotesk", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        "headline-xl": ["Space Grotesk", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        "display-lg-mobile": ["Space Grotesk", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        "display-lg": ["Space Grotesk", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        // Cuerpo / etiquetas: Hanken Grotesk (humanista, cálida, legible)
        "label-md": ["Hanken Grotesk", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        "body-lg": ["Hanken Grotesk", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        "body-md": ["Hanken Grotesk", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        // Fallback genérico para clases sans por defecto
        "sans": ["Hanken Grotesk", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"]
      },
      fontSize: {
        "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-xl": ["48px", { lineHeight: "1.2", fontWeight: "600" }],
        "display-lg-mobile": ["40px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "label-md": ["14px", { lineHeight: "1.0", letterSpacing: "0.05em", fontWeight: "600" }],
        "display-lg": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
};
