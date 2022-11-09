<template>
  <button class="sidebar-btn" @click="$emit('event')">
      <i class='bx bxs-chevron-right'></i>
  </button>
</template>

<script>
export default {
  name: 'SidebarButton'
}
</script>

<style>
.sidebar-btn {
  position: absolute;
  right: -40%;
  top: 50%;
  border: none;
  outline: none;
  background: #151416ef;
  border-radius: 50%;
  display: flex;
  align-items: center;
  padding: 0.3rem;
  transition: 0.3s ease;
}

@media screen and (max-width: 868px) {
  .sidebar-btn {
    right: -15%;
  }
}

.active > .sidebar-btn {
  right: -5%;
}

.sidebar-btn:hover {
  background: var(--primary-color);
}

.sidebar-btn i {
  font-size: 1.2rem;
  transition: 0.5s ease-in-out;
}

.active > .sidebar-btn > i {
  transform: rotate(-180deg);
}

.sidebar-btn:hover i {
  color: var(--bg-color);
}
</style>