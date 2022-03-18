<template>
  <div id="app">
    <h1>{{ "Micro Frontend Three (Vue 2 + Leaflet)" }}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{ dateMoment }}
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import moment from "moment";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      dateMoment: moment().format("MMMM Do YYYY, h:mm:ss a"),
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
