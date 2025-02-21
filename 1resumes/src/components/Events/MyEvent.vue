<script setup>
import { ref } from 'vue';

    let count = ref(0);

    const incrementCounter = () => count.value++;
    const decrementCounter = () => count.value--;
    
    const submitHandler = (e) => {
        e.preventDefault()
        alert('Submited')
    }

    const showMessage = (message) => alert(message)

</script>

<template>
    <h1>Count: {{ count }}</h1>
    
    <!-- <button v-on:click="count++">Increment</button> -->
    <!-- <button @:click="count--">Decrement</button> -->
    
    <!-- With a Function -->
    <button @:click="incrementCounter">Increment</button>
    <button @:click="decrementCounter">Decrement</button>

    <!-- FORM -->
     <form @:submit="submitHandler">
        <input type="text" placeholder="Enter your Name">
        <input type="email" placeholder="Enter your Email">
        <button type="submit">Submit</button>
     </form>

     <!-- Simpler way -->
      <button @click="showMessage('This is the Message!')">Show Message</button>
</template>