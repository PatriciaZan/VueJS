<script setup>
import { ref } from 'vue';

const userName = ref('')
const email = ref('')
const password = ref('')



</script>

<template>
    <h1>Form Event</h1>
    <form @submit.prevent="$emit('userInfo', userName, email, password)" >
        <input type="text" v-model="userName">
        <input type="email" v-model="email">
        <input type="password" v-model="password">
        <button type="submit">Submit</button>
    </form>
</template>