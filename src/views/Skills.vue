<template>
  <div class="techs content-container">
      <Titles :pageTitle="'Tech &'" :titleHighlight="'Stack'"/>
        <div ref="skillsTarget"></div>
      <div class="tech-wrapper container mt-5">
        <Tech v-for="(skills, i) in skills" :key="i"
          :techName="skills.name" 
          @enter="isHover[i] = true" 
          @leave="isHover[i] = false" 
          :isHovered="classExtraction(isHover[i], skills.className)"
        >
          <i :class="skills.icon"></i>
        </Tech>
      </div>
  </div>
</template>

<script>
import Titles from '@/components/Titles.vue'
import Tech from '@/components/Tech.vue'
import { pageObserve } from "@/components/Link";
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
export default {
  components: { Titles, Tech },
  name: 'SkillsPage',
  data() {
      return {
        isHover: {},
        skills: [
          {
            name: 'HTML',
            icon: 'bx bxl-css3',
            className: 'html'
          },
          {
            name: 'React',
            icon: 'bx bxl-react',
            className: 'react',
          },
          {
            name: 'JavaScript',
            icon: 'bx bxl-javascript',
            className: 'javascript',
          },
          {
            name: 'Vue JS',
            icon: 'bx bxl-vuejs',
            className: 'vuejs',
          },
          {
            name: 'Firebase',
            icon: 'bx bxl-firebase',
            className: 'firebase',
          },
        ]
      }
  },
  methods: {
      classExtraction(condition, item) {
        if(condition == true) return item
      }
  },
  setup() {
    const skillsTarget = ref(null)

    onMounted(() => {
        pageObserve(skillsTarget, 'skills-id', 'skills')
    })

    return {
      skillsTarget
    }
  }
}
</script>

<style scoped>
.techs {
  min-height: 30vh !important;
}
.tech-wrapper {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 868px) {
  .tech-wrapper {
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>