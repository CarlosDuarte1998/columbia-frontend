<script setup>
import { VueFinalModal, ModalsContainer } from "vue-final-modal";
</script>

<template>
    <VueFinalModal class="confirm-modal" content-class="confirm-modal-content" overlay-transition="vfm-fade"
        content-transition="vfm-fade" lock-scroll="true">
        <div>
            <div class="mt-4 mb-4 flex flex-col justify-center items-center">
                <div class="mb-10 font-gerttb">
                    <p>
                        !Síguenos en <br />
                        instagram!
                    </p>
                </div>
                <div class="grid grid-cols-4 gap-4 lg:w-5/6 md:w-80 sm:w-80">
                    <div>
                        <a class="btn-social bg-black text-white p-4 border flex item-center justify-center border-black hover:text-black hover:bg-white transition duration-200" href="#">
                            <img src="../../assets/img/instagram-social.svg" class="icon-social transition duration-200"/>
                            <span>@columbia_sv</span>
                        </a>
                    </div>
                    <div>
                        <a class="btn-social bg-black text-white p-4 border flex item-center justify-center border-black hover:text-black hover:bg-white transition duration-200" href="#">
                            <img src="../../assets/img/instagram-social.svg" class="icon-social transition duration-200"/>
                            <span>@columbia_sv</span>
                        </a>
                    </div>
                    <div>
                        <a class="btn-social bg-black text-white p-4 border flex item-center justify-center border-black hover:text-black hover:bg-white transition duration-200" href="#">
                            <img src="../../assets/img/instagram-social.svg" class="icon-social transition duration-200"/>
                            <span>@columbia_sv</span>
                        </a>
                    </div>
                    <div>
                        <a class="btn-social bg-black text-white p-4 border flex item-center justify-center border-black hover:text-black hover:bg-white transition duration-200" href="#">
                            <img src="../../assets/img/instagram-social.svg" class="icon-social transition duration-200"/>
                            <span>@columbia_sv</span>
                        </a>
                    </div>
                    <div>
                        <a class="btn-social bg-black text-white p-4 border flex item-center justify-center border-black hover:text-black hover:bg-white transition duration-200" href="#">
                            <img src="../../assets/img/instagram-social.svg" class="icon-social transition duration-200"/>
                            <span>@columbia_sv</span>
                        </a>
                    </div>
                    <div>
                        <a class="btn-social bg-black text-white p-4 border flex item-center justify-center border-black hover:text-black hover:bg-white transition duration-200" href="#">
                            <img src="../../assets/img/instagram-social.svg" class="icon-social transition duration-200"/>
                            <span>@columbia_sv</span>
                        </a>
                    </div>
                    <div>
                        <a class="btn-social bg-black text-white p-4 border flex item-center justify-center border-black hover:text-black hover:bg-white transition duration-200" href="#">
                            <img src="../../assets/img/instagram-social.svg" class="icon-social transition duration-200"/>
                            <span>@columbia_sv</span>
                        </a>
                    </div>
                    <div>
                        <a class="btn-social bg-black text-white p-4 border flex item-center justify-center border-black hover:text-black hover:bg-white transition duration-200" href="#">
                            <img src="../../assets/img/instagram-social.svg" class="icon-social transition duration-200"/>
                            <span>@columbia_sv</span>
                        </a>
                    </div>
                </div>
                <div class="mt-10 font-gerttb"><span>#BETHEGOAT</span></div>
            </div>
        </div>
    </VueFinalModal>
</template>

<style scoped>
.icon-social {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    
    filter: invert(1);
}
.btn-social:hover .icon-social {
    filter: initial;
}


/* Pantallas grandes */
@media (min-width: 1500px) {}

/* PC */
@media (min-width: 992px) and (max-width: 1499px) {}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {}

/* Mobile */
@media (max-width: 767px) {
    .grid-cols-4 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
</style>
