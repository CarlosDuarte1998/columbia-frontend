<script>
import ButtonScroll from "./ScrollButton.vue";
import LogoColumbia from "./LogoColumbia.vue";

export default {
    components: {
        ButtonScroll,
        LogoColumbia,
    },
};
</script>
<template>
    <div class="w-screen h-screen" id="section-3">
        <div class="  h-full text-white lg:flex sm:block">
            <div class="section-1 lg:w-1/2 sm:w-full bg-black">
                <div class=" flex-column">
                    <div class="">
                        <LogoColumbia />
                    </div>
                    <div class=" flex justify-center items-center">
                        <img src="../assets/img/img-section-3.png" alt="" class="img-section"/>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/2 sm:w-full bg-white">
                <div class="section-2">
                    <div class="info-section">
                        <div class="">
                            <div class="container-info text-black">
                                <h1 class="text-xl text-start w-full">¿Qué es GOAT?</h1>
                                <p>
                                    GOAT (Greatest Of All Time) no es solo pensar y actuar
                                    ocasionalmente como “El Mejor de Todos los Tiempos”, sino que
                                    es vivir todo el tiempo como uno.
                                </p>
                                <p>Convertirte en uno.</p>
                                <p>
                                    Hacerlo no es fácil, para ser el mejor también necesitas tener
                                    el poder del GOAT (Grips On All Terrain), que te permitirá
                                    atravesar los lugares más extremos y desafiantes a los que te
                                    puedas enfrentar, tal y como lo haría un GOAT.
                                </p>
                                <p>Sé el mejor... Be The GOAT.</p>
                            </div>
                            <ButtonScroll class="btn-scroll" buttonText="Siguiente" buttonColor="white"
                                sectionId="section-4" 
                                sectionIdTop="section-2"
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

.section-1{
    position: relative;
    height: auto;
    margin-top: -2%;
}
.img-section{
    display: flex;
    position: relative;
    margin-top: -60px;
}
.btn-scroll {
    display: flex;
    position: relative;
    flex-direction: initial !important;
    top: 7rem;
    right: -36%;
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
    height: auto;
    width: 85%;
}

.container-info h1 {
    font-family: "GerTT-Bold";
    font-size: 30px;
    margin-bottom: 20px;
}

.container-info p {
    font-family: "GerTT-Regular";
    font-size: 17px;
    width: 100%;
    margin-top: 15px;
}
/* Pantallas grandes */
@media (min-width: 1600px) {
    .img-section{
    display: flex;
    position: relative;
    margin-top: -0px;
    width: 85%;
    }
    .btn-scroll {
        display: flex;
        position: relative;
        flex-direction: initial !important;
        top: 14.2rem;
        right: -37%;
    }
}



/* PC */
@media (min-width: 992px) and (max-width: 1499px) {}


/* Pantallas para tablets */
@media only screen and (min-width: 801px) and (max-width: 1023px) {
    .img-section{
        width: 70%;
    }
    .section-1 {
        height: 50%;
        background-position: top center;
    }

    .section-2 {
        height: 50%;
    }

    .container-info h1 {
        font-size: 30px;
        margin-top: 30px;
    }

    .btn-scroll {
        right: -40%;
        margin-top: 10%;
    }

    .btn-scroll {
        top: 1rem;
        right: -40%;
    }


}

/* Pantallas para tablets pequeñas*/
@media only screen and (min-width: 768px) and (max-width: 800px) {
    .img-section{
        width: 60%;
    }
    .section-1 {
        height: 50%;
        background-position: top center;
    }

    .section-2 {
        height: 50%;
    }

    .container-info h1 {
        font-size: 30px;
        margin-top: 30px;
    }
    .container-info p {
        font-size: 1.2rem;
        margin-top: 5px;
    }

    .btn-scroll {
        right: -40%;
        margin-top: 10%;
    }

    .btn-scroll {
        top: 1rem;
        right: -40%;
    }


}

/* Pantallas mobiles */
/* Pantallas mobiles */
@media only screen and (min-width: 381px) and (max-width: 767px) {
    .btn-scroll {
        text-align: center;
    }

    .section-1 {
        height: 50%;
    }

    .section-2 {
        height: 50%;
    }

    .section-2 .info-section div {
        width: 95%;
    }

    .container-info h1 {
        font-size: 22px;
        margin-top: 10px;
    }

    .container-info p {
        font-size: 15px;
        margin-top: 5px;
    }

    .btn-scroll {
        display: block;
        position: relative;
        margin-right: 27%;
        top: 2rem;
    }
    .img-section{
        width: 21rem;
    }

}

/*Mobile con pantallas pequeñas*/
@media (max-width: 380px) { 
    .btn-scroll {
        text-align: center;
    }

    .section-1 {
        height: 50%;
    }

    .section-2 {
        height: 50%;
    }

    .section-2 .info-section div {
        width: 95%;
    }

    .container-info h1 {
        font-size: 15px;
        margin-top: 10px;
    }

    .container-info p {
        font-size: 11px;
        margin-top: 5px;
    }

    .btn-scroll {
        display: block;
        position: relative;
        margin-right: 25%;
        top: 2rem;
    }
    .img-section{
        width: 18rem;
    }
}


</style>
