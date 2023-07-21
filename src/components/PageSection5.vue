<script setup>
import ButtonScroll from "./ScrollButton.vue";
import LogoColumbia from "./LogoColumbia.vue";
import Termometro from "../assets/img/termometro.vue";
import TermometroGoat from './ProgressCompetitor/TermometroGoat.vue'
import { useHistoryStore } from '@/stores/history'
import { ref, onMounted, watch } from 'vue'

const historyStore = useHistoryStore();
let orderHistories = ref({});
let dataHistories = ref([]); 

onMounted(async () => {
  await historyStore.getHistory();
});

const destino = ref({
  5: 'Cerro El Águila',
  13: 'Volcán de Fuego',
  9: 'Pendiente',
  6: 'Volcán Telica',
  4: 'Valle del Tetero',
  10: 'Cerro Chame',
  12: 'Cerro El Ávila',
  3: 'Cerró las Vueltas'
});

watch(() => historyStore.hist, (newHist, oldHist) => {
  let size = Object.keys(newHist).length;
  orderHistories.value = {};
  dataHistories.value = [];

  for (let i = 1; i <= size; i++) {
    orderHistories.value[i] = newHist[i];

    if(orderHistories.value[i].id == 10){
      dataHistories.value[0] = orderHistories.value[i];
    }
    if(orderHistories.value[i].id == 13){
      dataHistories.value[1] = orderHistories.value[i];
    }
    if(orderHistories.value[i].id == 6){
      dataHistories.value[2] = orderHistories.value[i];
    }
    if(orderHistories.value[i].id == 12){
      dataHistories.value[3] = orderHistories.value[i];
    }
    if(orderHistories.value[i].id == 9){
      dataHistories.value[4] = orderHistories.value[i];
    }
    if(orderHistories.value[i].id == 5){
      dataHistories.value[5] = orderHistories.value[i];
    }
    if(orderHistories.value[i].id == 3){
      dataHistories.value[6] = orderHistories.value[i];
    }
    if(orderHistories.value[i].id == 4){
      dataHistories.value[7] = orderHistories.value[i]; 
    }
  }
});


</script>
<template>
  <div class="h-screen bg-section" id="section-5">
    <div class="bg-container h-full w-full">
      <div class="container-header flex ">
        <div class="container-logo z-50 sm:block">
          <LogoColumbia />
        </div>
        <div class="container-title-header flex text-center items-center text-white flex-col uppercase">
          <p class="" style="font-size: 0.85em;">Progreso</p>
          <p class=" text-5xl">GOATOMETER</p>
        </div>
      </div>
      <div class="justify-center flex item-center w-full showCompetitors">
        <div class="grid grid-cols-1" style="width: 70%">
          <div class="grid grid-cols-2">
            <div v-for="competidor in dataHistories" :key="competidor.id" >
              <div class="container-competitors text-white w-full uppercase">
                <div class="progress-competitor flex justify-between items-center w-full">
                  <div>
                    <img :src="competidor.images[0].url" alt="" class="profile-competitor" />
                  </div>
                  <div class="block competitor-info">
                    <span class="competitor-destination">RECORRIDO: {{ competidor.challenge }}</span><br />
                    <span class="competitor-country"> {{ competidor.country.name }}</span><br />
                    <span class="competitor-destino">Destino <br />{{ destino[competidor.id] }} <br /></span>
                    <span class="competitor-challengeDate">Fecha del reto<br />
                      <span>{{ competidor.challenge_date }}</span></span>
                  </div>
                  <div>
                    <TermometroGoat v-bind:histories="competidor" class="progress-goat" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="justify-center flex item-center w-full showCompetitorsMobile mt-4">
        <div class="grid grid-cols-1" style="width: 100%">
          <div class="grid grid-cols-1">
            <div v-for="competidor in dataHistories" :key="competidor.id" class="pl-10 mt-2">
              <div class="container-competitors text-white w-full uppercase">
                <div class="progress-competitor flex justify-between items-center w-full">
                  <div>
                    <img :src="competidor.images[0].url" alt="" class="profile-competitor" />
                  </div>
                  <div class="block competitor-info pl-4">
                    <span class="competitor-destination">RECORRIDO: {{ competidor.challenge }}</span><br />
                    <span class="competitor-country"> {{ competidor.country.name }}</span><br />
                    <span class="competitor-destino">Destino: {{ destino[competidor.id] }} <br /></span>
                    <span class="competitor-challengeDate">Fecha del reto:
                      <span>{{ competidor.challenge_date }}</span></span>
                  </div>
                  <div class="flex justify-center items-center">
                    <TermometroGoat v-bind:histories="competidor" class="progress-goat pl-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="container-competitors">
        <img src="../assets/img/list-competitors.png" alt="" class="img-competitors">
        <img src="../assets/img/list-competitors-mobile.png" alt="" class="img-competitors-mobile">
      </div> -->
      <div class="text-xl"></div>
      <div class="container-btnScroll">
        <ButtonScroll class="ButtonScroll" buttonText="Siguiente" buttonColor="black" sectionId="section-6" sectionIdTop="section-4"/>
      </div>
    </div>
  </div>
