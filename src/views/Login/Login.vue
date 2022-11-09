<template>
  <div class="login-page content-container">
      <Titles :pageTitle="'Login'"/>
      <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import Titles from '@/components/Titles.vue'
export default {
  components: { LoginForm, Titles },
    name: 'LoginPage'
}
</script>

<style>
</style>