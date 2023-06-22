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
  <div class="h-screen bg-section" id="section-5">
    <div class="bg-container h-full w-full">
      <div class="container-header flex">
            <div class="relative z-50">
              <LogoColumbia class="text-center" />
            </div>
            <div class="container-title-header flex text-center items-center text-white flex-col uppercase">
              <p class="" style="font-size: 0.85em;">Progreso</p>
              <p class=" text-5xl">GOATOMETER</p>
            </div>
          </div>
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
  margin-right: 20px;
}

.bg-container {
  background: #00000046;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}



.logo-columbia {
  width: 100%;
  display: flex;
  justify-content: start;
}

/* Pantallas grandes */
@media (min-width: 1500px) {}

/* PC */
@media (min-width: 992px) and (max-width: 1499px) {}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {}

/* Mobile */
@media (max-width: 767px) {

  .container-header {
    flex-direction: column;
  }

  .logo-columbia {
    width: 100%;
  }
}
</style>
