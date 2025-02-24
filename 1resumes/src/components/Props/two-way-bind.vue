<script setup>
import { ref } from 'vue';

const formData = ref({username: '', email: '', password: ''})
</script>

<template>
    <h1>Form</h1>
    <form @submit.prevent="alert('Form Submited')">
        <input type="text" placeholder="Your name" v-model="FormData.username">
        <input type="email" placeholder="Your email" v-model="FormData.email">
        <input type="password" placeholder="Your password" v-model="FormData.password">
        <button type="submit">Submit</button>
    </form>
    <p>{{ formData.username }}</p>
    <p>{{ formData.email }}</p>
    <p>{{ formData.password }}</p>

    <h1>Props</h1>
</template>