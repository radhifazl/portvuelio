<template>
  <div class="about content-container">
      <Titles :pageTitle="'About'" :title-highlight="'Me'"/>

      <div class="about-content d-flex justify-content-around align-items-center">
        <div class="about-image">
          <img src="@/assets/Profile.png" alt="Profile Photo" class="d-none d-lg-block">
          <img src="@/assets/Profile-Mobile.png" alt="Profile Photo" class="p-mobile d-block d-lg-none">
        </div>

        <div ref="aboutTarget"></div>

        <div class="about-profile">
          <h3 class="pb-3">
            Always eager to learn and practice, I am Junior Front-End Web Developer from Bogor, Indonesia
          </h3>
          <h3>I love listening to music and playing video games.</h3>
        </div>
      </div>

      <div class="line-wrapper">
        <img src="@/assets/H-Line.svg" alt="Line" class="line d-block">
        <img src="@/assets/H-Line.svg" alt="Line" class="line bottom-line">
      </div>
  </div>
</template>

<script>
import Titles from '@/components/Titles.vue'
import { pageObserve } from "@/components/Link";
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
export default {
  components: { Titles },
    name: 'AboutView',
  setup() {
    const aboutTarget = ref(null)

    onMounted(() => {
        pageObserve(aboutTarget, 'about-id', 'about')
    })

    return {
      aboutTarget
    }
  }
}
</script>

<style>
.about {
  position: relative;
}

.line-wrapper {
  position: absolute;
  bottom: 15%;
  right: 5%;
}

.line-wrapper .bottom-line {
  transform: translateX(-3rem) translateY(0.5rem);
}

.about-profile h3 {
  font-weight: 200;
}

.about-profile {
  width: 50%;
}

@media screen and (max-width: 868px) {
  .about-content {
    flex-direction: column;
  }

  .about-image {
    width: 100%;
    margin: 2rem 0;
  }

  .p-mobile {
    width: 90%;
    margin: auto;
  }

  .about-profile {
    width: 100%;
  }
}
</style>