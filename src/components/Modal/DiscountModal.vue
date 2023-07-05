<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { VueFinalModal, ModalsContainer } from "vue-final-modal";
import FormDiscount from "./FormDiscount.vue";
import { Countdown } from "vue3-flip-countdown";

const emit = defineEmits(["confirm", "close"]);

const props = defineProps({
  labels: {
    type: Object,
    default: () => ({
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos",
    }),
  },
});

const showDiscount = ref(true);
const closeModal = () => {
  emit("close");
};
const hideDiscount = () => {
  showDiscount.value = false;
};

const close = () => {
  emit("confirm");
};

const event = {
  close : () => {
    emit("confirm");
  }
};

</script>

<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    lock-scroll="true"
  >
    <button @click="close" class="btn-close">
      <svg
        width="39"
        height="38"
        viewBox="0 0 39 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.7245 2.23619C32.8961 1.06462 34.7956 1.06462 35.9672 2.23619V2.23619C37.1387 3.40776 37.1387 5.30726 35.9672 6.47883L6.96144 35.4846C5.78987 36.6561 3.89037 36.6561 2.71879 35.4846V35.4846C1.54722 34.313 1.54722 32.4135 2.71879 31.2419L31.7245 2.23619Z"
          fill="black"
        />
        <path
          d="M2.72891 6.47884C1.55734 5.30726 1.55734 3.40777 2.72891 2.23619V2.23619C3.90048 1.06462 5.79998 1.06462 6.97155 2.23619L35.9773 31.2419C37.1489 32.4135 37.1489 34.313 35.9773 35.4846V35.4846C34.8057 36.6561 32.9062 36.6561 31.7347 35.4846L2.72891 6.47884Z"
          fill="black"
        />
      </svg>
    </button>
    <div class="container-logo">
      <div>
        <img src="https://columbia-frontend.vercel.app/assets/logo-Columbia-fa7c06ee.png/"  class="logo" />
      </div>
    </div>
    
    <div class="container-discount flex bg-white" >
      <div v-if="showDiscount" class="w-2/4 flex h-full container-img  justify-center items-center m-0" >
      </div>
      <div v-else class="w-2/4 flex h-full img-container-child  justify-center items-center m-0" >
</div>
      <div class="container-infoCompetitor">
        <div v-if="showDiscount" class="lg:pr-14 lg:pl-14 ">
          <p class="rate-discount">15% OFF</p>
          <button class="btn-discount" @click="hideDiscount">
            <p>OBTENER DESCUENTO</p>
          </button>
     
          <p class="info-discount">
            Llena el formulario y recibe al instante 15% de descuento en tu próxima compra en nuestras tiendas de Centroamérica, Rep. Dominicana y Venezuela. *Cupón no transferible. *Cupón con vigencia hasta el 31 de agosto 2023. Aplican solamente productos seleccionados. aplica sobre otras promociones. *Otras restricciones aplican.
          </p>
        </div>
        <div class="container-form mt-14" v-else>
          <div>
            <p class="title-form">BE THE GOAT</p>
            <div class="flex flex-col">
              <FormDiscount v-on="event" />
            </div>
            <p class="info-discount text-center lg:pl-14 lg:pr-14">
              Llena el formulario y recibe al instante 15% de descuento en tu próxima compra en nuestras tiendas de Centroamérica, Rep. Dominicana y Venezuela. *Cupón no transferible. *Cupón con vigencia hasta el 31 de agosto 2023. Aplican solamente productos seleccionados. aplica sobre otras promociones. *Otras restricciones aplican.
            </p>
          </div>
        </div>
      </div>
    </div>
  </VueFinalModal>
</template>

<style scoped>

.img-container-child{
  background: url("../../assets/img/goat-modal-2.jpg");
  background-size: cover;
  background-position: center;
  width: 50%;
  height: 550px;
  padding: 0px;
  margin: 0px;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem 0 0 0.5rem;
}
.container-img {
  background: url("../../assets/img/goat-modal-1.jpg");
  background-size: cover;
  background-position: center;
  width: 50%;
  height: 550px;
  padding: 0px;
  margin: 0px;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem 0 0 0.5rem;
}


.title-form {
  font-size: 60px;
  font-family: "GerTT-Bold";
  text-align: center;
}
.btn-discount {
  padding: 10px 10px 10px 10px;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  font-family: "GerTT-Bold";
  border: 1px solid #000000;
  width: 100%;
  font-size: 30px;
}
.btn-discount p {
  margin-bottom: -5px;
}

.btn-discount:hover {
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
}



.container-infoCompetitor {
  width: 50%;
  padding: 12px;
}



.rate-discount {
  font-size: 95px;
  font-family: "GerTT-Bold";
  text-align: center;
}

