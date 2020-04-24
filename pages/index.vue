<template>
  <section class="section">
    <div class="container">
      <h1>
        {{ title }}
      </h1>
      <div bp="grid" class="index">
        <div bp="6">
          <h2>
            {{ subtitle }}
          </h2>
          <div v-html="$md.render(body)" />
        </div>
        <div bp="6" class="table-col">
          <h2>
            Fake Blog
          </h2>
          <BlogTable />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogTable from '@/pages/blog/index.vue'

export default {
  name: 'HomePage',

  components: {
    BlogTable
  },

  computed: {
    title () {
      return this.$store.state.home.title
    },

    subtitle () {
      return this.$store.state.home.subtitle
    },

    body () {
      return this.$store.state.home.body
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
