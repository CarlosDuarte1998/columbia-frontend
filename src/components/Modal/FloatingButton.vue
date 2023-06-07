<script >
import { onMounted } from 'vue';
import { ModalsContainer, useModal } from 'vue-final-modal';
import DiscountModal from './DiscountModal.vue';

export default {
  setup() {
    const { open, close } = useModal({
      component: DiscountModal,
      attrs: {
        onConfirm: handleClose,
      },
      slots: {
        default: '<p>The content of the modal</p>',
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
    };
  },
};

</script>

<template>
  <div @click="open" class="btn-floating" >
  <div>
      <Button  class="container-ofert">
   <p>10%</p>
   <p>OFF</p>
  </Button>
  </div>
  </div>

</template>

<style scoped>
.btn-floating{
    position: fixed;
    top: 10%;
    right: 0px;
    z-index: 2;
    width: 5%;
    height: 9%;
    background-color: #F5F5F5;
    border: 2px solid #000000;
    border-right: 0px;
    border-radius: 20% 0% 0% 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: 'GerTT-Bold';
    transition: all 0.2s;
}
.btn-floating:hover{
    background-color: #000000;
    color: #ffffff;
    border: 1px solid #fff;
    transform: scale(1.1);
}
Button p{
    font-size: 20px;
    font-family: 'GerTT-Bold';
    text-align: center;
    padding: 0px;
    margin: 0px;
    line-height: 1;
}


</style>
