<template>
  <section class="section">
    <div class="container">
      <p class="heading-1">
        {{ blogPost.title }}
      </p>
      <p>
        {{ new Date(blogPost.date).toUTCString() }}
      </p>
      <div v-html="$md.render(blogPost.body)" />
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ params, payload }) {
    if (payload) {
      return {
        blogPost: payload
      }
    } else {
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      }
    }
  }
}
</script>

<style>
</style>
