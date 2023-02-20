<template>
<div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <HomePage  />
    
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/HomePage.vue'

export default {
    name: 'App',
    components: {
        // HelloWorld,
        HomePage
    }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
   
}
</style>
