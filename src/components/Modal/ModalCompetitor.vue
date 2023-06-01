<script>
export default {
  props: {
    imgCompetitor: String,
    nameText: String,
    descriptionText: String,
    country: String,
  },
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    closeModal() {
      this.isOpen = false;
      this.$emit("close");
    },
  },
  computed: {},
};
</script>

<template>
  <div  class="modal" v-if="isOpen">
    <div class="modal-content">
      <button @click="closeModal" class="btn-close">X</button>

      <div class="container-content">
        <div class="lg:w-2/4  flex justify-center items-center">
          <img :src="imgCompetitor" class="img-competitor" alt="" srcset="" />
        </div>
        <div class="bg-slate-200 lg:w-3-4 sm:w-full">
          <h2 class="name-competitor">{{ nameText }}</h2>
          <p class="user-competitor">{{ descriptionText }}</p>
          <p class="info-competitor">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium dignissimos, inventore doloremque sapiente, aliquam labore cupiditate aperiam, nihil neque nesciunt quae voluptatum id. Molestias impedit quisquam, qui odio obcaecati voluptates. adipisicing elit. Laudantium dignissimos, inventore doloremque sapiente, aliquam labore cupiditate aperiam, nihil neque nesciunt quae voluptatum id. Molestias impedit quisquam, qui odio obcaecati voluptates.</p>
            <p class="country-competitor">{{ country }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.country-competitor, .info-competitor, .name-competitor, .user-competitor{
  text-align: start;
}
.name-competitor{
  font-size: 2rem;
    font-family: 'GerTT-Bold';
    
}
.user-competitor{
  font-size: 1.5rem;
  font-family: 'GerTT-Medium';
  
}
.info-competitor{
  font-size: 1rem;
  font-family: 'GerTT-medium';
  margin-top: 12px;
}

.country-competitor{
  font-size: 1.5rem;
  font-family: 'GerTT-Medium';
}
.img-competitor{
width: 80%;

}
.container-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  width: 80%;
}

button {
  margin-top: 10px;
}

.btn-close {
  display: relative;
  float: right;
  margin-top: -10px;
    font-size: 1.5rem;
    font-family: sans-serif;
    font-weight: bold;
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
.country-competitor, .info-competitor, .name-competitor, .user-competitor{
    text-align: center;
    width: 100%;
}
.img-competitor{
width: 150px;
}


.container-content:nth-child(2){
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
.img-competitor{

    width: 200px;
    margin-bottom: 20px;
}

}

/* Mobile */
@media (max-width: 767px) {
    .container-content {
  display: block;
 
}

.modal-content {
    width: 100%;
}
.country-competitor, .info-competitor, .name-competitor, .user-competitor{
    text-align: center;
    width: 100%;
}
.img-competitor{
width: 150px;
}

.container-content{
    width: initial;
}
}
</style>
