module.exports = {
    // Especificamos el modo JIT para una generación más eficiente de clases
    mode: 'jit',
    // Definimos los archivos que Tailwind debe analizar
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    // Desactivamos la preflight para mantener los estilos por defecto del navegador
    preflight: false,
    // Personalizamos el tema de Tailwind
    theme: {
        extend: {
            // Extendemos los colores con nuestra paleta personalizada
            colors: {
                'brand-blue': '#1a73e8',
                'brand-green': '#34a853',
            },
            // Añadimos fuentes personalizadas
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            // Personalizamos los breakpoints
            screens: {
                'xs': '475px',
            },
        },
    },
    // Añadimos variantes personalizadas
    variants: {
        extend: {
            // Habilitamos la variante 'group-focus' para todos los utilidades
            backgroundColor: ['group-focus'],
        },
    },
    // Especificamos los plugins que queremos utilizar
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}