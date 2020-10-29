<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const document = (await $prismic.api.getByUID('page', params.uid)).data;
      return {
        document,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
});
</script>

<template>
  <div class="container">
    <div>
      <h1 class="title">{{ $prismic.asText(document.title) }}</h1>
      <p>{{ $prismic.asText(document.body) }}</p>
    </div>
  </div>
</template>
