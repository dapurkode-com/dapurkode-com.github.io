<template>
    <section class="min-h-auto w-auto bg-gray-200 flex flex-col justify-center py-10 md:py-24">
      <div class="container mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl px-6 lg:px-8">
        <div class="flex flex-wrap justify-start">
          <div class="relative w-full text-center md:text-left mb-5">
            <h4 class="text-3xl md:text-5xl font-Didact font-extrabold text-gray-900 mb-3 md:mb-1 tracking-wider uppercase">
              <span class="text-dapurkode-logo-orange">Porto</span>folio
            </h4>
            <p class="text-gray-600 leading-normal md:leading-10 tx-base md:text-lg">Beberapa project yang telah kami kerjakan</p>
          </div>
        </div>
        <div class="flex flex-wrap justify-center">
          <CollectionsPortfolio1 v-for="portfolio in portfolios" :portfolio="portfolio" :key="portfolio.slug"/>
        </div>
        <div class="flex flex-wrap justify-center">
          <NuxtLink to="/portfolios" class="border border-gray-500 text-gray-500 font-bold px-3 py-1 m-5 hover:shadow-md">
            Lihat lebih banyak
          </NuxtLink>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  name: "Portfolios",
  props: {
    portfolios: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
