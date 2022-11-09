<template>
  <div class="contacts content-container">
      <Titles :pageTitle="'Get in'" :titleHighlight="'Touch'"/>

      <div class="contact-wrapper d-flex justify-content-between align-items-start mt-5">
        <SocialMedia ref="contactsTarget"/>
        <MessageForm/>
      </div>
  </div>
</template>

<script>
import Titles from '@/components/Titles.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import MessageForm from '@/components/MessageForm.vue'
import { pageObserve } from "@/components/Link";
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
export default {
  components: { Titles, SocialMedia, MessageForm },
    name: 'ContactsPage',
  setup() {
    const contactsTarget = ref(null)

    onMounted(() => {
        pageObserve(contactsTarget, 'contacts-id', 'contacts')
    })

    return {
      contactsTarget
    }
  }
}
</script>

<style>
.contact-wrapper {
  width: 85%;
  margin: auto;
}
@media screen and (max-width: 868px) {
  .contact-wrapper {
    width: 90%;
    flex-direction: column;
    gap: 3rem;
  }
}
</style>