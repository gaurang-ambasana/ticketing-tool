/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
  colors: {
    nav: "#18222f",
    page: "#2b3441",
    card: "#47566a",
    "card-hover": "#4f5e74",
    "default-text": "#f1f3f5",
    "blue-accent": "#0084d4",
    "blue-accent-hover": "#009fff",
    delete: "#EF5350",
    "delete-hover": "#EF9A9A",
    fire: "yellow",
    "non-fire": "#94A3B8",
    progress: "#C8C8C8",
    "progress-inside": "#1E88E5",
    "status-text": "#616161",
    "green-status-bg": "#A5D6A7",
    "yellow-status-bg": "#FFF59D",
    "red-status-bg": "#EF9A9A",
    "default-status-bg": "#A3A8A8",
  },
};
export const plugins = [];