.time-discount {
  font-size: 50px;
  font-family: "GerTT-bold";
  text-align: center;
}

.info-discount {
  font-size: 0.7rem;
  font-family: "GerTT-medium";
  margin-top: 15px;
  text-align: center;
}

.country-competitor {
  font-size: 1.5rem;
  font-family: "GerTT-Medium";
  margin-top: 15px;
}

.img-discount {
  width: 80%;
}

.container-discount {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  border-radius: 0.5rem;
}

.confirm-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.confirm-modal-content {
  display: flex;
  flex-direction: column;
  padding: 0rem;
  background: transparent;
  border-radius: 0.5rem;
  width: 80%;
}

.confirm-modal-content > * + * {
  margin: 0.0rem 0;
}

.confirm-modal-content h1 {
  font-size: 1.375rem;
}

.btn-close {
  position: relative;
  display: flex;
  margin: 0.25rem 0 -20px auto;
  padding: 0 8px;
  cursor: pointer;  
  font-family: "GerTT-Bold";
  font-size: 1.5rem;
  right: 1px;
}

.btn-close svg {
  width: 30px;
  height: 30px;
  position: relative;
  top: 2rem;
  right: 1rem;
  z-index: 100;
}

.dark .confirm-modal-content {
  background: #000;
}
.container-logo{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;
  height: 15%;
}
.logo{
  padding-top: 12px;
  display: flex;
  position: relative;
  width: 200px;
  height: auto;
  filter: invert(1);
}
/* Pantallas grandes */
@media (min-width: 1500px) {
}

/* PC */
@media (min-width: 992px) and (max-width: 1499px) {
}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {
  .country-competitor,
  .info-discount,
  .rate-discount,
  .time-discount {
    text-align: center;
    width: 100%;
  }

  .img-discount {
    width: 150px;
  }

  .img-discount {
    width: 200px;
    margin-bottom: 20px;
  }

  .container-discount {
    flex-direction: column;
  }
  
  .container-infoCompetitor {
    width: 80%;
    text-align: center;
  }

  .container-img {
  width: 100%;
  height: 300px;
  border-radius:  0.5em 0.5rem 0rem 0rem;
  background: url('../../assets/img/goat-modal-1.jpg') no-repeat ;
  background-size: cover;
  background-position: center;
  background-position: 50% 50%;
}

.img-container-child{
  width: 100%;
  height: 300px;
  border-radius:  0.5em 0.5rem 0rem 0rem;
  background: url('../../assets/img/goat-modal-2.jpg') no-repeat ;
  background-size: cover;
  background-position: 50% 40%;
}
.container-logo{
  position: absolute;
  display: flex;
  justify-content: initial;
  align-items: center;
  z-index: 1;
  width: 90%;
  height: 12%;
  margin-left: 12px;
}
.logo{
  padding-top: 5px;
  display: flex;
  position: relative;
  width: 150px;
  height: auto;
  filter: invert(1);
}

}

/* Mobile */
@media (max-width: 767px) {
  .container-discount {
    flex-direction: column;
  }

  .container-infoCompetitor {
    width: 100%;
    text-align: center;
  }

  .btn-close svg {
    width: 20px;
    height: 20px;
  }

  .btn-close {
    right: -10px;
  }

  .img-discount {
    width: 75%;
  }
  .rate-discount {
    font-size: 60px;
  }
  .btn-discount {
    padding: 10px 10px 10px 10px;
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    font-family: "GerTT-Bold";
    border: 1px solid #000000;
    width: 100%;
    font-size: 25px;
  }

  .title-form {
    font-size: 40px;
  }
  .time-discount {
    font-size: 30px;
  }

  .btn-close svg {
    right: 1em;
    top: 1em;
    z-index: 10;
  }

  .container-img {
  width: 100%;
  height: 300px;
  border-radius:  0.5em 0.5rem 0rem 0rem;
  background: url('../../assets/img/goat-modal-1.jpg') no-repeat ;
  background-size: cover;
  background-position: center;
}

.img-container-child{
  width: 100%;
  height: 300px;
  border-radius:  0.5em 0.5rem 0rem 0rem;
  background: url('../../assets/img/goat-modal-2.jpg') no-repeat ;
  background-size: cover;
  background-position: center;
}

.container-logo{
  position: absolute;
  display: flex;
  justify-content: initial;
  align-items: center;
  z-index: 1;
  width: 90%;
  height: 12%;
  margin-left: 12px;
}
.logo{
  padding-top: 5px;
  display: flex;
  position: relative;
  width: 150px;
  height: auto;
  filter: invert(1);
}
.info-discount{
  font-size: 10px;
  margin-bottom: 10px;
  line-height: 12px;
}
}
</style>