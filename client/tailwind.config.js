/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: ['class'],
  theme: {
    screens: {
      'big-screen': {'max': '2800px'},
    

      'laptop': {'max': '1580px'},
     

      'screen': {'max': '1088px'},
   

      'tablet': {'max': '867px'},
   

      'mobile': {'max': '680px'},
      'small-mobile': {'max':'390px'}
  
    },
    extend: {
      backgroundImage: (theme) => ({
        'image-one':
          "url('/src/assets/hero-black1.jpg')",
        'image-two':
          "url('/src/assets/hero-white1.webp')",
          'image-three':"url('/src/assets/parallax2.webp')",
          'image-four':"url('/src/assets/parallax11.webp')",
          'image-five':"url('/src/assets/parallax12.webp')",
          'image-six':"url('/src/assets/contact-hero.webp')",
          'image-seven':"url('/src/assets/thanks.webp')",
          'image-eight':"url('/src/assets/about-hero.webp')",
          'image-nine':"url('/src/assets/bike-shop2.webp')",
      }),
    },
  },
  plugins: [],
}
