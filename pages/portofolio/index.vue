<template>
  <div>
    <HeaderV2/>
    <div class="h-full w-auto bg-gray-50">
    <div class="container mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl pt-28 md:pt-32 pb-16 px-2 md:px-0">
      <div class="header flex items-end justify-between mb-12 flex-col lg:flex-row gap-10">
        <div class="w-full md:w-max">
          <h4 class="text-4xl font-Didact font-extrabold text-gray-900 mb-4 tracking-widest uppercase">
            <span class="text-dapurkode-logo-orange">Porto</span>folio
          </h4>
          <p class="text-2xl font-light text-gray-400">
            Project yang pernah Kami kerjakan.
          </p>
        </div>
        <div class="w-full md:w-max">
          <form class="flex flex-col md:flex-row w-3/4 w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <div class=" relative ">
              <input v-model="searchQuery" type="text" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-dapurkode-logo-orange focus:border-transparent" placeholder="Enter a title"/>
            </div>
          </form>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        <CollectionsPortfolio2 v-for="(portfolio, index) in paginatedOrders" :portfolio="portfolio" :key="portfolio.slug"/>
      </div>
      <div class="flex justify-center">
        <button class="border border-gray-500 text-gray-500 font-bold px-3 py-1 m-5 hover:shadow-md my-10" @click="loadMore" v-if="currentPage * maxPerPage < portfolios.length">
          Muat lebih banyak
        </button>
      </div>
    </div>
  </div>
    <Footer :articles="articles"/>
  </div>
</template>

<script>
import getSiteMeta from "../../utils/getSiteMeta";

export default {
  data(){
    return {
      searchQuery: null,
      currentPage: 1,
      maxPerPage: 6,
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      this.currentPage = 1
      this.searchQuery = searchQuery
    }
  },
  async asyncData({ $content }) {
    const portfolios = await $content('portfolios')
      .only(['name', 'categories', 'featuredImage', 'slug', 'description'])
      .sortBy('createdAt', 'desc')
      .fetch()

    const articles = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .limit(4)
      .fetch()

    return {portfolios, articles}
  },
  computed: {
    filteredList(){
      return this.portfolios.filter((item) => {
        if(this.searchQuery == null || this.searchQuery === '') return true;
        return this.searchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v));
      })
    },
    paginatedOrders() {
      return this.filteredList.slice(0, this.currentPage * this.maxPerPage);
    },
    meta(){
      const metaData = {
        type: "website",
        title: 'Portofolio | Dapur Kode',
        description: 'Berikut adalah beberapa project yang pernah kami kerjakan.',
        url: `${this.$config.baseUrl}/kontak-kami/`,
      };
      return getSiteMeta(metaData);
    }
  },
  methods: {
    loadMore() {
      this.currentPage += 1
    }
  },
  head(){
    return {
      title: 'Portofolio | Dapur Kode ',
      meta: [
        ...this.meta
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://dapurkode.com/portofolio",
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
