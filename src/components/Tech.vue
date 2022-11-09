<template>
  <div class="tech text-center" @mouseenter="$emit('enter')" @mouseleave="$emit('leave')" :class="isHovered">
      <div class="icon">
          <slot/>
      </div>

      <div class="text">
          <p>
              {{ techName }}
          </p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TechComponent',
    props: ['techName', 'isHovered']
}
</script>

<style>
.tech {
    width: fit-content;
}
.icon i {
    font-size: 8rem;
    transition: all 0.3s ease;
    color: var(--primary-color);
}
.text p {
    transform: translateY(-5rem);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    font-size: 1.2rem;
}
.tech:hover > .text p {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
}

:is(.html, .react, .javascript, .vuejs, .firebase) .icon i {
    transform: translateY(-0.5rem);
}

.html .icon i {
    color: #ff5100;
}

.react .icon i {
    color: #2965f1;
}

.javascript .icon i{
    color: #f0db4f;
}

.vuejs .icon i{
    color: #41B883;
}

.firebase .icon i{
    color: #FFA611;
}
</style>