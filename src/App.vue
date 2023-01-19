<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/board">Board</RouterLink>
      </nav>
    </div>
  </header>
  <div></div>
  <div></div>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
header {
  line-height: 1;
  max-height: 50vh;
  width: 30%;
}


nav {
  font-size: 24px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: gray;
}

nav a:first-of-type {
  border: 0;
}

</style>
