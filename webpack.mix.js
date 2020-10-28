const mix = require('laravel-mix');
const sidebarItems = require('./sidebar-items.json');

require('laravel-mix-nunjucks')

mix.njk('src/', '../../../public/ui/voler/', {
   watch: false,
   data: {
      web_title: "Voler Admin Dashboard",
      sidebarItems
   },
   block: 'content',
   // marked: null,
   envOptions: {
      watch: true,
      noCache: true
   },
   manageEnv: (nunjucks) => {
      nunjucks.addFilter('containString', function(str, containStr) {
         if(str == undefined) return false;
         return str.indexOf(containStr) >= 0
      })
   },
})
mix
   .js("src/assets/js/app.js", "../../../public/ui/voler/js")
   .js("src/assets/js/main.js", "../../../public/ui/voler/js")
   .js("src/assets/js/feather-icons.js", "../../../public/ui/voler/js")
   .sass("src/assets/scss/app.scss", "../../../public/ui/voler/css")
   .options({
      processCssUrls: false
   })
   .sass("src/assets/scss/bootstrap.scss", "../../../public/ui/voler/css")
   .setPublicPath("../../../public/ui/voler");
// get the vendor assets public
/*
mix
	.copy("node_modules/apexcharts/dist/apexcharts.min.css", "../../../public/ui/voler/vendor");
*/

	