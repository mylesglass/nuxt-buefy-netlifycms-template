<template>
  <section class="section">
    <div class="container">
      <h1>
        {{ blogPost.title }}
      </h1>
      <h3>
        {{ new Date(blogPost.date).toLocaleDateString() }}
      </h3>
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
