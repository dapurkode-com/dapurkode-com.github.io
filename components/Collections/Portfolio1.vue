<template>
  <div class="relative w-full md:w-1/2 lg:my-4 xl:px-4 xl:w-1/3 p-3">
    <NuxtLink :to="{ name: 'portfolios-slug', params: { slug: portfolio.slug } }">
      <div class="bg-white shadow-md w-full p-5 rounded-3xl">
        <div class="overflow-x-hidden relative">
          <img class="h-56 w-full object-cover border" :src="getFeaturedImage()">
        </div>
        <div class="mt-4 pl-2 mb-2 flex">
          <div>
            <p class="text-lg font-semibold text-gray-900 mb-0">{{ portfolio.name }}</p>
            <p class="text-md text-gray-800 mt-0">{{ portfolio.categories }}</p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Portfolio1",
  props: {
    portfolio: {
      type: Object,
      required: true
    }
  },
  methods: {
    getFeaturedImage() {
      try{
        return require(`~/assets/images/portfolios/${this.portfolio.featuredImage}`);
      } catch (err){
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>
