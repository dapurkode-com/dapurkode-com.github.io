<template>
  <div>
    <Header/>
    <div class="h-full w-auto">
      <HeroHeader/>
      <ProfileCompany1/>
      <Portfolios :portfolios="portfolios"/>
      <Cta/>
      <Testimonials/>
    </div>
    <Footer :articles="articles"/>
  </div>
</template>

<script>
import getSiteMeta from "../utils/getSiteMeta";

export default {
  name: 'index',
  async asyncData({ $content }) {
    const portfolios = await $content('portfolios')
      .only(['name', 'categories', 'featuredImage', 'slug'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()

    const articles = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .limit(4)
      .fetch()

    return {
      portfolios, articles
    }
  },
  computed: {
    meta(){
      const metaData = {
        type: "website",
        title: 'Homepage | Dapur Kode',
        url: `${this.$config.baseUrl}/`,
      };
      return getSiteMeta(metaData);
    }
  },
  head(){
    return {
      title: 'Homepage | Dapur Kode',
      meta: [
        ...this.meta
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://dapurkode.com",
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
