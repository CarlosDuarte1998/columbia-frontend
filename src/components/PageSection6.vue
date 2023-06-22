<script>
import LogoColumbia from "./LogoColumbia.vue";
export default {
  components: {
    LogoColumbia,
  },
  data() {
    return {
      currentYear: null,
    };
  },
  mounted() {
    this.getCurrentYear();
  },
  methods: {
    goToFilter() {
      window.open("https://www.instagram.com/columbia_cr/", "_blank");
    },
    scrollToSection() {
      const section = document.getElementById('section-1');
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
    },

    getCurrentYear() {
      const date = new Date();
      this.currentYear = date.getFullYear();
    }


  },
};
</script>
<template>
  <div class="bg-black" id="section-6">
    <div class="h-screen">
      <div class="container-logo">
        <LogoColumbia class="logo" />
      </div>
      <div class="container-front">
        <div class="conatiner-img-btg">
          <img
            src="../assets/img/bethegoat-1.png"
            alt=""
            srcset=""
            class="img-portada1"
          />
        </div>
        <div class="container-img-btg">
          <img
            src="../assets/img/goat-awards.png"
            alt=""
            class="img-portada2"
          />
        </div>
      </div>
      <div class="filter-ig">
        <div class="container-filter-ig">
          <button @click="goToFilter" class="btn-filter-ig">
            <p>Prueba nuestro filtro</p>
            <img
              src="../assets/img/icon-ig-black.png"
              alt=""
              class="icon-filter-ig"
            />
          </button>
        </div>
        <div class="line-separator"></div>
      </div>
    </div>
    <footer >
      <div class="container-footer">
        <div class="copyright-info">
          <p class="">© {{currentYear}} Columbia Sportswear</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            facere perferendis dolores ad eius ex nisi, iure alias, provident
            odit corporis laudantium corrupti deserunt nobis aut at veritatis
            rerum voluptas!
          </p>
        </div>
        <div class="social-media">
          <div class="">
            <a href=""><img src="../assets/img/icon-fb.png" alt="" class="icon-fb"/></a>
          </div>
          <div>
            <a href=""><img src="../assets/img/icon-ig.png" alt="" class="icon-ig"/></a>
          </div>
        </div>
        <div class="container-btn-scroll">
          <button class="btn-scroll bg-white text-white duration-100 hover:bg-white" @click="scrollToSection">
            <p style="margin-bottom: -3px;">Ir arriba</p> <img src="../assets/img/arrow-white.png" alt="" class="filter hover:invert">
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped>
.icon-fb, .icon-ig {
  width: 2.5rem;
}
.social-media {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
}
.container-btn-scroll {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
}
.btn-scroll {
  background-color: transparent;
  border: 1px solid white;
  color: white;
  font-family: "Gertt-bold";
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.2rem; 
}

.btn-scroll img {
  width: 0.9rem;
  margin-left: 0.5rem;
  transition: 0.5s;
  transform: rotate(180deg);
}
.copyright-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  width: 100%;
  font-family: "Gertt-regular";
  font-size: 0.7rem;
}
.container-footer {
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 20px 10px;
}
.line-separator {
  width: 40%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.685);
  margin: 0 auto;
}
.btn-filter-ig {
  text-transform: uppercase;
  background-color: white;
  color: black;
  border: none;
  padding: 1rem 2rem;
  font-family: "Gertt-bold";
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}

.btn-filter-ig:hover {
  background-color: black;
  color: white;
  transition: 0.5s;
}

.btn-filter-ig:hover img {
  filter: invert(1);
  transition: 0.5s;
}

.icon-filter-ig {
  width: 1.5rem;
  margin-left: 1rem;
}

.container-filter-ig {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px 15px 0px;
}

.container-filter-ig p {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-front {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: -5%;
}

.container-img-btg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.img-portada1 {
  width: 100%;
}

.img-portada2 {
  width: 78%;
}

/* Pantallas grandes */
@media (min-width: 1500px) {
  .img-portada2 {
    width: 70%;
  }
  .img-portada1 {
    width: 700px;
  }
  .line-separator {
    margin-top: 30px;
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
  /* Adaptabilidad del footer */
  .container-footer {
    flex-direction: column;
  }
  .copyright-info {
    width: 100%;
    text-align: center;
  }
  .copyright-info p{
    text-align: center;
    width: 100%;
    font-size: 0.6em;
  }
  .container-footer> *:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: start;
    order: 3;
    font-size: 12px;
    margin-top: 10px;
  }
  .container-footer> *:nth-child(2) {
    order: 2;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
  }

  .container-footer > *:nth-child(3) {
    order: 1;
    display: flex;
    justify-content: center;
    width: 100%;
  
  }
/* Adaptabilidad de la portada */
.container-front{
  margin-top: 0%;
  flex-direction: column;
}
.container-front > *:nth-child(1) {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-front > *:nth-child(2) {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-img-btg {
  width: 100%;
}

.img-portada1 {
  width: 85%;
}
.img-portada2 {
  width: 70%;
  transform: scaleX(-1);
}
 
}
</style>
