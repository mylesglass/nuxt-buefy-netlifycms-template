<template>
  <div class="blog-table">
    <b-table :data="blogPosts" :hoverable="true">
      <template slot-scope="props">
        <b-table-column field="title" label="Title">
          <nuxt-link :to="'blog/' + props.row.slug">
            {{ props.row.title }}
          </nuxt-link>
        </b-table-column>
        <b-table-column field="date" label="Posted On">
          {{ new Date(props.row.date).toLocaleDateString() }}
        </b-table-column>
      </template>
    </b-table>
  </div>
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

.blog-table {
  border: 1px solid #444444;
}
</style>
