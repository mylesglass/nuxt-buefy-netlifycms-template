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
          <github-button href="https://github.com/mylesglass" data-size="large" aria-label="Follow @mylesglass on GitHub">Follow @mylesglass</github-button>
          <github-button href="https://github.com/ntkme/github-buttons/generate" data-icon="octicon-repo-template" data-size="large" aria-label="Use this template ntkme/github-buttons on GitHub">Use this template</github-button>
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
import GithubButton from 'vue-github-button'
import BlogTable from '@/pages/blog/index.vue'

export default {
  name: 'HomePage',

  components: {
    BlogTable,
    GithubButton
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
