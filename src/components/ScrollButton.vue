<script>
export default {
  props: {
    buttonText: String,
    buttonColor: String,
    sectionId: String,
  },
  computed: {
    buttonClass() {
      return this.buttonColor === "black"
        ? "text-white border-white border hover:bg-white hover:text-black btn-icon-black"
        : "text-black border-black border hover:bg-black hover:text-white btn-icon-white";
    },
  },
  methods: {
    scrollToSection() {
      const section = document.getElementById(this.sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>
<template>
  <button v-if="buttonColor === 'black'" class="flex items-center justify-center" :class="buttonClass" @click="scrollToSection">
  <p>  {{ buttonText }}</p>
  </button>

  

</template>

<style scoped>
button {
  margin: 0px;
  padding: 10px 40px 10px 10px;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  background-repeat: no-repeat;
  background-size: 12px;
  background-position: right 20px center;
  font-family: "GerTT-Bold";
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
</style>