</template>
<style scoped>


.showCompetitors{
  display: flex;
}
.showCompetitorsMobile{
  display: none;
}
.competitor-info {
  display: block !important;
  width: 200px;
  line-height: 15px;
  margin-top: 18px;
  margin-left: 20px;
}

.competitor-destination,
.competitor-country,
.competitor-challengeDate,
.competitor-destino {
  font-size: 0.6em;
  font-family: Gertt-bold;
  line-height: 9px;
  letter-spacing: 0.03em;
}

.profile-competitor {
  width: 100px;
  height: auto;
  margin-top: 18px;
}

.progress-goat {
  width: 80%;
  height: auto;
  margin-top: 10px;
}
.container-title-header {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'GerTT-Bold';
  font-size: 2.5em;
  line-height: 1em;
  letter-spacing: 0.08em;
}

.container-competitors{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}
.img-competitors{
  width: 75%;
}
.img-competitors{
  display: black;
}
.img-competitors-mobile{
  display: none;
}
.container-header {
  display: flex;
  height: 20%;
  justify-content: center;
  align-items: center;
}

.container-header div:nth-child(1) {
  position: absolute;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
}

.container-btnScroll {
  display: flex;
  justify-content: end;
  position: relative;
}

.bg-section {
  background-image: url("../assets/img/bg-section-5.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
}

.ButtonScroll {
  margin-bottom: 20px;
  margin-right: 40px;
}

.bg-container {
  background: #00000046;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}





/* Pantallas grandes */
@media (min-width: 1500px) {
  .competitor-info {
    margin-top: 40px;
  }
  .profile-competitor{
    margin-top: 50px;
  }
  .competitor-destination,
.competitor-country,
.competitor-challengeDate,
.competitor-destino {
  font-size: 0.9em;
  font-family: Gertt-bold;
}
}

/* PC */
@media (min-width: 992px) and (max-width: 1499px) {}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {
  .container-logo{
      position: initial;
      display: block;
      width: 50%;
      margin: 0px 0px 0px 0px;
  }

  .img-competitors-mobile{
  display: block;
  width: 60%;
  height: auto;
}
.img-competitors{
  display: none;
}
}


/* Pantallas mobiles */
@media only screen and (min-width: 381px) and (max-width: 767px) {
  .progress-competitor :nth-child(1) {
  margin-top: 0px;
  margin-right: 6px;
}
  .progress-goat{
    width:70%
  }
  .competitor-destination,
.competitor-country,
.competitor-challengeDate,
.competitor-destino {
  font-size: 0.49em;
  font-family: Gertt-bold;
  letter-spacing: 0.03em;
}
.profile-competitor{
  width: 90px;
  height: auto;
  margin-bottom: 5px;
}
.competitor-info {
  display: block !important;
  width: 250px;
  line-height: 1px;
  margin-left: 10px;
  margin-top: 0px;
}


  .showCompetitorsMobile{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .showCompetitors{
    display: none;
  }
.ButtonScroll{
  margin-right: 0.9rem;
}
  .container-header div:nth-child(1){
    position: initial;
  }
  .container-header {
  display: flex;
  flex-direction: column !important;
}

  .logo-columbia {
    width: 100%;
  }
  
.container-title-header {
  position: relative;
  margin-bottom: 10px;
}
.container-logo{
  position: absolute;
}
.section-logo{
 display: none;
}
.container-logo {
 padding: 0px 0px 0px 0px;
 margin: 0px 0px 0px 0px;
 width: 95% !important;
}
.bg-section{
  background: url('../assets/img/bg-section-5-mobile.jpg');
  background-position: 50% 50%;
  background-size: cover;
}


.img-competitors{
  display: none;
}
.img-competitors-mobile{
  margin-top: 25px;
  display: block;
  width: 75%;
  height: auto;
}
}

/*Mobile con pantallas pequeñas*/
@media (max-width: 380px) { 
  
  .container-header div:nth-child(1){
    position: initial;
  }
  .container-header {
  display: flex;
  flex-direction: column !important;
}

  .logo-columbia {
    width: 100%;
  }
  
.container-title-header {
  position: relative;
  margin-bottom: 10px;
}
.container-logo{
  position: absolute;
}
.section-logo{
 display: none;
}
.container-logo {
 padding: 0px 0px 0px 0px;
 margin: 0px 0px 0px 0px;
 width: 95% !important;
}
.bg-section{
  background: url('../assets/img/bg-section-5-mobile.jpg');
  background-position: 50% 50%;
  background-size: cover;
}


.img-competitors{
  display: none;
}
.img-competitors-mobile{
  margin-top: 25px;
  display: block;
  width: 75%;
  height: auto;
}
}
</style>
