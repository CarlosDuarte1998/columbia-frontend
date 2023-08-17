<script setup>
import { VueFinalModal, ModalsContainer } from "vue-final-modal";
import { onMounted } from 'vue';

onMounted(() => {
    onYouTubeIframeAPIReady();
    const containerSocial = document.querySelector(".videofb");
if (containerSocial) {
  setTimeout(() => {
    containerSocial.click();
  }, 2000); // 2000 milisegundos = 2 segundos
}


});

var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '315',
            width: '560',
            videoId: 'Ypx6w5Aqmow', // Cambia esto al ID del video que proporcionaste
            playerVars: {
                'controls': 0,
                'autoplay': 1,
                'mute': 1,
                showinfo: 0,
                rel: 0,
                loop: 1,
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
     
    }
}

function stopVideo() {
    player.stopVideo();
}
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

                    <!-- <iframe
              src="https://www.youtube.com/embed/Ypx6w5Aqmow?controls=0&autoplay=1&mute=1&loop=1&playlist=Ypx6w5Aqmow"
              width="560"
              height="315"
              frameborder="0"
              allowfullscreen
            
            ></iframe> -->

                    <!-- <div id="player"></div> -->

                    <iframe id="videofb" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FColumbiaSportswearDominicanRepublic%2Fvideos%2F1010355243428628%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                </div>
                <div class="mt-14 text-3xl font-gerttb text-goat"><span>#BETHEGOAT</span></div>
            </div>
        </div>
    </VueFinalModal>
</template>

<style scoped>


#player{
    pointer-events: none;
}

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
}
</style>
