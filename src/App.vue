<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  a:hover {
    text-decoration: none!important;
  }

  .tabs ul li {
    flex: 1
  }

  img {
    max-height: 100%;
    max-width: 100%;
  }

  a, a:hover, a:focus {
    outline: none;
  }

  .dropdown-item {
    display: inline-flex!important;
    align-items: center;
  }

  .dropdown .background {
    background-color: rgba(25, 25, 25, 0.7);
  }

  @import "assets/fonts/materialdesignicons.css";


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
