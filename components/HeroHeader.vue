<template>
  <section class="relative h-screen w-full flex justify-center items-center bg-dapurkode-logo-orange" id="hero-header" ref="heroHeader">
    <div class="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl py-2 px-3 sm:px-0.5">
      <div class="flex flex-wrap text-center lg:text-left justify-center lg:justify-start">
        <div>
          <h1 class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-normal xl:leading-loose mb-10 tracking-normal font-extrabold text-gray-900 font-Didact ">
            <span class="inline-block">Saatnya wujudkan</span>
            <span class="inline-block bg-black text-white sm:p-3 xl:p-5 my-2"> Ide Anda menjadi Nyata</span>
          </h1>
        </div>
        <hr class="w-1/2 border-black">
        <div>
          <p class="mt-3 text-gray-800 text-base md:text-2xl md:max-w-xl lg:max-w-4xl mt-10">
            Ingin memasarkan bisnis melalui website atau membuat sistem bisnis Anda
            menjadi terdigitalisasi, efektif dan efisien? Jadikan kami partner Anda dalam mewujudkannya !
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroHeader",
  mounted() {
    if (process.client){
      let hero = window.document.getElementById('hero-header');
      localStorage.setItem("heroHeaderHeight", hero.clientHeight);
    }
  },
  destroyed() {
    if (process.client){
      localStorage.removeItem("heroHeaderHeight")
    }
  }
}
</script>

<style scoped>
  #hero-header::after{
    content: '';
    position: absolute;
    background-image: url('~assets/images/background/background.png');
    background-attachment: scroll;
    background-position: center bottom;
    background-repeat: repeat-x;
    width: auto;
    height: 30px;
  }
</style>
