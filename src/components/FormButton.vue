<template>
  <button type="submit" class="msg-btn">
       <span v-if="status">Sending message...</span> <span v-else>Send Message</span>
  </button>
</template>

<script>
export default {
    name: 'FormButton',
    props: ['status']
}
</script>

<style>
.msg-btn {
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    border: 2px solid #888;
    background: transparent;
    transition: 0.3s ease;
}

.msg-btn span {
    color: #888;
    font-weight: 500;
}

.msg-btn:hover {
    background: var(--primary-color);
    color: var(--bg-color);
}

.msg-btn:hover span {
    color: var(--bg-color);
}
</style>