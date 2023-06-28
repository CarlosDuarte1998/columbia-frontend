<script >

import { defineProps, defineEmits, ref } from "vue";
import axios from "axios";
import { VueFinalModal, ModalsContainer } from "vue-final-modal";


function confirm() {
  document.getElementById("show").value = false;
}


export default {
  components: {
    VueFinalModal,
    ModalsContainer,
  },
  props: {
    nameCompetitor: {
      type: String,
      default: "",
    },
    urlImgCompetitor: {
      type: String,
      default: "",
    },
    infoCompetitor: {
      type: String,
      default: "",
    },
  },

  setup(props, { emit }) {
    const user = ref(null);

    const fetchUser = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/");
        const userData = response.data.results[0];
        const name = `${userData.name.first} ${userData.name.last}`;
        const picture = userData.picture.large;
        const info = `${userData.login.username}`;
        const country = `${userData.location.country}`;
        user.value = { name, picture, info, country };
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();

    return {
      user,
    };
  },
  methods: {
    close() {
      this.$emit('confirm');
    }
  },
};
</script>

<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="competitor-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    lock-scroll="true"
  >
<div>
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
    <div class="container-competitor flex lg:p-16 mt-8">
      <div class="w-2/4 container-img">
        <img
          class="img-competitor rounded-full"
          :src="user ? user.picture : urlImgCompetitor"
          alt=""
        />
      </div>
      <div class="container-infoCompetitor">
        <p class="name-competitor">{{ user ? user.name : nameCompetitor }}</p>
        <p class="user-competitor">@{{ user ? user.info : infoCompetitor }}</p>
        <p class="info-competitor">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          veritatis sapiente dolores. Odit libero minima dicta harum ea rerum
          repellendus nesciunt, necessitatibus voluptatibus earum? Dignissimos
          alias culpa laboriosam dicta aut.
        </p>
        <p class="challenge-competitor">
          Challenge: Walk 1,893 meters
        </p>
      </div>
    </div>
</div>
  </VueFinalModal>
</template>

<style scoped>



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

.challenge-competitor,
.info-competitor,
.name-competitor,
.user-competitor {
  text-align: start;
}
.name-competitor {
  font-size: 40px;
  font-family: "GerTT-Bold";
}
.user-competitor {
  font-size: 25px;
  font-family: "GerTT-Medium";
}
.info-competitor {
  font-size: 1rem;
  font-family: "GerTT-medium";
  margin-top: 15px;
}

.challenge-competitor {
  font-size: 1.5rem;
  font-family: "GerTT-Medium";
  margin-top: 15px;
}
.img-competitor {
  width: 50%;
}

.container-competitor {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
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
.btn-close svg{
    width: 30px;
    height: 30px;
    position: relative;
    top: 20px;
    right: 20px;

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
  .container-content {
    display: block;
  }

  .modal-content {
    width: 90%;
  }
  .challenge-competitor,
  .info-competitor,
  .name-competitor,
  .user-competitor {
    text-align: center;
    width: 100%;
  }
  .img-competitor {
    width: 150px;
  }

  .container-content:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .img-competitor {
    width: 200px;
    margin-bottom: 20px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .container-competitor {
    flex-direction: column;
  }
  .confirm-modal-content {
    width: 100%;
  }
  .container-img {
    width: 100%;
  }
  .container-infoCompetitor {
    width: 100%;
    text-align: center;
  }
  .btn-close svg{
    width: 20px;
    height: 20px;
  }
  .btn-close {
    right: -10px;
  }
}
</style>
