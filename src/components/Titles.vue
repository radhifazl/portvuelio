<template>
  <div class="page-title text-center">
      <h1>
          {{ pageTitle }} <span>{{ titleHighlight }}</span>
      </h1>
  </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: {
        pageTitle: String,
        titleHighlight: String
    }
}
</script>

<style scoped>
.page-title h1 {
    font-size: 2.7rem;
    font-weight: 200;
}

.page-title h1 span {
    font-weight: 400;
    color: var(--white);
}
</style>