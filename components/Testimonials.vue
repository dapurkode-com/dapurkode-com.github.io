<template>
  <section class="min-h-auto w-auto bg-gray-200 flex flex-col justify-center py-10 md:py-24">
    <div class="container mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl px-6 lg:px-8">
      <div class="flex flex-wrap justify-start">
        <div class="relative w-full text-center md:text-left mb-5">
          <h4 class="text-3xl md:text-5xl font-Didact font-extrabold text-gray-900 mb-3 md:mb-1 tracking-wider uppercase">
            <span class="text-dapurkode-logo-orange">Testi</span>moni
          </h4>
          <p class="text-gray-600 leading-normal md:leading-10 tx-base md:text-lg">Apa yang mereka katakan tentang kami</p>
        </div>
      </div>
      <div class="w-full bg-gray-400 rounded-2xl flex flex-col items-stretch md:flex-row gap-6 flex-between items-center px-4 py-14">
        <CollectionsTestimonial v-for="(testimonial, key) in testimonials" :key="key" :testimonial="testimonial"/>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "Testimonials",
  data() {
    return {
      testimonials: [
        {
          text: 'Website saya menjadi lebih modern dan lebih menarik peminat.',
          author: {
            name: 'Bapak Dipta Negara',
            subname: 'Pemilik D\'Modern',
            img: 'dmodern.png'
          }
        },
        {
          text: 'Pengerjaan aplikasi sesuai target yang sudah ditentukan. Sangat memuaskan !',
          author: {
            name: 'Ibu Sumiarsih',
            subname: 'Pemilik Toko Bizmart',
            img: 'bizmart.png'
          }
        },
        {
          text: 'Programmernya mengerti apa yang konsumen inginkan. Pengerjaannya juga cepat.',
          author: {
            name: 'Ibu Eka',
            subname: 'Manajer Hotel Rama Shinta',
            img: 'rama-shinta.png'
          }
        }]
    }
  }
}
</script>

<style scoped>

</style>
