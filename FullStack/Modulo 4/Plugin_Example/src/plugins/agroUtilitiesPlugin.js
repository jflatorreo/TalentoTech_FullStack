const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities }) {
    const newUtilities = {
        '.soil-texture': {
            'background-image': 'repeating-linear-gradient(45deg, var(--tw-soil-light) 0, var(--tw-soil-light) 1px, var(--tw-soil-dark) 0, var(--tw-soil-dark) 50%)',
            'background-size': '10px 10px',
        },
        '.sky-texture': {
            'background-image': 'radial-gradient(circle, var(--tw-sky-light) 20%, transparent 20%), radial-gradient(circle, var(--tw-sky-light) 20%, transparent 20%)',
            'background-size': '15px 15px',
            'background-position': '0 0, 7.5px 7.5px',
        },
        '.water-texture': {
            'background-image': 'radial-gradient(circle at center, var(--tw-water-dark) 0, var(--tw-water-light) 75%, var(--tw-water) 100%)',
            'background-size': '20px 20px',
        },
    };

    addUtilities(newUtilities);
});