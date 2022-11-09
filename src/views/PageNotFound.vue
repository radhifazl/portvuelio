<template>
  <div class="not-found">
      <div class="text-center">
        <h1>404 - Page Not Found</h1>
        <h3>Can't find the page that you're looking for, sorry!</h3>
      </div>
  </div>
</template>

<script>
export default {
    name: '404NotFound'
}
</script>

<style>
.not-found {
    height: 100vh;
    background: var(--bg-color);
    display: grid; 
    place-items: center;
}

h3 {
    font-weight: 300;
}
</style>