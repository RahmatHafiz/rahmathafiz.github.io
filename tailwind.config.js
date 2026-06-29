module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Josefin Sans"', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  }
}
