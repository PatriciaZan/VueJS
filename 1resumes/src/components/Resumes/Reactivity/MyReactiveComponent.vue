<script setup>
import { reactive } from 'vue';

    let initialsate = reactive({count: 0});

    let initialSate2 = reactive({val: {count:0}, user: ['Patricia', 'Oliveira']});

    const changeUser = () => {
        initialSate2.user[0] = "Michal";
        initialSate2.user[1] = "Phill";
    }


</script>

<template>
    <h1>Count: {{ initialsate.count }}</h1>
    <button @click="initialsate.count++">Increment</button>
    <button @click="initialsate.count--">Decrement</button>

    <!-- EXEMPLE -->
    <h1>Current count2: {{ initialSate2.val.count }}</h1>
    <h2>Users: {{ initialSate2.user }}</h2>

    <button @click="initialSate2.val.count += 10">Add 10</button>
    <button @click="changeUser">Change User</button>
    <button @click="initialSate2.user.push('Joel')">Add One more User</button>

</template>