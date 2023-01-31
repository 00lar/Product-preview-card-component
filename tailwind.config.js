/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textColor: {
        cyan: "hsl(158, 36%, 37%)",
        grayish: "hsl(228, 12%, 48%)",
      },
      backgroundColor: {
        cream: "hsl(30, 38%, 92%)",
        Primary: "hsl(158, 36%, 37%)",
      },
      fontFamily: {
        Monserrat: ["Monserrat", "sans-serif"],
        Franceus: ["Franceus", "serif"],
      },
      backgroundImage: {
        ProductMobile: "url('/images/product-mobile.jpg')",
        ProductDesktop: "url('/images/product-desktop.jpg')",
        CartIcon: "url('/images/icon-cart.svg')",
      },
    },
  },
  plugins: [],
};
