<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'header-prismic',
});
</script>

<template>
  <header class="site-header">
    <nav>
      <ul>
        <li v-for="menuLink in $store.state.menu.menu_links" :key="menuLink.id">
          <prismic-link :field="menuLink.link">
            {{ $prismic.asText(menuLink.label) }}
          </prismic-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 100px 0;
  display: flex;
}

li a,
li a:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px;
  color: #000;
  transition: border-bottom-width 0.1s linear;
  border-bottom: 0 solid #35495e;
}
li a:hover {
  border-bottom-width: 5px;
}
</style>
