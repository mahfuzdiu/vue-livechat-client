<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card">
          <div class="card-header">
            <b-button variant="outline-primary" @click="connectToChat()">Connect</b-button>
          </div>
          <div class="card-body">
            <div class="chat" ref="chat">
              <p v-for="(message, index) in messageList" :key="index">{{message}}</p>
            </div>

            <form @submit.prevent="sendMessage()">
              <input v-model="message" class="form-control" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import socket from '../socket-service'

export default {
  name: 'chat-ui',
  data() {
    return {
      message: '',
      messageList: [],
    }
  },
  mounted() {
    socket.on('message', (payload) => { 
      //this.messageList.push(payload.message + ':server')
      console.log(payload.activeUsers)
    })
  },
  methods: {
    connectToChat(){
      socket.connect()
    },
   async sendMessage() {
      await this.send()
      this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight
    },

    send(){
      if(this.message != ''){
        socket.emit('message', this.message)
        this.messageList.push(this.message)
        this.message = ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat{
  height: 250px;
  border-radius: 3px;
  overflow-y: scroll;
}

::-webkit-scrollbar {
    height: 8px;
    width: 6px;
    background: #fff;
}

::-webkit-scrollbar-thumb {
    background: #393812;
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 2px hsla(288, 90%, 26%, 0.75);
}

::-webkit-scrollbar-corner {
    background: rgb(131, 17, 173);
}

.chat p:nth-child(2n+1){
  text-align: left;
  background: #4cd799;
  color: white;
  border-radius: 5px;
  padding: 3px 15px;
  width: fit-content;
}

.chat p:nth-child(2n){
  float: right;
  background: #50c1e6;
  color: white;
  border-radius: 5px;
  padding: 3px 15px;
  width: fit-content;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
