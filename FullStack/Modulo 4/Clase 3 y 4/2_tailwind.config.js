const plugin = require('tailwindcss/plugin')

module.exports = {
    // ... otras configuraciones
    plugins: [
        plugin(function({ addUtilities, theme }) {
            const newUtilities = {
                '.text-shadow-sm': {
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                },
                '.text-shadow-md': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
                },
                '.text-shadow-lg': {
                    textShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',
                },
            }
            addUtilities(newUtilities, ['responsive', 'hover'])
        })
    ],
}

// Uso en React
function ShadowText({ children, size = 'md' }) {
    return (
        <span className={`text-shadow-${size} hover:text-shadow-lg transition-all duration-300`}>
      {children}
    </span>
    );
}