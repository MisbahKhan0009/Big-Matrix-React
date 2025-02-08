/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        accent: {
          DEFAULT: "#444444", // Darker gray (instead of white)
          foreground: "#ffffff", // White for contrast
        },
        primary: {
          DEFAULT: "#0d7a64", // Darker green (instead of #1bb69c)
          foreground: "#ffffff", // White for contrast
        },
        secondary: {
          DEFAULT: "#ffffff", // Darker green (slightly darker than primary)
          foreground: "#ffffff", // White for contrast
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      animation: {
        "button-before": "buttonBefore 0.5s cubic-bezier(0.55, 0, 0.1, 1) forwards",
        "button-after": "buttonAfter 0.5s cubic-bezier(0.55, 0, 0.1, 1) forwards",
        "reveal-x": "revealX 0.3s ease-out forwards",
        "reveal-x-delay": "revealX 0.3s ease-out 0.1s forwards",
        shine: "shine 3s ease-out infinite",
        "slide-right": "slideRight 0.3s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out forwards",
        "rotate-border": "rotateBorder 3s linear infinite",
      },
      keyframes: {
        rotateBorder: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        buttonBefore: {
          "0%": { top: "100%", transform: "translateX(-50%) scaleY(1) scaleX(1.25)" },
          "100%": { top: "-35%", transform: "translateX(-50%) scaleY(1.3) scaleX(0.8)", backgroundColor: "#009087" },
        },
        buttonAfter: {
          "0%": { top: "180%", transform: "translateX(-50%) scaleY(1) scaleX(1.45)" },
          "100%": { top: "-45%", transform: "translateX(-50%) scaleY(1.3) scaleX(0.8)", backgroundColor: "#009087" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        revealX: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "25%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        slideRight: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        slideDown: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "100%": { transform: "scaleY(1)", transformOrigin: "top" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
