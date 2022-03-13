<template>
  <div>
    <HeaderV2/>
    <div class="h-full w-auto bg-gray-200">
      <div class="container mx-auto flex flex-wrap pt-20 pb-16 px-5">
        <section class="w-full md:w-2/3 mx-auto flex flex-col items-center px-3">
          <nuxt-link v-if="articles" v-for="(article, index) in articles" :key="index" class="flex flex-col shadow my-4" :to="'/articles/' + article.slug">
            <img
              class="w-full"
              :src="article.image"
              height="509"
            />
            <div class="bg-white flex flex-col justify-start p-6">
              <ul v-if="article.tags" class="flex space-x-3 text-dapurkode-logo-red text-sm font-bold uppercase pb-4">
                <li v-for="tag in article.tags" :key="tag" >
                  {{ tag }}
                </li>
              </ul>
              <h1 class="text-3xl font-bold hover:text-gray-700 pb-4">{{ article.title }}</h1>
              <p class="text-sm pb-3">
                Oleh <span class="font-semibold hover:text-gray-800">{{ article.author.name }}</span>,
                Di publikasi pada {{ formatDate(article.createdAt) }}
              </p>
              <p class="pb-6">{{ article.description }}</p>
            </div>
          </nuxt-link>
          <!-- Pagination -->
          <PartPagination :prevPage="pageNo > 1" :nextPage="nextPage" :pageNo="pageNo" urlPrefix="/articles"></PartPagination>
        </section>
      </div>
    </div>
    <Footer :articles="footerArticles"/>
  </div>
</template>

<script>
import getSiteMeta from "../../../utils/getSiteMeta";

export default {
  methods: {
    formatDate(date) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'}
      return new Date(date).toLocaleDateString('id', options)
    }
  },
  async asyncData({ $content, params }) {
    const pageNo = parseInt(params.number)
    const tenArticles = await $content('articles')
      .only(['title', 'description', 'image', 'slug', 'tags', 'createdAt', 'author'])
      .sortBy('createdAt', 'desc')
      .limit(4)
      .skip(3 * (pageNo - 1))
      .fetch()

    const nextPage = tenArticles.length === 4
    const articles = nextPage ? tenArticles.slice(0, -1) : tenArticles

    const footerArticles = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .limit(4)
      .fetch()

    return {pageNo, nextPage, articles, footerArticles}
  },

  computed: {
    meta(){
      const metaData = {
        type: "website",
        title: 'Blog | Dapur Kode',
        description: 'Artikel dari para chef Kami.',
        url: `${this.$config.baseUrl}/blog/${this.pageNo}`,
      };
      return getSiteMeta(metaData);
    }
  },

  head(){
    return {
      title: 'Blog | Dapur Kode ',
      meta: [
        ...this.meta
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://dapurkode.com/blog",
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
