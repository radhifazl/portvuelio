<template>
    <a href="@/assets/cv.pdf" download="CV Radhif">
        <button class="cv-btn"> Download CV
        </button>
    </a>
</template>

<script>
export default {
    name: 'CvButton'
}
</script>

<style>
.cv-btn {
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    background: var(--primary-color);
    color: var(--bg-color);
    font-weight: 500;
    transition: 0.3s ease;
}

.cv-btn:hover {
    background: var(--white);
}
</style>