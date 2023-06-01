<script>
import ModalCompetitor from "./Modal/ModalCompetitor.vue";
import axios from 'axios';
export default {
  props: {},
  data() {
    return {
      isModalOpen: false,
      name: String,
      description: String,
    profileImageUrl: String,
    country: String,
    };
  },
  methods: {


    openModal() {
    axios.get('https://randomuser.me/api/')
    .then(response => {
      const user = response.data.results[0];
      this.name = `${user.name.first} ${user.name.last}`;
      this.description = user.email;
      this.profileImageUrl = user.picture.large;
      this.country = user.location.country;
      this.isModalOpen = true;
    })
    .catch(error => {
      console.error('Error al obtener los datos del usuario:', error);
    });
    
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
  components: {
    ModalCompetitor,
  },
};
</script>
<template>
  <div>
    <!-- Tu contenido actual -->

    <button @click="openModal">Abrir modal</button>
    <ModalCompetitor
      v-if="isModalOpen"
      @close="closeModal"
        :nameText="name"
        :descriptionText="description"
        :imgCompetitor="profileImageUrl"
        :country="country"
    />
  </div>
</template>
