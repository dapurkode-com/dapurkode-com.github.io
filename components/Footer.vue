<template>
  <footer class="block">
    <div class="w-auto bg-gray-100 text-gray-700 min-h-full">
      <div class="py-16 max-w-7xl mx-auto px-8">
        <div class="container mx-auto">
          <div class="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-5">
            <div class="md:mx-8">
              <img alt="Workflow" class="h-14 w-auto" src="~/assets/images/logo.png"/>
              <div class="my-4"><p class="text-justify">
                Dapurkode adalah sebuah agensi freelancer dari Bali, yang bergerak di bidang pengembangan perangkat
                lunak. Terdiri dari para pengembang profesional, kami siap memberikan solusi digital terbaik untuk Anda.
              </p> </div>
              <span class="block my-2"><font-awesome-icon icon="map-marker-alt" class="inline w-5 h-5 mr-2"/>Jalan Toya Anakan III No. 45, LC 8 <br>Singaraja - Bali</span>
              <span class="block my-2"><font-awesome-icon icon="envelope" class="inline w-5 h-5 mr-2"/><a href="mailto:dapurkode.idn@gmail.com">dapurkode.idn@gmail.com</a></span>
            </div>
            <div class="md:mx-8">
              <h3 class="font-bold text-xl my-2 uppercase">Artikel</h3>
              <div class="rounded bg-gray-50 shadow w-full">
                <ul class="divide-y-2 divide-gray-200 list-disc  list-inside">
                  <li class="p-2 hover:bg-dapurkode-orange-500 hover:text-white duration-500" v-if="articles" v-for="(article, index) in articles" :key="index">
                    <nuxt-link :to="'/articles/'+article.slug">{{article.title}}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-auto bg-white text-gray-500 min-h-full">
      <div class="pt-6 pb-6 max-w-7xl mx-auto px-8">
        <div class="flex flex-col md:flex-row md:justify-center md:justify-between gap-2">
          <div class="text-center md:text-left md:mx-8">
            <a title="Facebook Dapur Kode" class="hover:text-dapurkode-orange-500 duration-500" href="https://www.facebook.com/dapurkode.idn"><font-awesome-icon :icon="['fab','facebook-square']" class="w-5 h-5 inline mr-2"/></a>
            <a title="Instagram Dapur Kode" class="hover:text-dapurkode-orange-500 duration-500" href="https://instagram.com/dapurkode.idn"><font-awesome-icon :icon="['fab','instagram']" class="w-5 h-5 inline mr-2"/></a>
          </div>
          <div class="text-center md:text-left md:mx-8">
            <p class=" text-sm">
              Copyright &copy; {{currentYear}} DapurKode.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    articles: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      currentYear: new Date().getFullYear(), // 2020
    };
  },
}
</script>

<style scoped>

</style>
