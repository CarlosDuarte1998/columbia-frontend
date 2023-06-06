<script setup>
import { ModalsContainer, useModal } from 'vue-final-modal'
import ModalConfirmPlainCss from './Modal/discountModal.vue'

const { open, close } = useModal({
  component: ModalConfirmPlainCss,
  attrs: {
    nameCompetitor: 'Hello World!',
    userCompetitor: 'Hello World!',
    urlImgCompetitor: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    countryCompetitor: 'Colombia',
    infoCompetitor: 'Lorem ipsum dolor sit amet',
    onConfirm() {
      close()
    },
  },
  slots: {
    default: '<p>The content of the modal</p>',
  },
});
</script>

<template>
  <VButton @click="open">
    Open Modal
  </VButton>

  <ModalsContainer />
</template>