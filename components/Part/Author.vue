<template>
  <div class="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white rounded-md mt-10 mb-10 p-6">
    <div class="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
      <img class="rounded-full shadow h-32 w-32" :src="author.image"/>
    </div>
    <div class="flex-1 flex flex-col justify-center md:justify-start">
      <p class="text-lg text-dapurkode-logo-orange uppercase mb-3">Penulis Artikel</p>
      <p class="font-semibold text-2xl">{{ author.name }}</p>
      <p class="pt-2">{{ author.bio }}</p>
      <div class="flex items-center justify-center md:justify-start text-2xl no-underline text-dapurkode-orange-700 pt-4 gap-x-4">
        <a v-if="author.facebook" :href="author.facebook">
          <font-awesome-icon :icon="['fab', 'facebook']" class="w-5 h-5 inline mr-2"/>
        </a>
        <a v-if="author.instagram" :href="author.instagram">
          <font-awesome-icon :icon="['fab', 'instagram']" class="w-5 h-5 inline mr-2"/>
        </a>
        <a v-if="author.twitter" :href="author.twitter">
          <font-awesome-icon :icon="['fab', 'twitter']" class="w-5 h-5 inline mr-2"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      default: () => null
    },
  }
}
</script>

<style scoped>

</style>
