<script setup>
import { ref, watch } from 'vue';

const username = ref('Patricia')
const counter = ref(0)

watch([username, counter], (newValue, oldValue) => {
    console.log('new Val:', newValue);
    console.log('old Val:', oldValue);
    
})
</script>

<template>
    <p>{{ username }}</p>
    <p>{{ counter }}</p>

    <button @click="username = 'Alex'">Change name</button>
    <button @click="counter++">Increment Counter</button>
</template>