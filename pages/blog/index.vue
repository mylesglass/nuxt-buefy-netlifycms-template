<template>
    <section class="section">
    <div class="container">
      <b-table :data="blogPosts" :hoverable="true">
        <template slot-scope="blogPosts">
          <b-table-column field="title" label="Title">
            <nuxt-link :to="'blog/' + blogPosts.row.slug">
              {{ blogPosts.row.title }}
            </nuxt-link>
          </b-table-column>
          <b-table-column field="date" label="Posted On">
            {{ new Date(blogPosts.row.date).toLocaleDateString() }}
          </b-table-column>
        </template>
      </b-table>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    blogPosts () {
      return this.$store.state.blogPosts
    }
  }
}
</script>

<style scoped>
a {
  color: #444444;
}
</style>
