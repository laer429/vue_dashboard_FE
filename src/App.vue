<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper" id="board">
      <nav>
        <RouterLink to="/">축구 게시판</RouterLink>
        <RouterLink to="/dashboard2">야구 게시판</RouterLink>
        <RouterLink to="/dashboard3">농구 게시판</RouterLink>
      </nav>
    </div>
  </header>
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
  width: 500px;
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
