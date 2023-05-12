<script>

</script>
<template>
    <div class="section-home">
        <div class="bg-header">
            <div class="logo-header">
                <img src="../assets/img/logo-Columbia.png" alt="" class="logo-columbia">
            </div>
        </div>
        <div class="section-intro bg-white flex ">
            <div class="w-1/2">
                <div class="h-max flex items-center text-center">
                    <h1 class="flex-1">BE THE GOAT</h1>
                </div>
            </div>
            <div class="w-1/2">
                <div class="flex-1 flex items-center justify-center text-center ">
                   <div class=" w-3/4 bg-slate-300 text-start">
                    Introducing theall-terrain, hyper-grippy Facet™ 75 Mid.
                   </div>
                   <div class=" w-1/4 ">
                   <a href="" class="btn-icon-scroll border-black border hover:bg-black hover:text-white">Scroll Down</a>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style >




.section-home {
    height: 100vh;
    width: 100vw;
}

.logo-header {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0%;
    left: 4%;
}

.bg-header {


    width: 100%;
    height: 85%;
    background-image: url('../assets/img/bg-header.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
.section-intro > :nth-child(1) h1{
    font-family: 'Poppins-Bold';
    font-size: 4em;
    word-spacing: 20px;
    letter-spacing: 5px;
}
.section-intro > :nth-child(2){
   font-family: 'Poppins-semibold';
}

.btn-icon-scroll{
    padding: 10px 40px 10px 10px;
    transition: all 0.2s ease-in-out;
    text-transform:uppercase;
    font-size: 15px;
}

</style>