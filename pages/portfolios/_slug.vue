<template>
  <div>
    <HeaderV2/>
    <div class="h-full w-auto">
      <div class="container mx-auto max-w-7xl pt-28 md:pt-32 pb-16 px-5 md:px-0" v-if="portfolio">
        <div class="flex flex-wrap flex-col lg:flex-row">
          <div class="w-full lg:w-3/4 px-5 order-1">
            <h2 class="text-3xl md:text-4xl font-Didact font-extrabold lg:text-center text-dapurkode-logo-orange dark:text-white my-5 tracking-wider uppercase">{{portfolio.name}}</h2>
            <h4 v-if="portfolio.subname" class="text-2xl font-bold text-gray-900 dark:text-white mb-5 tracking-wide">{{ portfolio.subname }}</h4>
          </div>
          <div class="w-full lg:w-3/4 px-0 md:px-5 order-3 lg:order-2">
            <img class="h-auto w-full p-5" v-for="(image, key) in images" :src="image" :key="key" :alt="portfolio.slug">
          </div>
          <div class="w-full lg:w-1/4 order-2 lg:order-3 border-l-0 lg:border-l p-5 pb-10">
            <div class="grid grid-cols-1 divide-y">
              <div class="w-full py-5">
                <h4 class="text-xl font-Didact font-extrabold text-gray-900 dark:text-white mb-5 tracking-wider uppercase">
                  Deskripsi Project
                </h4>
                <p class="text-gray-600 text-base text-justify">{{ portfolio.description }}</p>
              </div>
              <div class="w-full grid grid-cols-1 gap-5 py-5">
                <div>
                  <h4 class="text-md font-Didact font-extrabold text-gray-900 uppercase tracking-widest">
                    Waktu Pengerjaan
                  </h4>
                  <p class="text-gray-600 text-base text-justify">{{ portfolio.projectDate }}</p>
                </div>
                <div>
                  <h4 class="text-md font-Didact font-extrabold text-gray-900 uppercase tracking-widest">
                    Klien
                  </h4>
                  <p class="text-gray-600 text-base text-justify">{{ portfolio.client }}</p>
                </div>
                <div>
                  <h4 class="text-md font-Didact font-extrabold text-gray-900 uppercase tracking-widest">
                    Kategori
                  </h4>
                  <p class="text-gray-600 text-base text-justify">{{ portfolio.categories }}</p>
                </div>
              </div>
              <div class="w-full"></div>
            </div>
          </div>
        </div>
        <PartPrevNext :prev="prev" :next="next"/>
      </div>
    </div>
    <Footer :articles="articles"/>
  </div>
</template>

<script>
import getSiteMeta from "../../utils/getSiteMeta";

export default {
  async asyncData({ $content, params }) {
    const slug = params.slug;

    const portfolio = await $content('portfolios', slug).fetch()

    const [prev, next] = await $content('portfolios')
      .only(['name', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(slug)
      .fetch()

    const articles = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .limit(4)
      .fetch()

    return {
      prev, next, portfolio, articles
    }
  },

  computed: {
    images() {
      return this.portfolio !=null ? this.portfolio.images.split(',').map(s => require(`~/assets/images/portfolios/${s.trim()}`)) : []
    },
    meta(){
      const metaData = {
        type: "article",
        title: `Portofolio | ${this.portfolio.name} | Dapur Kode`,
        url: `${this.$config.baseUrl}/portolio/${this.portfolio.slug}`,
        description: this.portfolio.description,
        mainImage: require(`~/assets/images/portfolios/${this.portfolio.featuredImage}`),
      };
      return getSiteMeta(metaData);
    }
  },

  head(){
    return {
      title: `Portofolio | ${this.portfolio.name} | Dapur Kode`,
      meta: [
        ...this.meta
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.$config.baseUrl}/portolio/${this.portfolio.slug}`,
        },
      ]
    }
  }

}
</script>

<style scoped>

</style>
