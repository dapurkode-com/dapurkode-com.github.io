<template>
    <div
      class="bg-gradient-to-b from-dapurkode-logo-orange to-dapurkode-logo-red w-full md:w-1/3 shadow-lg mx-auto min-h-full rounded-xl p-4 flex flex-col justify-between">
      <p class="text-white">
        <span class="font-bold text-dapurkode-yellow-300 text-lg">“</span>
        {{ testimonial.text }}
        <span class="font-bold text-dapurkode-yellow-300 text-lg">”</span>
      </p>
      <div class="flex items-end mt-4">
        <a class="block relative" href="#">
          <img alt="profil" class="mx-auto object-cover h-10 w-auto "
               :src="require(`~/assets/images/client/${testimonial.author.img}`)"/>
        </a>
        <div class="flex flex-col ml-2 justify-between">
            <span class="font-semibold text-dapurkode-orange-100 text-sm">
            {{ testimonial.author.name }}
            </span>
          <span class="text-white text-xs flex items-center">
            {{ testimonial.author.subname }}
            </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Testimonial",
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
