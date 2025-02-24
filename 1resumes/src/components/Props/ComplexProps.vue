<script setup>
 defineProps({
    friends: Array,
    userInfo: Object,
})
</script>

<template>
    <h1>Complex Props</h1>
    <p>{{ friends }}</p>
    <p>{{ userInfo }}</p>
    <hr>
    
    <ul v-for="(friend, index) in friends" :key="index">
        <li>{{ friend }}</li>
    </ul>

<!-- Object -->
    <ul v-for="(info, i) in userInfo" :key="i">
        <li>{{ info }}</li>
    </ul>
</template>