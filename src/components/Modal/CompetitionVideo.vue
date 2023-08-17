<script setup>
import { VueFinalModal, ModalsContainer } from "vue-final-modal";
</script>

<template>
    <VueFinalModal class="social-modal" content-class="social-modal-content" overlay-transition="vfm-fade"
        content-transition="vfm-fade" lock-scroll="true">
        <div class="bg-white container-social">
            <div class=" mt-5 flex flex-col justify-center items-center">
                <div class="mb-5 font-gerttb">
                    <p class="text-title lg:text-5xl uppercase text-center">
                        GOATOMETER
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-1 iframe-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ypx6w5Aqmow?controls=1&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    
                </div>
                <div class="mt-14 text-3xl font-gerttb text-goat"><span>#BETHEGOAT</span></div>
            </div>
        </div>
    </VueFinalModal>
</template>

<style scoped>

.iframe-video>iframe {
    width: 560px;
    height: 315px;
}


.container-social {
    border-radius: 0.8rem;
}

.icon-social {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    filter: invert(1);
}

.btn-social span {
    margin-bottom: -3px;
}

.btn-social:hover .icon-social {
    filter: initial;
}

.btn-social {
    border-radius: 5px;
}



/* Pantallas grandes */
@media (min-width: 1500px) {}

/* PC */
@media (min-width: 992px) and (max-width: 1499px) {}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {
    .btn-social {
        padding: 0.8rem 1.5rem 0.8rem 1.5rem;
    }

    .text-title {
        font-size: 35px;
    }

    .md\:w-80 {
        width: 36rem !important;
    }

    .btn-social span {
        margin-bottom: -3px;
        font-size: 12px !important;
    }

    .text-goat {
        font-size: 30px;
    }

}

/* Mobile */
@media (max-width: 767px) {
    .grid-cols-4 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .btn-social span {
        margin-bottom: -3px;
        font-size: 13px !important;
    }

    .text-title {
        font-size: 30px !important;
    }

    .iframe-video>iframe {
    width: 100%;
    height: 10.56em;
    background-color: white;
}
}</style>
