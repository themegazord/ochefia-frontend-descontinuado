<template>
  <NavbarComponent :links="getAllConfiguredLinks"/>
  <router-view />
</template>
<script>
import NavbarComponent from './components/NavbarComponent.vue';
import { mapGetters } from 'vuex'
export default {
components: {NavbarComponent},
computed: {
  ...mapGetters([
    'getAllConfiguredLinks'
  ])
}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
@import url('./styles/common.css');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

</style>
