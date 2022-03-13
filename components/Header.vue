<template>
  <div>
    <client-only>
      <nav class="fixed inset-x-0 top-0 z-10 justify-between w-full duration-500 px-3" ref="navBar"
         :class="{'bg-dapurkode-logo-orange border-b border-black': isHeroNavDetected, 'bg-white shadow-md': !isHeroNavDetected}">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-center justify-between h-16 md:h-20">
            <NuxtLink to="/">
              <a class="flex-shrink-0">
                <img class="h-10 md:h-14 w-auto" :class="{hidden: isHeroNavDetected }" src="~/assets/images/logo.png" alt="Workflow"/>
                <img class="h-10 md:h-14 w-auto" :class="{hidden: !isHeroNavDetected }" src="~/assets/images/logo2.png" alt="Workflow"/>
              </a>
            </NuxtLink>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-10">
                <NuxtLink  :to="navLink.goTo" v-for="(navLink, key) in navLinks" :key="key" :class="{'hover:text-white': isHeroNavDetected, 'hover:text-dapurkode-logo-orange': !isHeroNavDetected}" class="text-gray-900 text-lg font-bold duration-500 cursor-pointer border-b-2 border-double border-transparent hover:border-current" >
                  {{ navLink.text }}
                </NuxtLink>
                <NuxtLink :to="'/kontak-kami'" :class="{'bg-dapurkode-red-900': isHeroNavDetected, 'bg-dapurkode-logo-red': !isHeroNavDetected}" class=" text-white px-7 py-3 font-bold hover:shadow-lg">Hubungi Kami</NuxtLink>
              </div>
            </div>
            <div class="flex md:hidden flex-1 justify-end" v-on:click="tapNav">
              <font-awesome-icon icon="bars" class="w-8 h-8" v-if="isHide"/>
              <font-awesome-icon icon="times" class="w-8 h-8" v-if="!isHide" />
            </div>
          </div>
        </div>
        <div :class="{'hidden':isHide}" class="md:hidden">
          <div class="px-2 pt-2 pb-3 divide-y divide-gray-500 sm:px-3 border-t border-black" @click="isHide = true">
            <NuxtLink v-for="(navLink, key) in navLinks" :key="key" :to="navLink.goTo" :class="{'hover:text-white': isHeroNavDetected, 'hover:text-dapurkode-logo-orange': !isHeroNavDetected}" class="text-gray-900 block px-3 py-2 text-base font-medium">
              <font-awesome-icon icon="angle-right" class="inline mr-2"/> {{ navLink.text }}
            </NuxtLink>
            <NuxtLink :to="'/kontak-kami'" :class="{'hover:text-white': isHeroNavDetected, 'hover:text-dapurkode-logo-orange': !isHeroNavDetected}" class="text-gray-900 block px-3 py-2 text-base font-medium ">
              <font-awesome-icon icon="angle-right" class="inline mr-2"/> Hubungi Kami
            </NuxtLink>
          </div>
        </div>
    </nav>
    </client-only>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isHide: true,
      window: {
        width: 0,
        height: 0
      },
      scrollPosition: 0,
      get heroHeight() {
        if(!process.client) return -99;
        return localStorage.getItem('heroHeaderHeight') || -99;
      },
      get isHeroNavDetected(){
        return this.scrollPosition<this.heroHeight;
      },
      navLinks: [
        {text: 'Home', goTo: '/'},
        {text: 'Portofolio', goTo: '/portfolios'},
        {text: 'Blog', goTo: '/articles'},
      ],
    }
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    tapNav(){
      this.isHide = !this.isHide;
    },

  },

  watch:{

    'window.width': function (val){
      if(val < 768) this.isHide = true;
    },

  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  destroy() {
    window.removeEventListener('scroll', this.updateScroll)
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>

<style scoped>
</style>
