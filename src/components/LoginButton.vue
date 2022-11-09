<template>
  <button class="btn-login" type="submit" :disabled="isDisabled" v-if="status">
      <span v-if="isDisabled">All fields are required to login</span> <span v-else>Login</span>
  </button>
  <button class="btn-login" type="submit" v-else>
      Logging in, please wait...
  </button>
</template>

<script>
export default {
    name: 'LoginButton',
    props: [
        'isDisabled', 'status'
    ]
}
</script>

<style>
.btn-login {
    border: none;
    outline: none;
    background: var(--darker-primary-color);
    padding: 0.5rem 1rem;
    color: var(--bg-color);
    width: 100%;
    transition: 0.3s ease-in-out;
    font-weight: 500;
}

.btn-login span {
    color: var(--bg-color);
}

.btn-login:hover {
    background: var(--primary-color);
}

.btn-login:disabled {
    cursor: not-allowed;
    background: var(--disabled);
}
</style>