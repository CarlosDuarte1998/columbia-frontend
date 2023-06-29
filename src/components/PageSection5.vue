<script setup>
import ButtonScroll from "./ScrollButton.vue";
import LogoColumbia from "./LogoColumbia.vue";
import Termometro from "../assets/img/termometro.vue";
</script>
<template>
  <div class="h-screen bg-section" id="section-5">
    <div class="bg-container h-full w-full">
      <div class="container-header flex ">
        <div class="container-logo z-50 sm:block">
          <LogoColumbia />
        </div>
        <div class="container-title-header flex text-center items-center text-white flex-col uppercase">
          <p class="" style="font-size: 0.85em;">Progreso</p>
          <p class=" text-5xl">GOATOMETER</p>
        </div>
        
      </div>
      <div class="container-competitors">
        <img src="../assets/img/list-competitors.png" alt="" class="img-competitors">
        <img src="../assets/img/list-competitors-mobile.png" alt="" class="img-competitors-mobile">
      </div>
      <div class="text-xl"></div>
      <div class="container-btnScroll">
        <ButtonScroll class="ButtonScroll" buttonText="Siguiente" buttonColor="black" sectionId="section-6" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.container-title-header {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'GerTT-Bold';
  font-size: 2.5em;
  line-height: 1em;
  letter-spacing: 0.08em;
}

.container-competitors{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.img-competitors{
  width: 80%;
}
.img-competitors{
  display: black;
}
.img-competitors-mobile{
  display: none;
}
.container-header {
  display: flex;
  height: 20%;
  justify-content: center;
  align-items: center;
}

.container-header div:nth-child(1) {
  position: absolute;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
}

.container-btnScroll {
  display: flex;
  justify-content: end;
  position: relative;
}

.bg-section {
  background-image: url("../assets/img/bg-section-5.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
}

.ButtonScroll {
  margin-bottom: 20px;
  margin-right: 40px;
}

.bg-container {
  background: #00000046;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}





/* Pantallas grandes */
@media (min-width: 1500px) {}

/* PC */
@media (min-width: 992px) and (max-width: 1499px) {}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {
  .container-logo{
      position: initial;
      display: block;
      width: 50%;
      margin: 0px 0px 0px 0px;
  }

  .img-competitors-mobile{
  display: block;
  width: 80%;
  height: auto;
}


}

/* Mobile */
@media (max-width: 767px) {

  .container-header div:nth-child(1){
    position: initial;
  }
  .container-header {
  display: flex;
  flex-direction: column !important;
}

  .logo-columbia {
    width: 100%;
  }
  
.container-title-header {
  position: initial;
}
.container-logo{
  position: absolute;

}
.section-logo{
 display: none;
}
.container-logo {
 padding: 0px 0px 0px 0px;
 margin: 0px 0px 0px 0px;
 width: 95% !important;
}
.bg-section{
  background: url('../assets/img/bg-section-5-mobile.jpg');
  background-position: 50% 50%;
  background-size: cover;
}


.img-competitors{
  display: none;
}
.img-competitors-mobile{
  display: block;
  width: 80%;
  height: auto;
}
}
</style>
