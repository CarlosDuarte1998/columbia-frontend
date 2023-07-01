<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper";
import { ModalsContainer, useModal } from "vue-final-modal";
import CompetitorModal from "./Modal/CompetitorModal.vue";
import { useCompetitorStore } from "@/stores/competitor";
import { onMounted, ref, reactive } from "vue";

// Configuracion del modal
let id_competitor = ref(null);
const handleIdCompetitor = (id) => {
  id_competitor.value = id;
  console.log(id);
  openModal();
};

const { open: openModal, close: closeModal } = useModal({
  component: CompetitorModal,
  props: {
    
  },
  attrs: {
    id_competitor: id_competitor,
    onConfirm() {
      closeModal();
    },
  },
  slots: {
    default: "<p>The content of the modal</p>",
  },
});

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = (swiper) => {
  const activeSlideIndex = swiper.activeIndex;
  //Slider que esta activo
  // console.log("Slide change: " + activeSlideIndex);
};


const modules = [Keyboard, Autoplay, Pagination, Navigation];



// Peticion de los datos del store

const competitorStore = useCompetitorStore();
const competitors = ref([]);


onMounted(async () => {
  await competitorStore.getCompetitors()
  competitors.value = competitorStore.competitors
});


</script>
<template>
  <swiper :slidesPerView="4" :centeredSlides="true" :spaceBetween="20" :loop="true" :autoplay="{
    delay: 3500,
    disableOnInteraction: false,
  }" :breakpoints="{
  '@0.00': {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  '@0.75': {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
  },
  '@1.00': {
    slidesPerView: 4,
    spaceBetween: 40,
    centeredSlides: true,
  },
  '@1.50': {
    slidesPerView: 4,
    spaceBetween: 80,
    centeredSlides: true,
  },
}" :keyboard="{
  enabled: true,
}" :modules="modules" :speed="400" @swiper="onSwiper" @slideChange="onSlideChange" class="mySwiper">
    <swiper-slide v-for="competitor in competitors" :key="competitor.id">
      <!-- Se pasa el objeto al componente -->
      <CompetitorModal :id_competitor="id_competitor" />
      <di class="container-slider">
        <div class="block">
          <div class="container-perfile">
            <img :src="competitor.images[0].url" alt="" />
          </div>
          <div class="container-text">
            <h1 class="lg:text-xl name-competitor uppercase">
              {{ competitor.name }}
            </h1>
            <p class="uppercase user-competitor">{{ competitor.instagram_username }}</p>
            <div class="container-info">
              <button @click="handleIdCompetitor(competitor.id)" >
                <p class="btn-info">
                  <!-- + Info -->
                </p>
              </button>
            </div>
          </div>
        </div>
      </di>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.container-slider {
  background-color: #fff;
  display: flex;
  width: 100%;
  height: 400px;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 30px 0 8px 0;
}

.container-slider:hover {
  transform: scale(1.05);
  transform: scale(1.03);
  transition: all 0.2s ease-in-out;
}

.container-perfile {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-perfile img {
  width: 80%;
  height: auto;
}

.container-text {
  margin-top: 40px;
}

.container-text h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  margin: 0;
  font-family: "GerTT-Bold";
}

.container-text p {
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  margin: 0;
  font-family: "GerTT-Regular";
}

.container-info {
  margin-top: 30px;
}

.container-info p {
  font-size: 1.4rem;
  font-weight: 400;
  color: #000000;
  margin: 0;
  font-family: "GerTT-bold";
  cursor: pointer;
}

/* Pantallas grandes */
@media (min-width: 1500px) {}

/* PC */
@media (min-width: 992px) and (max-width: 1499px) {}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {}

/* Mobile */
@media (max-width: 767px) {
  .container-perfile img {
    width: 80%;
    height: auto;
  }

  .container-slider {
    height: 350px;
  }

  .name-competitor {
    font-size: 1rem !important;
  }
}

/*Mobile con pantallas pequeñas*/
@media (max-width: 575px) {
  .container-perfile img {
    width: 60%;
    height: auto;
  }

  .container-slider {
    height: 290px;
  }
  .container-info{
    margin-top: 15px;
  }
  .user-competitor{
    font-size: 0.8rem !important;
  }
}

</style>
