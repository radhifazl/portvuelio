import { createRouter, createWebHistory } from 'vue-router'
import Contents from '@/views/Contents'
import PageNotFound from '@/views/PageNotFound'
import LoginPage from "@/views/Login/Login";
import MessagePage from "@/views/Login/MessagePage";
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const routes = [
  {
    path: '/',
    name: 'Contents',
    component: Contents
  },
  {
    path: '/login',
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: '/messages',
    name: "MessagePage",
    component: MessagePage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const loginStatus = sessionStorage.getItem('login')

  if(to.path === '/login') {
    if(await getCurrentUser() && loginStatus) {
      next('/messages')
      return
    } 
  }

  requiresAuth && !loginStatus && !await getCurrentUser() ? next('/login') : next()
})

export default router
