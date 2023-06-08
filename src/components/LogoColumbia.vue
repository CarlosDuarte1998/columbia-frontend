<script >
export default {
  methods: {
    scrollToSection() {
      const section = document.getElementById('section-1');
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
    },
  },
};
</script>
<template>
  <div class="container-logo" style="overflow-x: hidden">
    <div class="logo text-white">
      <img @click="scrollToSection" src="../assets/img/logo-Columbia.png" alt="" class="logo-columbia" />
    </div>
  </div>
</template>
<style scoped>
.logo img {
  cursor: pointer;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  top: 0%;
}
.container-logo {
  margin-left: 20px;
}
/* Pantallas para tablets */
@media (min-width: 768px) {
}

/* Pantallas mobiles */
@media (max-width: 767px) {
  .container-logo {
    margin-left: 5px;
  }
  .logo {
    width: 150px;
    height: 150px;
    top: 0%;
  }
}
</style>
