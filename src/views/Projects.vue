<template>
  <div class="projects content-container" >
      <Titles :pageTitle="'My'" :titleHighlight="'Projects'" class="mb-3 pb-3 mb-lg-5 pb-lg-5s"/>
      <div class="project-wrapper" ref="projectsTarget" style="height: fit-content;">
        <Project-card v-for="project in projects" :key="project.name"
          :projectName="project.name"
          :projectDesc="project.desc"
          :image="project.image"
          :projectLink="project.link"
          :projectRepo="project.repo"
          :animationClass="classExtraction(true, project.class)"
        />
      </div>
  </div>
</template>

<script>
import Titles from '@/components/Titles.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { pageObserve } from "@/components/Link";
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
export default {
  components: { Titles, ProjectCard },
  name: 'ProjectsPage',
  setup () {
    const className = ref({})
    const classExtraction = (condition, item) => {
      if(condition == true) return item
    }

    const projects = ref([
        {
          name: 'Whispers',
          desc: 'Inspired from secreto, Whispers is an app to send an anonymous message to your friend',
          repo: 'https://github.com/radhifazl/whispers',
          link: 'https://whisperss.netlify.app/',
          image: {
              backgroundImage: `url(${require('../assets/projects/project1.png')})`,
          },
          class: 'whispers'
        },
        {
          name: 'YAN Invitation',
          desc: 'YAN Invitation is a dynamic landing page, all the contents can be changed in admin page.',
          repo: 'https://github.com/radhifazl/yanlandingpage',
          link: 'https://yaninvitation.web.app/',
          image: {
              backgroundImage: `url(${require('../assets/projects/project2.png')})`,
          },
          class: 'yan'
        },
        {
          name: 'Freegamin',
          desc: 'Freegamin is an app to discover all free to play games, API provided by Freetogame API.',
          repo: 'https://github.com/radhifazl/freegamin',
          link: 'https://freegamin.netlify.app/',
          image: {
              backgroundImage: `url(${require('../assets/projects/project3.png')})`,
          },
          class: 'freegamin'
        },
    ])

    const projectsTarget = ref(null)

    onMounted(() => {
        pageObserve(projectsTarget, 'projects-id', 'projects')
    })

    return {
      projects, classExtraction, className, projectsTarget
    }
  }
}
</script>

<style>
</style>