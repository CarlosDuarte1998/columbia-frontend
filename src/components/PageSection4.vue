<script>
import ButtonScroll from "./ScrollButton.vue";
import LogoColumbia from "./LogoColumbia.vue";
import SliderCompetitors from "./SliderCompetitors.vue";

export default {
  components: {
    ButtonScroll,
    LogoColumbia,
    SliderCompetitors,
  },
};
</script>
<template>
  <div class="h-screen bg-section" id="section-4">
    <div class="bg-container">
      <div class="h-full w-full">
        <div class="h-full flex flex-col justify-between">
          <div class="container-header flex ">
            <div class="relative z-50">
              <LogoColumbia class="text-center" />
            </div>
            <div class="container-title-header flex text-center items-center text-white flex-col uppercase">
              <p class="" style="font-size: 0.85em;">Competidores</p>
              <p class=" text-5xl">GOATOMETER</p>
            </div>
          </div>
          <div class="container-slider">
            <SliderCompetitors />
          </div>
          <div class="footer-section">
            <div class="">
              <p class="text-white">GRIPS ON ALL TERRAIN</p>
            </div>
            <div class="container-button">
              <ButtonScroll class="ButtonScroll" buttonText="Siguiente" buttonColor="black" sectionId="section-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-section {
  background-image: url("../assets/img/bg-section-4.jpg");
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
  margin-top: 12px;
}

.container-slider {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-section {
  display: flex;
  height: 6%;
}

.footer-section div:nth-child(1) {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.footer-section div:nth-child(1) p {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-align: center;
  font-family: "GerTT-Bold";
  letter-spacing: 3px;
}

.footer-section div:nth-child(2) {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.footer-section div:nth-child(2) button {
  position: absolute;
  text-align: end;
  justify-content: end;
  align-items: end;
  right: 24px;
}

/* Pantallas grandes */
@media (min-width: 1500px) {}

/* PC */
@media (min-width: 992px) and (max-width: 1499px) {}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {
  .container-header {
    display: block;
  }

  .container-header div:nth-child(1) {
    position: initial;
    display: block;
  }

  .container-title-header {
    font-size: 3.5em;
  }


}


/* Mobile */
@media (max-width: 767px) {

  .container-header {
    display: block;
  }

  .container-header div:nth-child(1) {
    position: initial;
    display: block;
  }

  .container-title-header {
    font-size: 2em;
  }


  .footer-section {
    display: block;
    height: 13%;
    margin-bottom: 20px;
  }

  .footer-section div:nth-child(1) {
    position: initial;
    display: block;
    margin-bottom: 22px;
  }

  .footer-section div:nth-child(1) p {
    position: initial;
    display: flex;
    font-size: 1.3rem;
    font-weight: 600;

  }

  .footer-section div:nth-child(2) {
    position: initial;
    display: flex;
    justify-content: end;
    margin-left: -12px;
  }

  .footer-section div:nth-child(2) button {
    position: initial;
    display: initial;

  }







}
</style>