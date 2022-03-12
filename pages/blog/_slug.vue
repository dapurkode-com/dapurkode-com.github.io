<template>
  <div>
    <HeaderV2/>
    <div class="h-full w-auto bg-gray-200">
      <div class="container w-full md:w-2/3 mx-auto flex flex-wrap pt-28 md:pt-32 pb-16 px-2 md:px-0">
        <section class="w-full flex flex-col items-center px-3" v-if="article">
          <article class="w-full flex flex-col shadow rounded bg-white" >
            <img
              class="w-full"
              :src="article.image"
              height="509"
            />
            <div class="bg-white flex flex-col justify-start p-5 md:p-10">
              <ul v-if="article.tags" class="flex space-x-3 text-dapurkode-logo-red text-sm font-bold uppercase pb-4">
                <li v-for="tag in article.tags" :key="tag" >
                  {{ tag }}
                </li>
              </ul>
              <h1 class="text-3xl md:text-4xl font-bold font-black font-Didact py-5">{{ article.title }}</h1>
              <p class="text-sm pb-8">
                Oleh <span class="font-semibold hover:text-gray-800">{{ article.author.name }}</span>,
                Di publikasi pada {{ formatDate(article.createdAt) }} </p>
              <div class="relative overflow-hidden mb-8">
                <div class="rounded bg-gray-200 px-3 md:px-10 py-5 w-max">
                  <span class="font-bold font-black uppercase">Daftar Isi</span>
                  <ul class="list-disc list-inside">
                    <li v-for="link of article.toc" :key="link.id">
                      <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>

              <nuxt-content class="prose max-w-none text-justify" :document="article"/>
            </div>
          </article>
          <PartPrevNext2 :prev="prev" :next="next"/>
          <PartAuthor :author="article.author"/>
        </section>
      </div>
    </div>
    <Footer :articles="articles"/>
  </div>
</template>

<script>
import getSiteMeta from "../../utils/getSiteMeta";

export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    const articles = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .limit(4)
      .fetch()

    return {article, prev, next, articles}
  },
  methods: {
    formatDate(date) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'}
      return new Date(date).toLocaleDateString('id', options)
    }
  },
  computed: {
    meta(){
      const metaData = {
        type: "article",
        title: `${this.article.title} | Dapur Kode`,
        url: `${this.$config.baseUrl}/blog/${this.article.slug}`,
        description: this.article.description,
        mainImage: this.article.image,
      };
      return getSiteMeta(metaData);
    }
  },

  head(){
    return {
      title: ` ${this.article.title} | Dapur Kode`,
      meta: [
        ...this.meta
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.$config.baseUrl}/blog/${this.article.slug}`,
        },
      ]
    }
  }
}
</script>

<style>
</style>
