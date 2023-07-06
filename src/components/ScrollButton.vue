<script setup>
import { ref, onMounted, defineProps } from 'vue';

const props = defineProps({
  buttonText: {
    type: String,
    required: true,
  },
  buttonColor: {
    type: String,
    required: true,
  },
  sectionId: {
    type: String,
    
  },
  sectionIdTop: {
    type: String,
  },
});

const buttonClass = ref('');

const scrollToSection = () => {
  const section = document.getElementById(props.sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
};
const scrollToSectionTop = () => {
  const section = document.getElementById(props.sectionIdTop);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
};


onMounted(() => {
  buttonClass.value =
    props.buttonColor === 'black'
      ? 'text-white border-white border hover:bg-white hover:text-black btn-icon-black '
      : 'text-black border-black border filter hover:bg-black hover:text-white btn-icon-white';
});
</script>
<template>
 <div class="flex">
<div class="mr-2">
  <button  class="flex items-center justify-center btn-top trasition duration-150" :class="buttonClass" @click="scrollToSectionTop">
 <img src="../assets/img/arrow-white.png" alt="" v-if="props.buttonColor==='black'">
  <img src="../assets/img/arrow-black.png" alt="" v-else>
  </button>
</div>
<div>
  <button  class="flex items-center justify-center trasition duration-150" :class="buttonClass" @click="scrollToSection">
  <p>  {{ buttonText }}</p>
  </button>
</div>
 </div>
  

</template>

<style scoped>
button {
  margin: 0px;
  padding: 13px 40px 13px 13px;
  text-transform: uppercase;
  background-repeat: no-repeat;
  background-size: 12px;
  background-position: right 20px center;
  font-family: "GerTT-Bold";
}
button p{
margin-bottom: -3px;
}
.btn-icon-white {
  background-image: url("../assets/img/arrow-black.png");
}
.btn-icon-white:hover {
  background-image: url("../assets/img/arrow-white.png");
}

.btn-icon-black {
  background-image: url("../assets/img/arrow-white.png");
}
.btn-icon-black:hover {
  background-image: url("../assets/img/arrow-black.png");
}

.btn-top:hover, .btn-top{
  background-image: initial;
}

.btn-top{
  padding: 16px 13px 16px 13px;
}
.btn-top img{
  width: 15px;
  transform: rotate(180deg);
}

.btn-top:hover img{
 filter : invert(1);
}

</style>
