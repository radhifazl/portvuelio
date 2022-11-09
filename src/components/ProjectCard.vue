<template>
  <div class="project-card d-flex container align-items-center">
      <div class="project-img" :style="image" :class="animationClass"></div>
      <div class="project-detail">
          <div class="project-title w-100 d-flex justify-content-between align-items-center">
              <h2>{{ projectName }}</h2>
              <a :href="projectRepo" class="git-link" target="_blank">
                  <i class="bx bxl-github"></i>
              </a>
          </div>

          <div class="project-desc mt-3 mb-4">
              <h4>
                  {{projectDesc}}
              </h4>
          </div>

          <div class="project-link">
              <a :href="projectLink" target="_blank">
                  <i class='bx-fw bx bx-chevrons-right'></i> Visit Link
              </a>
          </div>
      </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    name: 'ProjectCard',
    props: [
        'image', 'projectName', 'projectRepo',
        'projectDesc', 'projectLink', 'animationClass'
    ],
}
</script>

<style>

.project-card {
    height: 100%;
    gap: 3rem;
}
.project-img {
    width: 40%;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    height: 500px;
}
.project-detail {
    width: 60%;
}
.project-desc {
    width: 95%;
}
.project-link a {
    color: var(--primary-color);
    text-decoration: none;
    transition: 0.3s ease;
}
.project-link a:hover {
    color: var(--white);
}
.project-link a i {
    font-size: 1.4rem;
}
.git-link i {
    font-size: 2.5rem;
    color: var(--primary-color);
    transition: 0.3s ease;
}
.git-link:hover i {
    color: var(--white);
}
.project-desc h4 {
    font-weight: 200;
}
.whispers {
    animation: slideshow1 10s linear infinite;
}
.yan {
    animation: slideshow2 10s linear infinite;
}
.freegamin {
    animation: slideshow3 10s linear infinite;
}

@keyframes slideshow1 {
    0%, 100% {
        background: url('@/assets/projects/project1.png');
        background-repeat: no-repeat;
    }
    50% {
        background: url('@/assets/projects/project 1b.png');
        background-repeat: no-repeat;
    }
    75% {
        background: url('@/assets/projects/project 1c.png');
        background-repeat: no-repeat;
    }
}

@keyframes slideshow2 {
    0%, 100% {
        background: url('@/assets/projects/project2.png');
        background-repeat: no-repeat;
    }
    50% {
        background: url('@/assets/projects/project2b.png');
        background-repeat: no-repeat;
    }
    75% {
        background: url('@/assets/projects/project2c.png');
        background-repeat: no-repeat;
    }
}

@keyframes slideshow3 {
    0%, 100% {
        background: url('@/assets/projects/project3.png');
        background-repeat: no-repeat;
    }
    50% {
        background: url('@/assets/projects/project3.png');
        background-repeat: no-repeat;
    }
    75% {
        background: url('@/assets/projects/project3.png');
        background-repeat: no-repeat;
    }
}
@media screen and (max-width: 868px) {
    .project-card {
        flex-direction: column;
        margin-bottom: 5rem;
    }
    .project-card:last-child {
        margin-bottom: 0;
    }
    .project-img, .project-detail {
        width: 100%;
    }
    .project-img {
        height: 300px;
    }
}
</style>