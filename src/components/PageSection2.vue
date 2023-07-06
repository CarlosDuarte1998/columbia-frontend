<script setup>
import ButtonScroll from "./ScrollButton.vue";
import LogoColumbia from "./LogoColumbia.vue";
import { ref, onMounted, onBeforeUnmount, watchEffect } from "vue";


</script>
<template class="">
  <div class="w-screen h-screen bg-black" id="section-2">
    <div class="h-full text-white lg:flex sm:block">
      <div class="section-1 lg:w-1/2 sm:w-full">
        <div class="ml-1 filter invert">
          <LogoColumbia />
        </div>
      </div>
      <div class="lg:w-1/2 sm:w-full">
        <div class="section-2">
          <div class="info-section">
            <div class="">
              <div class="container-info">
                <h1 class="text-xl text-start">
                  Probablemente no salgas del sendero con la intención de
                  convertirte en el mejor excursionista de todos los tiempos.
                </h1>
                <p>
                  Como la mayoría de nosotros sólo quieres salir, desconectar o
                  reconectar, e independientemente de tu destreza en los
                  senderos, aprecias el equipo que te hace sentir un poco más
                  seguro y capaz.
                </p>
                <p>
                  El sistema AdaptTrax™ de Facet 75™ se ha diseñado para
                  ayudarte a sentirte más cómodo en lugares salvajes y
                  desafiantes. Esos lugares en los que te conviertes en el GOAT
                  (Greatest Of All Time). Casi como si... pertenecieras a ese
                  lugar.
                </p>
                <p class="text-start w-full">
                  ¡Conviértete en uno con la naturaleza!
                </p>
              </div>
              <div class="relative">
                <ButtonScroll
                  class="btn-scroll"
                  buttonText="Siguiente"
                  buttonColor="black"
                  sectionId="section-3"
                  sectionIdTop="section-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.section-1 {
  background-image: url("../assets/img/bg-section-2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right center;
  display: flex;
  height: 100%;
  z-index: 1;
}

.btn-scroll {
  display: flex;
  flex-direction: initial !important;
  position: absolute;
  top: 2.2rem;
  right: -35%;
  width: 100%;
}

.section-2 {
  display: flex;
  height: 100%;
}

.section-2 div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.section-2 .info-section div {
  flex-direction: column;
  height: auto;
  width: 85%;
}

.container-info h1 {
  font-family: "GerTT-Bold";
  font-size: 30px;
}

.container-info p {
  font-family: "GerTT-Regular";
  font-size: 20px;
  margin-top: 30px;
}

/* Pantallas grandes */
@media (min-width: 1500px) {
  .btn-scroll {
    display: flex;
    flex-direction: initial !important;
    position: absolute;
    top: 11.5rem;
    right: -36%;
    width: 100%;
  }
}

/* Pantallas para tablets */
@media only screen and (min-width: 801px) and (max-width: 1023px) {
  .section-1 {
    height: 50%;
    background-position: top center;
  }

  .section-2 {
    height: 50%;
  }

  .container-info h1 {
    font-size: 2rem;
    margin-top: 30px;
  }

  .container-info p {
    font-family: "GerTT-Regular";
    font-size: 1.3rem;
    margin-top: 0.8rem;
  }

  .btn-scroll {
    right: -40%;
    margin-top: 1%;
  }
}
/* Pantallas para tablets pequeñas*/
@media only screen and (min-width: 768px) and (max-width: 800px) {
  .section-1 {
    height: 50%;
    background-position: top center;
  }

  .section-2 {
    height: 50%;
  }

  .container-info h1 {
    font-size: 1.6rem;
    margin-top: 30px;
  }

  .container-info p {
    font-family: "GerTT-Regular";
    font-size: 1.1rem;
    margin-top: 0.8rem;
  }

  .btn-scroll {
    right: -40%;
    margin-top: 1%;
  }
}
/* Pantallas mobiles */
@media only screen and (min-width: 381px) and (max-width: 767px) {
  .btn-scroll {
    text-align: center;
  }

  .section-1 {
    height: 50%;
  }

  .section-2 {
    height: 50%;
  }

  .section-2 .info-section div {
    width: 95%;
  }

  .container-info {
    padding: 0px 5px 0px 5px;
  }

  .container-info h1 {
    font-size: 17px;
    margin-top: 25px;
    margin-bottom: 5px;
    line-height: 19px;
  }

  .container-info p {
    font-size: 0.8rem;
    margin-top: 5px;
  }

  .btn-scroll {
    display: block;
    position: relative;
    margin-top: 0px;
    margin-right: 25%;
  }
}

/*Mobile con pantallas pequeñas*/
@media (max-width: 380px) { 
   .btn-scroll {
    text-align: center;
  }

  .section-1 {
    height: 50%;
  }

  .section-2 {
    height: 50%;
  }

  .section-2 .info-section div {
    width: 95%;
  }

  .container-info {
    padding: 0px 5px 0px 5px;
  }

  .container-info h1 {
    font-size: 14px;
    margin-top: 25px;
    margin-bottom: 5px;
    line-height: 19px;
  }

  .container-info p {
    font-size: 10px;
    margin-top: 8px;
  }

  .btn-scroll {
    display: block;
    position: relative;
    margin-top: 0px;
    margin-right: 25%;
  }
}
</style>
