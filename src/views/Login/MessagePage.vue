<template>
  <div class="message-page content-container">
      <div class="messages-wrapper">
          <div class="message-sidebar">
              <span>
                  <router-link to="/">Home</router-link>
              </span>
              <span class="message-title page-active">
                  <router-link to="/messages">Messages</router-link>
              </span>
              <span class="logout-btn">
                  <button class="btn btn-danger" @click="Logout">Logout</button>
              </span>
          </div>
          <div class="message-list">
              <div class="message p-3" 
                  v-for="(message, i) in messages" 
                  :key="i + message.name" 
                  @click="getMessageDetail(message.id)"
                  :class="{messageViewed: isMessageViewed[message.id]}"
              >
                  <div class="message-info sender-name">
                      <h6>
                          {{message.name}}
                      </h6>
                  </div>

                  <div class="message-info message-sent">
                      <p>
                          {{message.message}}
                      </p>
                  </div>
              </div>
          </div>

          <div class="message-detail p-3" v-for="messageDetail in messageDetails" :key="messageDetail.id">
              <h5 class="text-center text-white" v-if="detailLoading">Loading message detail, please wait...</h5>
              <div class="msg-detail msg-name" v-else>
                  <h5 class="message-info-detail w-100">
                      Message from
                        {{ messageDetail.name }}  [ {{messageDetail.email }} ]
                  </h5>
              </div>
              <div class="msg-detail msg-date mb-2">
                  <span>{{ messageDetail.date }}</span>
              </div>
              <div class="msg-action msg-date pb-5 d-flex gap-3">
                  <button class="btn btn-secondary">
                      <a :href="'mailto:'+messageDetail.email">
                        Reply
                      </a>
                  </button>
                  <button class="btn btn-danger" @click="deleteMessage(messageDetail.id)"> 
                      Delete
                  </button>
              </div>

              <div class="full-message">
                  <div class="msg-text">
                    <p>
                        {{messageDetail.message }}
                        
                    </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { signOut } from 'firebase/auth'
import { auth, db } from '@/firebase'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { onMounted, ref } from '@vue/runtime-core'
import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore'
export default {
    name: 'MessagePage',
    setup() {
        const router = useRouter()

        let messages = ref([])
        let messageDetails = ref([])

        const getMessages = () => {
            const messagesRef = collection(db, 'messages')
            const q = query(messagesRef, orderBy('createdAt'))
            onSnapshot(q, (querySnapshot) => {
                if(!querySnapshot.empty) {
                    querySnapshot.docs.forEach((doc) => {
                        messages.value.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    })
                }
            })
        }

        onMounted(() => {
            getMessages()
        })

        const Logout = async () => {
            signOut(auth)
                .then(() => {
                    sessionStorage.removeItem("login");
                    router.push('/')
                }).finally(() => {
                    Swal.mixin({
                        titleText: 'Logout success',
                        text: `Successfull logged out from admin`,
                        showCloseButton: true,
                        showConfirmButton: false,
                        timerProgressBar: true,
                        timer: 3000,
                    })
                })
        }

        const isMessageViewed = ref([])
        const detailLoading = ref(false)
        
        const getMessageDetail = async (id) => {
            messageDetails.value = []
            detailLoading.value = true
            isMessageViewed.value = []
            const messageRef = doc(db, 'messages', id)
            await getDoc(messageRef)
                .then((response) => {
                    messageDetails.value.push({
                        ...response.data(),
                        id: response.id
                    })
                }).catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        titleText: 'Failed to get message',
                        text: "Sorry, there is a problem and the message can't be loaded at the moment",
                        confirmButtonText: 'Okay, try again',
                        background: '#1A191D',
                    })
                }).finally(() => {
                    detailLoading.value = false
                    isMessageViewed.value[id] = true
                })

        }

        const deleteMessage = async (id) => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                background: '#1A191D',
                color: '#D1D1D1',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await deleteDoc(doc(db, 'messages', id))
                        .then(async () => {
                            messageDetails.value = []
                            await Swal.fire({
                                icon: 'success',
                                titleText: 'Message Deleted',
                                text: 'Message has been successfully deleted!',
                                confirmButtonText: 'Okay',
                                background: '#1A191D',
                            })
                            await getMessages()
                        }).catch((err) => {
                            Swal.fire({
                                icon: 'error',
                                titleText: "Can't delete message",
                                text: "Sorry, there is a problem and the message can't be send at the moment",
                                confirmButtonText: 'Okay, try again',
                                background: '#1A191D',
                            })
                        })
                }
            })
        }

        return {
            Logout, messages, getMessageDetail, 
            messageDetails, isMessageViewed, detailLoading, deleteMessage
        }
    }
}
</script>

<style>
.message-page {
    height: 100vh !important;
    overflow: hidden;
}

.messages-wrapper {
    width: 90%;
    height: 100%;
    margin: auto;
    background: var(--messagebg-color);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background: linear-gradient(225deg, #25232a, #201e23);
    box-shadow:  -5px 5px 10px #111013,
                5px -5px 10px #35323b;
    border-radius: 3px;
    display: flex;
    align-items: flex-start;
}

.message-sidebar {
    width: fit-content;
    height: 100%;
    padding: 1rem;
    padding-right: 2rem;
    position: relative;
    background: #323136;
}

.message-sidebar span {
    display: block;
    cursor: pointer;
    margin-bottom: 1rem;
}

.message-sidebar span a:hover, .message-sidebar span.page-active a{
    color: var(--white);
}

.logout-btn {
    position: absolute;
    bottom: 2%;
    color: #ee3333;
}

.message-list {
    width: 30%;
    height: 100%;
    overflow-y: auto;
    position: relative;
    border-right: 2px solid var(--bg-color);
}

.message-detail {
    width: 70%;
}

.message-list > h3 {
    position: fixed;
}

.message-list > .message {
    height: 80px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    border-left: 3px solid transparent;
}

.message-list > .message:hover, .message.messageViewed {
    background: #37343d;
    border-left: 5px solid var(--white);
}

.message > .message-info.message-sent > p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.message-info.message-sent p{
    color: rgb(173, 173, 173);
}

.label {
    width: 45%;
    position: relative;
}

.label::after {
    content: ':';
    position: absolute;
    right: 3%;
}

.full-message {
    height: 380px;
    overflow-y: auto;
}
</style>