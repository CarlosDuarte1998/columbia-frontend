<script>
import ButtonScroll from "./ScrollButton.vue";

export default {
  components: {
    ButtonScroll,
  },
};
</script>
<template>
  <div class="h-screen bg-black" id="section-3">
    <div class="flex h-full">
     <div class="container mx-auto">
        <div class="bg-container">
        <div class="text-white">
           <img src="../assets/img/img-section-3.png" alt="">
        </div>
      </div>
     </div>
    </div>
  </div>
</template>
<style scoped>
.bg-container{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.bg-container img{
    background-color: rgb(134, 134, 134);
    width:50%;
    height: 100%;
}
</style>
