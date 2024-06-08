/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["game.html", "profile.html", "overall_rating.html"], 
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

    extend: {
      spacing: {
        'xs': '2rem',
        '3xs': '3rem',
        '5xs': '5rem',
        '4xs': '8rem',
        '6xs': '12rem',
        '6.5xs': '16rem',
        '7xs': '20rem',
        
        '13xs': '26rem',
        '20xs': '35rem'
      }
    },
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
    },
    fontFamily: {
      body: ["Montserrat"],
      timer: ["Orbitron"],
    },
    borderRadius: {
      'full': '50%',
    }
    
  },
  plugins: [
    require('daisyui'),
  ],
}

