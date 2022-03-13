<template>
  <div>
    <client-only>
      <nav ref="navBar"
           class="fixed inset-x-0 top-0 z-10 justify-between w-full duration-500 px-3 bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-center justify-between h-16 md:h-20">
            <NuxtLink to="/">
              <a class="flex-shrink-0">
                <img alt="Workflow" class="h-10 md:h-14 w-auto" src="~/assets/images/logo.png"/>
              </a>
            </NuxtLink>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-10">
                <NuxtLink v-for="(navLink, key) in navLinks" :key="key" :to="navLink.goTo"
                          class=" hover:text-dapurkode-logo-orange text-gray-900 text-lg font-bold duration-500 cursor-pointer border-b-2 border-double border-transparent hover:border-current">
                  {{ navLink.text }}
                </NuxtLink>
                <NuxtLink :to="'/kontak-kami'"
                          class="bg-dapurkode-logo-red text-white px-7 py-3 font-bold hover:shadow-lg">
                  Hubungi Kami
                </NuxtLink>
              </div>
            </div>
            <div class="flex md:hidden flex-1 justify-end" v-on:click="tapNav">
              <font-awesome-icon v-if="isHide" class="w-8 h-8" icon="bars"/>
              <font-awesome-icon v-if="!isHide" class="w-8 h-8" icon="times"/>
            </div>
          </div>
        </div>
        <div :class="{'hidden':isHide}" class="md:hidden">
          <div class="px-2 pt-2 pb-3 divide-y divide-gray-500 sm:px-3 border-t border-black" @click="isHide = true">
            <NuxtLink v-for="(navLink, key) in navLinks" :key="key"
                      :to="navLink.goTo"
                      class="text-gray-900 block px-3 py-2 text-base font-medium hover:text-dapurkode-logo-orange">
              <font-awesome-icon class="inline mr-2" icon="angle-right"/>
              {{ navLink.text }}
            </NuxtLink>
            <NuxtLink
              :to="'/kontak-kami'"
              class="text-gray-900 block px-3 py-2 text-base font-medium hover:text-dapurkode-logo-orange">
              <font-awesome-icon class="inline mr-2" icon="angle-right"/>
              Hubungi Kami
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
      navLinks: [
        {text: 'Home', goTo: '/'},
        {text: 'Portofolio', goTo: '/portfolios'},
        {text: 'Blog', goTo: '/articles'},
      ],
    }
  },

  methods: {
    tapNav() {
      this.isHide = !this.isHide;
    },
  },

}
</script>

<style scoped>
</style>
