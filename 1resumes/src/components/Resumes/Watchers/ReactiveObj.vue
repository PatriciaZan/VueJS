<script setup>
import { reactive, watch } from 'vue';

const state = reactive({username: 'Patricia'})

// If you want the oldVal and the newVal = getetr function
// + specify the actual obj/state "property".
watch(() => state.username, (newVal, oldVal) => {
    console.log('new value: ', newVal);
    console.log('old value: ', oldVal);
    
})

</script>

<template>
    <h1>{{ state.username }}</h1>
    <button @click="state.username = 'Alex'" >Change Name</button>
</template>