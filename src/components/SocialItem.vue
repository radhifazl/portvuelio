<template>
  <div class="social-item mb-4">
      <a :href="link" class="social-link d-flex align-items-end gap-4" target="_blank">
          <img :src="icon" alt="Facebook Icon" class="social-icon">
          <h3 class="social-name">
              {{ name }}
          </h3>
      </a>
  </div>
</template>

<script>
export default {
    name: 'SocialItem',
    props: ['icon', 'link', 'name']
}
</script>

<style>
.social-item {
    width: fit-content;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
}
.social-item:hover {
    transform: translateX(1rem);
}
.social-link {
    text-decoration: none;
}
.social-link:hover .social-name {
    color: var(--white);
}
.social-name {
    font-weight: 400;
    letter-spacing: 2px;
    color: var(--primary-color);
}
@media screen and (min-width: 992px) {
    .social-name {
        font-size: 1.4rem;
    }
}
</style>