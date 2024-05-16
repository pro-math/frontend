/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["game.html"],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
  theme: { 

    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#020617',
      'white': '#ffffff',
      'grey': '#94a3b8',
      'black-grey': '#64748b',
      'dark-grey': '#334155',
      'ligth-grey': '#cbd5e1',
      'dark-green': '#047857',
      'dark-red': '#991b1b'
    },
    spacing: {
      '1': '2px',
      '2': '10px',
      '3': '15px',
      '4': '20px',
      '5': '25px',
      '6': '30px',
    }
    
  },
  plugins: [
    require('daisyui'),
  ],
}

