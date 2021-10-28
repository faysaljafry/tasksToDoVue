<template>
  <div class="container-fluid p-0">
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />

    <router-view name="Navbar"></router-view>
    <div class="container-fluid">
      <router-view v-slot="{ Component }">
        <AnimatedTransition name="bounce-left">
          <component :is="Component" />
        </AnimatedTransition>
      </router-view>
    </div>
  </div>
</template>

<script>
import AnimatedTransition from "./components/transitions/AnimatedTransition.vue";
//import { store } from "./store";
export default {
  name: "App",
  data() {
    return {};
  },
  components: { AnimatedTransition },
  beforeCreate() {
    console.log("Initilizing data");
    this.$store.commit("setInitialdata");
  },
  methods: {
    callStorage() {},
  },
};
</script>

<style>
.card {
  break-inside: avoid !important;
}
.card-columns {
  column-count: 4;
}
</style>
