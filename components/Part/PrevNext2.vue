<template>
  <div class="w-full flex pt-6 gap-10">
    <div class="w-1/2 hidden md:inline" v-if="!prev"></div>
    <NuxtLink v-if="prev" class="block w-full md:w-1/2 bg-white shadow hover:shadow-md text-left p-6 rounded" :to="prev.slug">
      <p class="text-lg text-dapurkode-logo-orange font-bold flex items-center"><font-awesome-icon icon="arrow-left" class="w-5 h-5 inline mr-2"/> Sebelumnya
      </p>
      <p class="pt-2">{{ prev.title }}</p>
    </NuxtLink>
    <NuxtLink v-if="next" class="block w-full md:w-1/2 bg-white shadow hover:shadow-md text-right p-6 rounded" :to="next.slug">
      <p class="text-lg text-dapurkode-logo-orange font-bold flex items-center justify-end">Selanjutnya <font-awesome-icon icon="arrow-right" class="w-5 h-5 inline ml-2"/></p>
      <p class="pt-2">{{ next.title }}</p>
    </NuxtLink>
    <div class="w-1/2 hidden md:inline" v-if="!prev"></div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style scoped>

</style>
