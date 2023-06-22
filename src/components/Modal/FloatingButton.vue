<script>
import { onMounted, ref } from "vue";
import { ModalsContainer, useModal } from "vue-final-modal";
import DiscountModal from "./DiscountModal.vue";

export default {
  setup() {
    const showModal = ref(false);
    const { open, close } = useModal({
      component: DiscountModal,
      attrs: {
        onConfirm: handleClose,
      },
      slots: {
        default: "<p>The content of the modal</p>",
      },
    });

    function handleClose() {
      close();
    }

    onMounted(() => {
      open();
    });
    
    return {
      open,
      showModal,
    };
  },
};
</script>

<template>
  <div @click="open" class="btn-floating">
    <div>
      <Button class="container-ofert z-50">
        <p>10%</p>
        <p>OFF</p>
      </Button>
    </div>
  </div>
</template>


<style scoped>
.btn-floating {
  position: fixed;
  top: 10%;
  right: 0px;
  z-index: 2;
  width: 5%;
  height: 9%;
  background-color: #f5f5f5;
  border: 2px solid #000000;
  border-right: 0px;
  border-radius: 20% 0% 0% 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: "GerTT-Bold";
  transition: all 0.2s;
}
.btn-floating:hover {
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
    .btn-floating {
    width: 3.5%;
    height: 6%;
    top: 10%;
  }
}

/* PC */
@media (min-width: 992px) and (max-width: 1499px) {
    
}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {
}
/* Mobile */
@media (max-width: 767px) {
  .btn-floating {
    width: 15%;
    height: 6%;
    top: 10%;
  }
  Button p {
    font-size: 15px;
  }
}


</style>
