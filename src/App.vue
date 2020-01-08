<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  @import "assets/fonts/materialdesignicons.css";
  @charset "UTF-8";

  @font-face {
    font-family: "streamvader";
    src:url("fonts/streamvader.eot");
    src:url("fonts/streamvader.eot?#iefix") format("embedded-opentype"),
    url("fonts/streamvader.woff") format("woff"),
    url("fonts/streamvader.ttf") format("truetype"),
    url("fonts/streamvader.svg#streamvader") format("svg");
    font-weight: normal;
    font-style: normal;

  }

  [data-icon]:before {
    font-family: "streamvader" !important;
    content: attr(data-icon);
    font-style: normal !important;
    font-weight: normal !important;
    font-variant: normal !important;
    text-transform: none !important;
    speak: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [class^="icon-"]:before,
  [class*=" icon-"]:before {
    font-family: "streamvader" !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-variant: normal !important;
    text-transform: none !important;
    speak: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-wasd:before {
    content: "\61";
  }
  .icon-goodgame:before {
    content: "\62";
  }

  /* roboto-100 - cyrillic_latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    src: url('./assets/fonts/roboto-v20-cyrillic_latin-100.eot'); /* IE9 Compat Modes */
    src: local('Roboto Thin'), local('Roboto-Thin'),
    url('./assets/fonts/roboto-v20-cyrillic_latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./assets/fonts/roboto-v20-cyrillic_latin-100.woff2') format('woff2'), /* Super Modern Browsers */
    url('./assets/fonts/roboto-v20-cyrillic_latin-100.woff') format('woff'), /* Modern Browsers */
    url('./assets/fonts/roboto-v20-cyrillic_latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
    url('./assets/fonts/roboto-v20-cyrillic_latin-100.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  /* roboto-300 - cyrillic_latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url('./assets/fonts/roboto-v20-cyrillic_latin-300.eot'); /* IE9 Compat Modes */
    src: local('Roboto Light'), local('Roboto-Light'),
    url('./assets/fonts/roboto-v20-cyrillic_latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./assets/fonts/roboto-v20-cyrillic_latin-300.woff2') format('woff2'), /* Super Modern Browsers */
    url('./assets/fonts/roboto-v20-cyrillic_latin-300.woff') format('woff'), /* Modern Browsers */
    url('./assets/fonts/roboto-v20-cyrillic_latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
    url('./assets/fonts/roboto-v20-cyrillic_latin-300.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  /* roboto-regular - cyrillic_latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('./assets/fonts/roboto-v20-cyrillic_latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Roboto'), local('Roboto-Regular'),
    url('./assets/fonts/roboto-v20-cyrillic_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./assets/fonts/roboto-v20-cyrillic_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
    url('./assets/fonts/roboto-v20-cyrillic_latin-regular.woff') format('woff'), /* Modern Browsers */
    url('./assets/fonts/roboto-v20-cyrillic_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
    url('./assets/fonts/roboto-v20-cyrillic_latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
  }
</style>
