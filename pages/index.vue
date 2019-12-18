<template>
  <section class="section">
    <div class="container">
      <p class="heading-1">
        {{ title }}
      </p>
      <p class="heading-2">
        {{ subtitle }}
      </p>
      <!--<div v-html="$md.render(body)" />-->
      <nuxt-link class="button" to="blog">
        Blog
      </nuxt-link>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomePage',

  components: {
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
  },

  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
