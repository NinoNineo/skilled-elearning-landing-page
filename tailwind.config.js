/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: 
    {
      colors:
      {
        greyblue: "#666CA3",
        darkblue: "#13183F",
        grrey: "#83869A",
        piink: "#F74780",
        lightpiink: "#FFA7C3",
        pinkgr: "#F02AA6",
        orangegr: "#FF6F48",
        purplegr: "#4851FF",
      },
      borderRadius:
      {
        borderRadius: 40
      },
      width:
      {
        width_350: 350
      },
      margin:
      {
        marginRight: 300
      }
    },
  },
  plugins: [],
}

