<script>
import ButtonScroll from "./ScrollButton.vue";
import LogoColumbiaVue from "./LogoColumbia.vue";

export default {
  components: {
    ButtonScroll,
    LogoColumbiaVue,
  },
};
</script>
<template>
  <div class="h-screen bg-section" id="section-5">
    <div class="bg-container h-full w-full">
      <div
        class="container-header flex justify-center align-center text-center"
      >
        <LogoColumbiaVue class="w-full logo-columbia" />
        <h1 class="title-competitor">Competitor</h1>
      </div>
      <div class="container-btnScroll">
        <ButtonScroll
          class="ButtonScroll"
          buttonText="Scroll Down"
          buttonColor="black"
          sectionId="section-6"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.container-btnScroll{
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
.container-header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title-competitor {
  color: white;
  font-size: 40px;
  text-transform: uppercase;
  font-family: "Gertt-bold";
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
}
.logo-columbia {
  width: 100%;
  display: flex;
  justify-content: start;
}
  /* Pantallas grandes */
  @media (min-width: 1500px) {
}

/* PC */
@media (min-width: 992px) and (max-width: 1499px) {
}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {


}

/* Mobile */
@media (max-width: 767px) {
.title-competitor{
  position: initial;
  font-size: 2em;
  transition: all 0.5s ease-in-out;
  margin-top: -23px;
}
.container-header{
  flex-direction: column;
}
.logo-columbia{
  width: 100%;

}
}
</style>
