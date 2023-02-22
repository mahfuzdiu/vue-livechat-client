<template>
  <div class="sidebar">
    <ul>
      <li>
        <router-link to="">Chat</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {

    }
  },
}

</script>

<style scoped>
.sidebar {
  width: 185px;
  height: 100vh;
  padding: 15px;
  background: #42b883;
  height: 100vh;
  display: flex;
  align-items: center;
}

ul {list-style: none; padding: 0; width: 100%;}
ul li a{ 
  color: #42b883;
  text-decoration: none;
  background-color: #bff4dd;
  width: 100%;
  display: block;
}
</style>