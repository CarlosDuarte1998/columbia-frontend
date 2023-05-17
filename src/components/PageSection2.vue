<script>
import ButtonScroll from "./ButtonScroll.Vue";
import LogoColumbia from "./LogoColumbia.vue";

export default {
  components: {
    ButtonScroll,
    LogoColumbia,
  },
};
</script>
<template class="">
  <div class="w-screen h-screen bg-black" id="section-2">
    <div class="h-full text-white lg:flex sm:block">
      <div class="section-1 lg:w-1/2 sm:w-full">
        <div class="">
          <LogoColumbia />
        </div>
      </div>
      <div class="lg:w-1/2 sm:w-full">
        <div class="section-2">
          <div class="info-section">
            <div class="">
              <div class="container">
                <h1 class="text-xl text-start">
                  You probably don’t set off from the trailhead looking to be
                  the greatest hiker of all time.
                </h1>
                <br>
                <p>
                  Like must of us, you just want to get out there. Disconnect.
                  Or reconnect. And no matter you trail acumen, you appreciate
                  gear that leaves you feeling a bit more confident and capable.
                </p>
                <br />
                <p>
                  Facet 75’s AdaptTrax system were designed to help you become
                  more at home in wild and wily places. Almost like... you
                  belong there. Become one with nature...
                </p>
              </div>
              <ButtonScroll
                class="btn-scroll"
                buttonText="Scroll Down"
                buttonColor="black"
                sectionId="section-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.section-1 {
  background-image: url("../assets/img/bg-section-2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right center;
  display: flex;
  height: 100%;
}

.btn-scroll {
  display: block;
  position: relative;
  bottom: 3%;
  right: -40%;
}

.section-2 {
  display: flex;
  height: 100%;
}
.section-2 div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.section-2 .info-section div {
  flex-direction: column;
  height: 100%;
  width: 85%;
}
.container h1{
  font-family: 'GerTT-Bold';
  font-size: 30px;
}
.container p{
  font-family: 'GerTT-Regular';
  font-size: 17px;
}
/* Pantallas para tablets */
@media (min-width: 768px) {
}

/* Pantallas mobiles */
@media (max-width: 767px) {
  .btn-scroll {
    text-align: center;
  }
}
</style>
