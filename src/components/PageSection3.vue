<script>
import ButtonScroll from "./ScrollButton.vue";
import LogoColumbia from "./LogoColumbia.vue";
export default {
  components: {
    ButtonScroll,
    LogoColumbia,
  },
};
</script>
<template>
  <div class="h-screen bg-black" id="section-3">
   
    <div class="h-full">
      <LogoColumbia class="logo" />
      <div class="bg-container">
        <img src="../assets/img/img-section-3.png" alt="" srcset="" />
      </div>
     
    </div>
    <div class="container-btn-scroll">
      <ButtonScroll
        class="btn-scroll"
        buttonText="Scroll Down"
        buttonColor="black"
        sectionId="section-4"
      />
    </div>
  </div>
</template>
<style scoped>
.bg-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
}
.bg-container img {
  width: 800px;
}

.logo {
  position: relative;
  top: 1px;
  left: 0%;
}
.container-btn-scroll {
  display: relative;
  flex-direction: column;
  width: 100%;
  position: relative;
  text-align: end;
  top: -8.5%;
}
.btn-scroll {
  position: relative;
  width: auto;
  right: 2%;
  top:0%;
}
/*Pantallas tablets*/
@media (min-width: 768px) and (max-width: 1024px) {
}
/*Pantallas mobiles*/
@media (min-width: 320px) and (max-width: 767px) {
}
</style>
