import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "sm": "640px",
        "md": "768px",
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "home-md": "1320px",
        "dest-md": "1100px",
        "crew-md": "1150px",
        "tech-md": "1260px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "in-and-out": {
          "0%, 100%": {
            "transform": "scale(1)",
          },
          "50%": {
            "transform": "scale(1.4)",
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "in-and-out": "in-and-out 2s ease-in-out infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

/* 


import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      screens: {
        "home-md": "1320px",
        "dest-md": "1100px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "in-and-out": {
          "0%, 100%": {
            "transform": "scale(1)",
          },
          "50%": {
            "transform": "scale(1.4)",
          }
        }
      },
      animation: {
        "in-and-out": "in-and-out 2s ease-in-out infinite"
      }
    },
  },
  plugins: [],
};
export default config;


*/