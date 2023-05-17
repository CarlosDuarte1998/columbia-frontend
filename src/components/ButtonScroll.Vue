<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    buttonColor: {
      type: String,
      required: true
    },
    sectionId: {
      type: String,
      required: true
    }
  },
  computed: {
    buttonClass() {
      return this.buttonColor === 'black' ? 'text-white border-white border hover:bg-white hover:text-black btn-icon-black' : 'text-black border-black border hover:bg-black hover:text-white btn-icon-white';
    }
  },
  methods: {
    scrollToSection() {
      const section = document.getElementById(this.sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>
<template>
  
    <button  :class="buttonClass" @click="scrollToSection">{{ buttonText }}</button>
  
</template>



<style scoped>
button{
    padding: 10px 40px 10px 10px;
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    font-size: 15px;
    background-repeat: no-repeat;
    background-size: 12px;
    background-position: right 20px center;
    font-family: 'Poppins-semibold';
}
.btn-icon-white{
    background-image: url('../assets/img/arrow-black.png');
}
.btn-icon-white:hover{
    background-image: url('../assets/img/arrow-white.png');
}

.btn-icon-black{
    background-image: url('../assets/img/arrow-white.png');
}
.btn-icon-black:hover{
    background-image: url('../assets/img/arrow-black.png');
}


</style>
