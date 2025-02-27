<script setup> 
// let count = ref(0)
// const increment = () => count.value++
// const decrement = () => count.value--

import { useCounter } from './shared/useCounter';
const counter = useCounter()

</script>

<template>
    <!-- Extract all the logic from this component and create a separate Composable
        -Allow to use that logic in overall application
        -Make the code clean and organized 
    -->
    <!-- <h1>Count; {{ count }}</h1> -->
    <!-- <button @click="increment">+</button>
    <button @click="decrement">-</button> -->
    <h1>Count: {{ counter.count }}</h1>
    <button @click="counter.increment">+</button>
    <button @click="counter.decrement">-</button>
</template>