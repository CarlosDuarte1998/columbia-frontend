<script setup>
import { VueFinalModal, ModalsContainer } from "vue-final-modal";
import { onMounted } from 'vue';

onMounted(() => {
    onYouTubeIframeAPIReady();
});

var player;

function onYouTubeIframeAPIReady() {
    player = createPlayer('Ypx6w5Aqmow'); 
}

function createPlayer(videoId) {
    var player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: videoId,
        playerVars: {
            modestbranding: 1,
            showinfo: 0,
            controls: 0,
            rel: 0,
            autoplay: 1,
            mute: 1,
            loop: 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    return player;
}

function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
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

                    <div id="player"></div>
                


                    <!-- iframe de facebook -->
                    <!-- <div class="fb-video" data-href="https://www.facebook.com/watch/?v=1010355243428628" data-width="500"
                        data-show-text="false" data-allowfullscreen="true" data-autoplay="true" data-show-captions="false">
                    </div> -->


                </div>
                <div class="mt-14 text-3xl font-gerttb text-goat"><span>#BETHEGOAT</span></div>
            </div>
        </div>
    </VueFinalModal>
</template>

<style scoped>
#player {
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
