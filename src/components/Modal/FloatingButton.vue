<script setup>
import { onMounted, ref } from "vue";
import { ModalsContainer, useModal } from "vue-final-modal";
import DiscountModal from "./DiscountModal.vue";
import socialModal from "./SocialModal.vue";

const { open: openOfert, close: closeOfert } = useModal({
  component: DiscountModal,
  props: {
  },
  attrs: {
    onConfirm() {
      closeOfert();
    },
  },

});

const { open: openSocial, close: closeSocial } = useModal({
  component: socialModal,
  props: {
  },
  attrs: {
    onConfirm() {
      closeSocial();
    },
  },
 
});

onMounted(() => {
  openOfert();
});

</script>

<template>
 <div>
  <div @click="openOfert" class="btn-ofert">
    <div>
      <Button class="container-ofert z-50">
        <p>15%</p>
        <p>OFF</p>
      </Button>
    </div>
  </div>
  <div @click="openSocial" class="btn-social">
    <div>
      <Button class="container-social z-50">
        <img src="../../assets/img/icon-foUS-social.png" alt="" sizes="" srcset="">
      </Button>
    </div>
  </div>
 </div>
</template>


<style scoped>
.container-social {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-social img{
  width: 80%;
  height: 100%;
  
}
.btn-social {
  position: fixed;
  top: 20%;
  right: 0px;
  z-index: 2;
  width: 5%;
  height: 9%;
  background-color: #f5f5f5;
  border: 1px solid #000000;
  border-right: 0px;
  border-radius: 20% 0% 0% 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: "GerTT-Bold";
  transition: all 0.2s;
}
.btn-social:hover {
  color: #ffffff;
  border: 1px solid #fff;
  filter: invert(1);
}

.btn-ofert {
  position: fixed;
  top: 10%;
  right: 0px;
  z-index: 2;
  width: 5%;
  height: 9%;
  background-color: #f5f5f5;
  border: 1px solid #000000;
  border-right: 0px;
  border-radius: 20% 0% 0% 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: "GerTT-Bold";
  transition: all 0.2s;
}
.btn-ofert:hover {
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #fff;
}
Button p {
  font-size: 20px;
  font-family: "GerTT-Bold";
  text-align: center;
  padding: 0px;
  margin: 0px;
  line-height: 1;
}

/* Pantallas grandes */
@media (min-width: 1500px) {
    .btn-ofert {
    width: 3.5%;
    height: 6%;
    top: 10%;
  }
  .btn-social {
    width: 3.5%;
    height: 6%;
    top: 20%;
  }
}
/*Pantallas grandes*/
@media (min-width: 1500px) {
  .btn-social {
    top: 17%;
  }
}

/* PC */
@media (min-width: 992px) and (max-width: 1499px) {
  
  
}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {
  .btn-ofert {
    width: 10% !important;
    height: 6%;
    top: 10%;
  }
  .btn-social {
    width: 10% !important;
    height: 6%;
    top: 18%;
  }
  .container-social img{
    width: 50px;
    height: 50px;
  }
}
/* Mobile */
@media (max-width: 767px) {
  .btn-ofert {
    width: 15%;
    height: 6%;
    top: 10%;
  }
  Button p {
    font-size: 15px;
  }
  .btn-social {
    width: 15%;
    height: 6%;
    top: 18%;
  }

  .container-social img{
    width: 40px;
    height: 40px;
  }
}


</style>
