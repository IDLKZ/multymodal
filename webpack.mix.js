const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css')
//     .sourceMaps();

mix.styles(
    [
    "resources/app-assets/vendors/css/vendors.min.css",
    "resources/app-assets/css/bootstrap.css",
    "resources/app-assets/css/bootstrap-extended.css",
    "resources/app-assets/css/colors.css",
    "resources/app-assets/css/components.css",
    "resources/app-assets/css/themes/dark-layout.css",
    "resources/app-assets/css/themes/semi-dark-layout.css",
    "resources/app-assets/css/core/menu/menu-types/vertical-menu.css",
    "resources/app-assets/css/pages/authentication.css",
     ],
    "public/admin/admin.css"
)

mix.js(
    [
        "resources/app-assets/vendors/js/vendors.min.js",
        "resources/app-assets/fonts/LivIconsEvo/js/LivIconsEvo.tools.js",
        "resources/app-assets/fonts/LivIconsEvo/js/LivIconsEvo.defaults.js",
        "resources/app-assets/fonts/LivIconsEvo/js/LivIconsEvo.min.js",
        "resources/app-assets/js/scripts/configs/vertical-menu-dark.js",
        "resources/app-assets/js/core/app-menu.js",
        "resources/app-assets/js/core/app.js",
        "resources/app-assets/js/scripts/components.js",
        "resources/app-assets/js/scripts/footer.js",
    ],
    "public/admin/admin.js"

)
