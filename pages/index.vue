<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle('homepage')).data;
      return {
        document,
      };
    } catch (e) {
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
