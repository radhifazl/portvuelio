<template>
  <div id="sidebar" class="sidebar" :class="{active: condition}">
      <ul id="sidebar-list">
          <li class="sidebar-item" v-for="(link, i) in links" :key="link.name" @click="linkAction(i)">
              <a :href="link.path" class="sidebar-link" :class="{linkActive: isLinkActive[i]}" :id="link.id">{{ link.name }}</a>
          </li>
      </ul>
      <SidebarButton @event="$emit('open')"/>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import SidebarButton from './SidebarButton.vue'
import { onMounted } from '@vue/runtime-core'
export default {
  components: { SidebarButton },
    name: 'SidebarComponent',
    props: [
        'condition'
    ],
    setup() {
        const links = ref([
            {
                id: 'home-id',
                name: 'Home',
                path: '/#home'
            },
            {
                id: 'about-id',
                name: 'About',
                path: '/#about'
            },
            {
                id: 'skills-id',
                name: 'Skills',
                path: '/#skills'
            },
            {
                id: 'projects-id',
                name: 'Projects',
                path: '/#projects'
            },
            {
                id: 'contacts-id',
                name: 'Contacts',
                path: '/#contacts'
            },
        ])

        const isLinkActive = ref({})

        const linkAction = () => {
            const navLinks = document.querySelectorAll('.sidebar-link')
            navLinks.forEach(n => n.addEventListener('click', () => {
                navLinks.forEach(n => n.classList.remove('link-active'))
                n.classList.add('link-active')
            }))
        }

        onMounted(() => {
            linkAction()
        })

        return {
            links, linkAction, isLinkActive
        }
    }
}
</script>

<style>
.sidebar {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: -15%;
    height: 100vh;
    max-height: 100vh;
    background: #15141600;
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    padding: 1rem;
    padding-right: 5rem;
    z-index: 1000;
    transition: 0.3s ease-in-out;
}

.sidebar.active {
    left: 0;
    background: #15141679;
}

@media screen and (max-width: 868px) {
    .sidebar {
        left: -95%;
        width: 90%;
    }
}

#sidebar-list {
    list-style : none;
    padding-left: 0.3rem;
}

.sidebar-item {
    margin-bottom: 3rem;
}

.sidebar-link {
    color: var(--primary-color);
    transition: 0.3s ease;
}

.sidebar-link:hover {
    color: var(--white);
}
.link-active {
    position: relative;
    color: var(--white);
    padding-left: 1rem;
}
.link-active::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #fff;
}
</style>