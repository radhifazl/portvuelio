<template>
  <Sidebar :condition="isActive" @open="openSidebar"/>
  <div class="contents-wrapper" @click="closeSidebarOutside">
    <Home-view id="home"/>
    <About id="about"/>
    <Skills id="skills"/>
    <Projects id="projects"/>
    <Contacts id="contacts"/>
  </div>
  <Footer/>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import About from './About.vue'
import Contacts from './Contacts.vue'
import HomeView from './Home.vue'
import Projects from './Projects.vue'
import Skills from './Skills.vue'
import { ref } from "vue";
import Footer from '@/components/Footer.vue'
export default {
  components: { HomeView, About, Skills, Projects, Contacts, Sidebar, Footer },
    name: 'AllContents',
    setup() {
      const isActive = ref(false)
      const openSidebar = () => {
          !isActive.value ? isActive.value = true : isActive.value = false
      }

      const closeSidebarOutside = () => {
        isActive.value = false
      }

      return {
        isActive, openSidebar, closeSidebarOutside
      }
    }
}
</script>

<style>
</style>