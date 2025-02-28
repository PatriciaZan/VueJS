<script setup>
import { reactive, ref } from 'vue';

let count = ref(0)
let username = ref('')

let usersList = ref(['User1', 'User2', 'User3', 'User4'])

let information = ref({name: 'user1', age:21, location: ['UK', 'ENG'], isMarried: false})

let friends = reactive([ref('User1'), ref('User2'), ref('User3')]);

</script>

<template>
    <h1>Count: {{ count }}</h1>
    <button @click="count++">Increment</button>
    <button @click="count--">Decrement</button>

    <h1>UserName: {{ username }}</h1>
    <button @click="username = 'Patricia'">Add user</button>

    <h1>usersList: {{ usersList }}</h1>
    <button @click="usersList.push('NewUser')">Add user</button>

    <h1>informations:</h1>
    <p>Name:        {{ information.name }}</p>
    <p>Age:         {{ information.age }}</p>
    <p>Location:    {{ information.location }}</p>
    <p>:Is Married: {{ information.isMarried }}</p>
    <button @click="information.name = 'Updated Name'">Cahnge Name</button>

    <h1>Friends</h1>
    <p>1. {{ friends[0] }}</p>
    <p>2. {{ friends[1] }}</p>
    <p>3. {{ friends[2] }}</p>
    <button @click="friends[0] = 'HandShake'">Hand Shake</button>
    <button @click="friends[1] = 'HandShake'">Hand Shake</button>
    <button @click="friends[2] = 'HandShake'">Hand Shake</button>


</template>