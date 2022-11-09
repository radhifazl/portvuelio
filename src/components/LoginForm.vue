<template>
  <form id="form" class="w-50 mt-3 mx-auto" @submit.prevent="login">
      <div class="box box-email mb-4">
          <label for="email">Email</label>
          <input type="email" 
            class="inp inp-email mt-3" 
            :class="{error: error}" 
            @keyup="checkError"
            id="email" v-model="email"
            placeholder="Type your email here..."
          >
      </div>
      <div class="box box-pass mb-4">
          <label for="pass">Password</label>
          <input type="password" 
            class="inp inp-pass mt-3" 
            :class="{error: error}" 
            @keyup="checkError"
            id="pass"  v-model="password"
            placeholder="Type your password here..."
          >
      </div>
      
      <LoginButton :isDisabled="error" :status="isNotLoggingIn"/>
  </form>
</template>

<script>
import { signInWithEmailAndPassword } from '@firebase/auth'
import LoginButton from './LoginButton.vue'
import { ref } from '@vue/reactivity'
import { auth } from '@/firebase'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
export default {
  components: { LoginButton },
  name: 'LoginForm',
  setup() {
      const error = ref(false)
      const isNotLoggingIn = ref(true)
      const router = useRouter()

      const email = ref(''),
            password = ref('')


      const checkError = () => {
          if(email.value != '' || password.value != '') error.value = false
      }

      const login = async () => {
          if(!email.value || !password.value) {
              error.value = true
          } else {
              isNotLoggingIn.value = false
              signInWithEmailAndPassword(auth, email.value, password.value)
                .then((cred) => {
                    isNotLoggingIn.value = true
                    router.push('/messages')
                    const user = cred.user
                    sessionStorage.setItem("login", "isLoggedIn")
                    Swal.mixin({
                        titleText: 'Login success',
                        text: `Welcome to admin page`,
                        showCloseButton: true,
                        showConfirmButton: false,
                        timerProgressBar: true,
                        timer: 3000,
                    })
                }).catch((err) => {
                    isNotLoggingIn.value = true
                    switch(err.code) {
                        case 'auth/user-not-found':
                            Swal.fire({
                                icon: 'error',
                                title: 'You have entered an invalid username or password',
                            })
                            break;
                        case 'auth/wrong-password':
                            Swal.fire({
                                icon: 'error',
                                title: 'You have entered an invalid username or password',
                            })
                            break;
                        default:
                            Swal.fire({
                                icon: 'error',
                                title: 'Something went wrong',
                            })
                    }
                })
          }
      }

      return {
          isNotLoggingIn, error, email, password, login, checkError
      }
  }
}
</script>

<style>
.inp.error {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    border-color: rgb(235, 82, 82);
    background: rgb(243, 134, 134);
}

.inp.error::placeholder {
    color: var(--bg-color);
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>