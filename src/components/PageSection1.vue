<script setup>
import { ref } from 'vue';

const scrollToSection = () => {
  const section = document.getElementById("section-2");
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <div class="section-home" id="section-1">
    <div class="bg-header" style="overflow-x: hidden">
      <div class="logo-header">
        <img src="../assets/img/logo-Columbia.png" alt="" class="logo-columbia filter invert" />
      </div>
    </div>
    <div class="section-intro bg-white lg:flex sm:block ">
      <div class="lg:w-1/2 md:w-full sm:w-full">
        <div class="h-max flex items-center">
          <h1 class="flex-1 lg:text-start md:text-center sm:text-center text-goatometer">
            GOATOMETER
          </h1>
        </div>
      </div>
      <div class="lg:w-1/2 md:w-full sm:w-full">
        <div class="flex-1 lg:flex md:block sm:block items-center justify-center text-center">
          <div class="lg:w-3/4 md:3/4 sm:w-full h-full items-center text-end flex">
            <p class="w-full font-gerttr mt-2 text-goat">BE THE GOAT</p>
          </div>
          <div class="lg:w-1/4 md:1/4 sm:w-full sm:mt-3">
            <a style="cursor: pointer" @click="scrollToSection" id="btn"
              class="btn-icon-scroll border-black border hover:bg-black hover:text-white">Siguiente</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-home {
  height: 100vh;
  width: 100vw;
}

.logo-header {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 5%;
  left: 2%;
}

.text-goat {
  margin: 14px 27px 0px 0px;
  font-size: 2em;
  word-spacing: 4px;
}

.bg-header {
  width: 100%;
  height: 85%;
  background-image: url("../assets/img/bg-header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left center;
}

.section-intro {
  width: 100%;
  height: 15%;
  top: 0%;
  left: 0%;
}

.items-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.section-intro {
  padding: 0 2%;
}

/*Secciones de intro elementos padres e hijos mobile*/
.section-intro> :nth-child(1) h1 {
  font-family: "Poppins-Bold";
  font-size: 4em;
  word-spacing: 20px;
  letter-spacing: 5px;
}

.section-intro> :nth-child(2) {
  font-family: "Poppins-semibold";
}

.btn-icon-scroll {
  padding: 13px 40px 13px 13px;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  background-image: url("../assets/img/arrow-black.png");
  background-repeat: no-repeat;
  background-size: 12px;
  background-position: right 20px center;
  transform: rotate(-90deg);
}

.btn-icon-scroll:hover {
  background-image: url("../assets/img/arrow-white.png");
}

/*Pantallas medianas*/
@media (min-width: 768px) and (max-width: 1023px) {
  .bg-header {
    background-position: center;
  }

  .items-center {
    display: flex;
  }

  .bg-header {
    background-image: url("../assets/img/bg-header-mobile.jpg");
    background-position: center;
  }
  .text-goatometer{
    margin-bottom: -10px;
  }
}

/* Pantallas mobiles */
@media only screen and (min-width: 381px) and (max-width: 767px) {
  .bg-header {
    height: 75%;
    background-image: url("../assets/img/bg-header-mobile.jpg");
    background-position: center;
  }

  .section-intro {
    height: 25%;
  }

  .section-intro> :nth-child(1) h1 {
    font-family: "Poppins-Bold";
    font-size: 2em;
    word-spacing: 20px;
    letter-spacing: 5px;
  }

  .items-center {
    display: block;
  }

  /*Secciones de intro elementos padres e hijos mobile*/
  .section-intro> :nth-child(1) {
    margin-top: 5px;
    text-align: center;
  }

  .section-intro> :nth-child(2) .flex-1> :nth-child(1) {
    margin-top: 5px;
    text-align: center;
  }

  .section-intro> :nth-child(2) .flex-1> :nth-child(2) {
    margin-top: 15px;
  }

  .text-goat {
  word-spacing: 3px;
}

.text-goatometer{
  margin-top: 15px;
}
}


/*Mobile con pantallas pequeñas*/
@media (max-width: 380px) { 
  .bg-header {
    height: 75%;
    background-image: url("../assets/img/bg-header-mobile.jpg");
    background-position: center;
  }

  .section-intro {
    height: 25%;
  }

  .section-intro> :nth-child(1) h1 {
    font-family: "Poppins-Bold";
    font-size: 1.5em;
    word-spacing: 20px;
    letter-spacing: 5px;
  }

  .items-center {
    display: block;
  }

  /*Secciones de intro elementos padres e hijos mobile*/
  .section-intro> :nth-child(1) {
    margin-top: 5px;
    text-align: center;
  }

  .section-intro> :nth-child(2) .flex-1> :nth-child(1) {
    margin-top: 5px;
    text-align: center;
  }

  .section-intro> :nth-child(2) .flex-1> :nth-child(2) {
    margin-top: 15px;
  }

  .text-goat {
  word-spacing: 3px;
  font-size: 1.6rem;
}

.text-goatometer{
  margin-top: 0.8rem;
}
}

</style>
