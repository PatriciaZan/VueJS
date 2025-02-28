<script setup>
const isTrue = true;
const isFalse = false;

import { ref } from 'vue';
let isVisible = ref(true)

let isUserLoggedIn = ref(true);
let username = 'Pati';
let showDetails = ref(isUserLoggedIn)

const isActive = ref(true)

let password = ref('password');
</script>

<template>
    <div>
        <!-- Removes from the DOM -->
        <p v-if="isTrue">Will show if isTrue is true</p>
        <p v-else-if="isFalse">Will show if isFalse is true</p>
        <p v-else>Will show if none is true</p>
    </div>

    <!-- v-show -->
    <p v-show="isVisible">Will be shown or hidden based on the visibility of isVisible</p>
    <button @click="isVisible = !isVisible">Toggle Visibility</button>

    <!-- EXEMPLES -->
     <h1 v-if="isUserLoggedIn">Welcome, {{ username }}</h1>
     <p v-else>Please log in</p>
     <div v-show="showDetails">
        <p>v-show exemple</p>
     </div>

     <div v-if="isActive">
        <p>if true will show</p>
     </div>
     <button @click="isActive = !isActive">Toggle</button>

     <h1 v-if="password.length >= 8">Strong Password</h1>
     <h1 v-else-if="password.length < 8">Weak Password</h1>
     <h1 v-else>Please enter your password</h1>
</template>