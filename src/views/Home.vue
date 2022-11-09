<template>
  <div class="home content-container">
    <Transition name="slide-top" appear>
        <div class="line-svg left-top-line">
          <img src="@/assets/Line.svg" class="line higher-line" alt="Line">
          <img src="@/assets/Line.svg" class="line" alt="Line">
        </div>
    </Transition>

    <Transition name="slide-bot" appear>
      <div class="line-svg right-bottom-line">
        <img src="@/assets/Line.svg" class="line higher-line" alt="Line">
        <img src="@/assets/Line.svg" class="line" alt="Line">
      </div>
    </Transition>



    <div class="home-text text-center">
    <div ref="homeTarget"></div>
      <Transition name="fade-down" appear>
        <h1 class="home-name">Hi, I'm <span>Radhif</span></h1>
      </Transition>
      <Transition name="fade" appear>
        <h6 class="home-passion">Front-End Web Developer</h6>
      </Transition>
    </div>
  </div>
</template>

<script>
import { pageObserve } from "@/components/Link";
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
export default {
  name: 'HomeView',
  setup() {
    const homeTarget = ref(null)

    onMounted(() => {
        pageObserve(homeTarget, 'home-id', 'home')
    })

    return {
      homeTarget
    }
  }
}
</script>

<style>
.home {
  overflow: hidden;
  display: grid;
  place-items: center;
  position: relative;
}

.line-svg {
  position: absolute;
  display: flex;
  gap: 1.5rem;
}

.left-top-line {
  top: 10%;
  left: 3%;
}

.right-bottom-line {
  bottom: 5%;
  right: 3%;
}

.higher-line {
  transform: translateY(-2rem);
}

.home-text :is(.home-name, h6) {
  font-weight: 200;
}

.home-text .home-name {
  font-size: 5rem;
}

.home-text .home-name span {
  font-weight: 400;
  color: var(--white);
}

.home-text .home-passion {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.fade-enter-active, 
.fade-down-enter-active,
.slide-top-enter-active,
.slide-bot-enter-active {
  transition: all 1s ease-in-out;
}

.home-passion {
  transition-delay: 1s;
}

.fade-down-enter-from {
  transform: translateY(-3rem);
  opacity: 0;
}

.fade-enter-from {
  opacity: 0;
}

.slide-top-enter-from,
.slide-bot-enter-from {
  opacity: 0;
}

.slide-top-enter-from {
  transform: translateY(-5rem);
}

.slide-bot-enter-from {
  transform: translateY(5rem);
}

@media screen and (max-width: 868px) {
  .home-text .home-name {
    font-size: 3rem;
  }

  .home-text .home-passion {
    font-size: 1rem;
  }

  .line {
    width: 5px;
  }

  .left-top-line {
    left: 8%;
  }

  .right-bottom-line {
    right: 8%;
  }
}
</style>
