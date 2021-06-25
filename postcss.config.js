// const tailwindcss = require('tailwindcss');

// module.exportst = {

//     Plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')],
// };
module.exports = {
    plugins: [
        // require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer')
    ]
}