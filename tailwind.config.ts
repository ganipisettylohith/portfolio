import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        canvas: {
          light: "#F8FAFC",
          soft: "#F6F8FB",
          ice: "#F4F7FF",
        },
        brand: {
          indigo: "#4F46E5",
          indigoLight: "#6366F1",
          blue: "#2563EB",
          cyan: "#06B6D4",
          lavender: "#8B5CF6",
          emerald: "#10B981",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "light-glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.65))",
        "gradient-brand": "linear-gradient(135deg, #4F46E5 0%, #2563EB 50%, #06B6D4 100%)",
        "gradient-accent": "linear-gradient(135deg, #8B5CF6 0%, #4F46E5 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 3s linear infinite",
        "aurora": "aurora 15s ease-in-out infinite alternate",
        "spotlight": "spotlight 2s ease .5s 1 forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1.5deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(-2deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        aurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      boxShadow: {
        "apple": "0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        "apple-hover": "0 20px 40px -15px rgba(79, 70, 229, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.04)",
        "glow-indigo": "0 0 25px -5px rgba(79, 70, 229, 0.3)",
        "glow-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
