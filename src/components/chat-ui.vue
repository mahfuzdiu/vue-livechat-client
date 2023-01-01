<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h1>hello</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { io } from "socket.io-client";

export default {
  name: 'chat-ui',
  mounted() {
    this.socket()
  },
  methods: {
    socket() {
      const socket = io("http://localhost:3000");
      socket.on("connect", () => {
        console.log(socket.id);
      });

      let message = "coming from client...."
      socket.emit('message', message)

      socket.on('message', (payload) => {
        console.log(payload)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
