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
<template class="">
  <div class="w-screen h-screen bg-black" id="section-2">
    <div class="h-full text-white lg:flex sm:block">
      <div class="section-1 lg:w-1/2 sm:w-full">
        <div class="">
          <LogoColumbia />
        </div>
      </div>
      <div class="lg:w-1/2 sm:w-full">
        <div class="section-2">
          <div class="info-section">
            <div class="">
              <div class="container-info">
                <h1 class="text-xl text-start">
                  Probablemente no salgas del sendero con la intención de convertirte en el mejor excursionista de todos
                  los
                  tiempos.

                </h1>
                <p>
                  Como la mayoría de nosotros sólo quiere salir,
                  desconectar o reconectar, e independientemente
                  de tu destreza en los senderos, aprecias el equipo
                  que te hace sentir un poco más seguro y capaz.

                </p>
                <p>

                  El sistema AdaptTrax™ de Facet 75™ se ha diseñado para
                  ayudarte a sentirte más cómodo en lugares salvajes
                  y desafiantes. Esos lugares en los que te conviertes
                  en el GOAT (Greatest Of All Time). Casi como si...
                  pertenecieras a ese lugar.
                </p>
                <p class="text-start w-full">
                  ¡Conviértete en uno con la naturaleza!
                </p>
              </div>
              <ButtonScroll class="btn-scroll" buttonText="Siguiente" buttonColor="black" sectionId="section-3" />
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
}

.btn-scroll {
  display: block;
  position: relative;
  bottom: 3%;
  right: -40%;
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
  height: 100%;
  width: 85%;
}

.container-info h1 {
  font-family: 'GerTT-Bold';
  font-size: 30px;
  hyphens: auto;
}

.container-info p {
  font-family: 'GerTT-Regular';
  font-size: 20px;
  margin-top: 30px;
  hyphens: auto;
}

/* Pantallas para tablets */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section-1 {
    height: 50%;
    background-position: top center;
  }

  .section-2 {
    height: 50%;
  }

  .container-info h1 {
    font-size: 30px;
    margin-top: 30px;
  }

  .btn-scroll {
    right: -40%;
    margin-top: 10%;
  }
}

/* Pantallas mobiles */
@media (max-width: 767px) {
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

  .container-info h1 {
    font-size: 20px;
    margin-top: 20px;
  }

  .container-info p {
    font-size: 14px;
    margin-top: 15px;
  }

  .btn-scroll {
    display: block;
    position: relative;
    margin-top: 20px;
    margin-right: 25%;
  }
}
</style>
