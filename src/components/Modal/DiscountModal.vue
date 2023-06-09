<script>
import { defineProps, defineEmits, ref } from "vue";
import { VueFinalModal, ModalsContainer } from "vue-final-modal";
import FormDiscount from "./FormDiscount.vue";
import { Countdown } from "vue3-flip-countdown";

export default {
  components: {
    VueFinalModal,
    ModalsContainer,
    FormDiscount,
    Countdown,
  },
  props: {
    labels: {
      type: Object,
      default: () => ({
        days: "Días",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos",
      }),
    },
  },

  setup(_, { emit }) {
    const showDiscount = ref(true);
    const closeModal = () => {
      emit("close");
    };
    const hideDiscount = () => {
      showDiscount.value = false;
    };

    return {
      closeModal,
      showDiscount,
      hideDiscount,
    };
  },
  methods: {
    close() {
      this.$emit("confirm");
    },
  },
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
    <div class="container-discount flex">
      <div class="w-2/4 container-img">
        <img
          class="img-discount w-auto"
          src="../../assets/img/shoes-discount-2.png"
          alt=""
          v-if="showDiscount"
        />
        <img
          class="img-discount w-auto"
          src="../../assets/img/shoes-discount-1.png"
          alt=""
          v-else
          style="transition: all 0.5s ease-in-out;"
        />
      </div>
      <div class="container-infoCompetitor">
        <div v-if="showDiscount">
          <p class="rate-discount">10% OFF</p>

          <button class="btn-discount" @click="hideDiscount">
            OBTENER DESCUENTO
          </button>

          <div class="flex justify-center pt-5">
            <Countdown
              :mainColor="'white'"
              :secondaryColor="'white'"
              :mainFlipBackgroundColor="'#000'"
              :labelColor="'black'"
              :deadline="'2023-10-10 00:00:00'"
              :countdownSize="'2em'"
              :showDays="true"
              :showLabels="true"
              :labels="labels"
            />
          </div>
          <p class="info-discount">
            Llena el formulario y recibe al instante 10% de descuento en tu
            próxima compra en tienda o sitio web. Producto sujeto a existencias.
            Fotografía de carácter ilustrativo.
          </p>
        </div>
        <div class="container-form" v-else>
          <div>
            <p class="title-form">BE THE GOAT</p>
            <div class="flex justify-center pb-6">
              <Countdown
                :mainColor="'white'"
                :secondaryColor="'white'"
                :mainFlipBackgroundColor="'#000'"
                :labelColor="'black'"
                :deadline="'2023-10-10 00:00:00'"
                :countdownSize="'2em'"
                :showDays="true"
                :showLabels="true"
                :labels="labels"
              />
            </div>
            <div class="flex flex-col">
              <FormDiscount />
            </div>
            <p class="info-discount text-center">
              Llena el formulario y recibe al instante 10% de descuento en tu
              próxima compra en tienda o sitio web. Producto sujeto a
              existencias. Fotografía de carácter ilustrativo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </VueFinalModal>
</template>

<style scoped>
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

.btn-discount:hover {
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
}

.container-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-infoCompetitor {
  width: 50%;
  padding: 12px;
}

.container-img {
  width: 50%;
}

.rate-discount {
  font-size: 120px;
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
}

.confirm-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}

.confirm-modal-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
  width: 80%;
}

.confirm-modal-content > * + * {
  margin: 0.5rem 0;
}

.confirm-modal-content h1 {
  font-size: 1.375rem;
}

.btn-close {
  position: relative;
  display: flex;
  margin: 0.25rem 0 -20px auto;
  padding: 0 8px;
  border-radius: 0.5rem;
  font-family: "GerTT-Bold";
  font-size: 1.5rem;
}

.btn-close svg {
  width: 30px;
  height: 30px;
}

.dark .confirm-modal-content {
  background: #000;
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
}

/* Mobile */
@media (max-width: 767px) {
  .container-discount {
    flex-direction: column;
  }

  .container-img {
    width: 100%;
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
}
</style>
