const { createApp, ref } = Vue

createApp({
  setup() {
    const message = ref('Hello Vue! You a bitch')
    return {
      message
    }
  }
}).mount('#app')