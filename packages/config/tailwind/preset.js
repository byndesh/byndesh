/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        bynd: {
          // PRIMARY ORANGE FAMILY
          flame: "#FF5F0F",       // Primary brand orange
          "flame-light": "#FF7A3D", // Hover states
          "flame-pale": "#FF9D71",  // Tags on dark
          "flame-deep": "#C24B0A",  // Active/pressed
          "flame-darkest": "#B83D08", // Active endpoint
          
          // GOLD / SECONDARY FAMILY
          amber: "#E8A830",     // Secondary gold
          gold: "#F0C060",      // Tertiary gold / Emphasis on dark
          wheat: "#F5DFA0",     // Warm neutral / Sunrise midpoint
          
          // NEUTRAL FAMILY
          ink: "#1D1D1B",       // Primary dark
          charcoal: "#2A1510",  // Deepest dark
          stone: "#4A4A48",     // Body text on light
          pewter: "#5E5E5C",    // Secondary text
          ash: "#7A7A78",       // Tertiary text / body default
          silver: "#A1A1A0",    // Disabled / section labels
          mist: "#C8C8C7",      // Body text on dark
          border: "#D9D8C3",    // Dividers/borders on light

          // SURFACE FAMILY
          cream: "#FAF9F2",     // Page background
          parchment: "#F4F3E6", // Secondary light / footer
          linen: "#E8E7D4",     // Tertiary light / fog endpoint
          ivory: "#FFFAF0",     // Ivory highlights
          blush: "#FFE4D4",     // Blush warm tint
          peach: "#FFC5A8",     // Peach warm accent
          
          // Legacy/Fallback aliases (kept for stability)
          orange: "#FF5F0F",
          black: "#1D1D1B",
          paper: "#FAF9F2",
        },
      },
      fontFamily: {
        logo: ["var(--font-titillium-web)", "sans-serif"],
        heading: ["var(--font-titillium-web)", "sans-serif"],
        body: ["var(--font-goudy)", "serif"],
        signature: ["var(--font-lavishly)", "cursive"],
        ui: ["var(--font-titillium-web)", "sans-serif"],
        accent: ["var(--font-lavishly)", "cursive"],
      },
      fontSize: {
        "micro": ["9px", { lineHeight: "1", letterSpacing: "0.4em", fontWeight: "700" }],
        "label": ["10px", { lineHeight: "1.2", letterSpacing: "0.15em", fontWeight: "700" }],
      },
      boxShadow: {
        "premium": "0 20px 50px -15px rgba(255, 95, 15, 0.15)",
        "soft": "0 2px 8px rgba(0,0,0,0.05)",
        "flame": "0 4px 15px rgba(255, 95, 15, 0.15)",
        "flame-lg": "0 8px 25px rgba(255, 95, 15, 0.25)",
      },
      borderRadius: {
        'btn': '2px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        'panel': '40px',
      },
    },
  },
  plugins: [],
};
