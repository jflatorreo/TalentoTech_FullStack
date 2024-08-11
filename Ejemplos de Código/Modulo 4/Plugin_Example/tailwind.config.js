const naturalColors = require('./src/utils/naturalColors');
const agroIconsPlugin = require('./src/plugins/agroIconsPlugin')
const agroUtilitiesPlugin = require('./src/plugins/agroUtilitiesPlugin');

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: naturalColors,
        },
    },
    plugins: [agroIconsPlugin,agroUtilitiesPlugin],
}