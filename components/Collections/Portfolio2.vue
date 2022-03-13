<template>
  <div class="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto border">
    <NuxtLink class="w-full block h-full" :to="{ name: 'portfolios-slug', params: { slug: portfolio.slug } }">
      <img alt="blog photo" :src="getFeaturedImage()" class="max-h-40 w-full object-cover border"/>
      <div class="bg-white w-full p-4">
        <p class="text-dapurkode-logo-red text-sm">
          {{ portfolio.categories }}
        </p>
        <p class="text-gray-800 text-xl font-medium mb-2">
          {{ portfolio.name }}
        </p>
        <p class="text-gray-400 font-light text-md truncate">
          {{ portfolio.description }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Portfolio2",
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
