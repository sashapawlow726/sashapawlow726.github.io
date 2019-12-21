<template>
  <div id="app">
    
    <ChatWindow></ChatWindow>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ChatWindow from './components/ChatWindow'

export default {
  name: 'App',
  components: {
    HelloWorld , ChatWindow
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
