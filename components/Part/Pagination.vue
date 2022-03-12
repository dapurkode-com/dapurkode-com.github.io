<template>
  <section id="prev-next" class="flex justify-center mt-4 space-x-2">
    <nuxt-link v-if="prevPage" :to="prevLink" class="py-2 px-4 bg-white text-gray-700 border border-gray-200 font-medium rounded hover:bg-dapurkode-logo-orange border">Sebelumnya</nuxt-link>
    <nuxt-link v-if="nextPage" :to="`${urlPrefix}/page/${pageNo + 1}`" class="py-2 px-4 bg-white text-gray-700 border border-gray-200 font-medium rounded hover:bg-dapurkode-logo-orange border">Selanjutnya </nuxt-link>
  </section>
</template>

<script>
export default {
  props: ['prevPage', 'nextPage', 'pageNo', 'urlPrefix'],
  computed: {
    prevLink() {
      return this.pageNo === 2 ? this.urlPrefix : `${this.urlPrefix}/page/${this.pageNo - 1}`
    }
  }
}
</script>

<style scoped>

</style>
