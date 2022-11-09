<template>
  <div class="socialmedias">
      <SocialItem v-for="social in socials" :key="social.name" :icon="social.icon" :link="social.link" :name="social.name"/>
      <CvButton/>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import SocialItem from './SocialItem.vue'
import CvButton from './CvButton.vue'
export default {
  components: { SocialItem, CvButton },
    name: 'SocialMedia',
    setup() {
        const socials = ref([
            {
                icon: require('@/assets/icons/instagram.svg'),
                name: 'difazl',
                link: 'https://www.instagram.com/difazl/'
            },
            {
                icon: require('@/assets/icons/github.svg'),
                name: 'radhifazl',
                link: 'https://github.com/radhifazl'
            },
            {
                icon: require('@/assets/icons/facebook.svg'),
                name: 'Dif',
                link: 'https://web.facebook.com/difzayn/'
            },
            {
                icon: require('@/assets/icons/twitter.svg'),
                name: 'radhiffazli',
                link: 'https://twitter.com/radhiffazli'
            },
        ])

        return {
            socials
        }
    }
}
</script>

<style>
@media screen and (min-width: 992px) {
    .socialmedias {
        width: 80%;
    }
}
</style>