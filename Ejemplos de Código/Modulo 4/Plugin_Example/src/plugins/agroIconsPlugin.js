const plugin = require('tailwindcss/plugin');
const agroIcons = require('../utils/agroIcons');

module.exports = plugin(function({ addComponents }) {
    const iconComponents = Object.entries(agroIcons).
    map(([name, svg]) => ({
        [`.icon-${name}`]: {
            'mask-image': `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
            'background-color': 'currentColor',
            'display': 'inline-block',
            'width': '1em',
            'height': '1em',
        },
    }));
    addComponents(iconComponents);
})