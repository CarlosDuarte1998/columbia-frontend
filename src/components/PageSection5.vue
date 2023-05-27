<script>
import ScrollButtonVue from './ScrollButton.vue';
import LogoColumbiaVue from './LogoColumbia.vue';
export default {
  components: {
    ScrollButtonVue,
    LogoColumbiaVue,
  },
};
</script>
<template>
  <div class="h-screen bg-section" id="section-5">
    <div class="bg-container">
      <div class="h-full w-full">

      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-section {
    background-image: url("../assets/img/bg-section-5.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.bg-container {
 background: #00000046;
 display: flex;
 width: 100%;
    height: 100%;
}


</style>