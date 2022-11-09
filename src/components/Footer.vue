<template>
  <footer class="footer w-100">
      <div class="text-center mt-2">
          <h6>Website made by <a href="https://github.com/radhifazl">Radhif Azli</a></h6>
      </div>
  </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style>
.footer {
    background: var(--footer-bg-color);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer .text-center h6 {
    font-weight: 200;
}

.footer .text-center h6 a {
    font-weight: 500;
    color: var(--primary-color);
    transition: 0.3s ease-in-out;
}

.footer .text-center h6 a:hover {
    color: var(--white);
}
</style>