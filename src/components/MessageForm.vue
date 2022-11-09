<template>
  <div class="form-wrapper w-100" @submit.prevent="sendMessage">
      <form id="message-form">
          <div class="box box-name">
              <input 
                type="text" 
                class="inp inp-name" 
                placeholder="Name" 
                name="name" 
                v-model="form.name"
                autocomplete="off"
              >
          </div>
          <div class="box box-email">
              <input 
                type="email" 
                class="inp inp-email" 
                placeholder="Email" 
                name="email" 
                v-model="form.email"
                autocomplete="off"
              >
          </div>
          <div class="box box-msg">
              <textarea name="message" class="inp inp-msg" placeholder="Write me a message" v-model="form.message"></textarea>
          </div>

          <div class="box box-btn">
              <FormButton :status="isSending"/>
          </div>
      </form>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import Swal from 'sweetalert2'
import FormButton from './FormButton.vue'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { db } from '@/firebase'
export default {
  components: { FormButton },
    name: 'MessageForm',
    setup() {
        const form = reactive({
            name: '',
            email: '',
            message: ''
        })

        const isSending = ref(false)

        const getDate = (date) => {
            function padTo2Digits(num) {
                return num.toString().padStart(2, '0')
            }

            const ddmmyyy = padTo2Digits(date.getDate()) + '/' + padTo2Digits(date.getMonth()+1) + '/' + date.getFullYear()
            const now = ddmmyyy 
            return now
        }

        const sendMessage = async () => {
            if(!form.name || !form.email || !form.message) {
                Swal.fire({
                    icon: 'error',
                    text: 'All fields are required! Please fill all the input fields!',
                    title: 'Invalid Form',
                    background: '#1A191D',
                    confirmButtonText: 'Okay',
                    color: '#D1D1D1'
                })
            } else {
                isSending.value = true
                await addDoc(collection(db, "messages"), {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    createdAt: serverTimestamp(),
                    date: getDate(new Date())
                }).then(() => {
                    isSending.value = false
                    Swal.fire({
                        icon: 'success',
                        titleText: 'Message Sent',
                        text: 'Message has been sent, i will reply to your email in 24 hours!',
                        confirmButtonText: 'Okay',
                        background: '#1A191D',
                    })
                }).catch((err) => {
                    isSending.value = false
                    Swal.fire({
                        icon: 'error',
                        titleText: 'Message Failed to Send',
                        text: "Sorry, there is a problem and the message can't be send at the moment",
                        confirmButtonText: 'Okay, try again',
                        background: '#1A191D',
                    })
                }).finally(() => {
                    form.name = ''
                    form.email = ''
                    form.message = ''
                })
            }
        }

        return {
            form, sendMessage, isSending
        }
    }
}
</script>

<style>
.form-wrapper {
    height: 50vh;
}

.box, .inp {
    width: 100%;
}

.inp {
    margin-bottom: 1rem;
    border: none;
    padding: 0.5rem 1rem;
    outline: none;
    border: 2px solid #888;
    background: transparent;
    transition: 0.3s ease;
    color: var(--primary-color);
}
.inp:focus {
    border: 2px solid var(--primary-color);
}
.inp-msg {
    resize: none;
    height: 150px;
}
</style>