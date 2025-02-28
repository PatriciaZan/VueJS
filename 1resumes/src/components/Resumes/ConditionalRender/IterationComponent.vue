<script setup>
import { ref } from 'vue';

let people = ref(['Alex', 'Ana', 'Caio'])

const books = ref([
    {
        id: 1,
        title: "Title 1",
        author: "Author 1",
        genre: "Fiction",
        publicationYear: 1984 
    },
    {
        id: 2,
        title: "Title 2",
        author: "Author 2",
        genre: "Action",
        publicationYear: 1999 
    },
    {
        id: 3,
        title: "Title 3",
        author: "Author 3",
        genre: "Drama",
        publicationYear: 2004 
    },
    {
        id: 4,
        title: "Title 4",
        author: "Author 4",
        genre: "Horror",
        publicationYear: 2024 
    },
])

const complexGamesObj = ref({
    game1: {
        title: 'Space Explorer',
        genre: 'Sci-Fi',
        plataform: 'PC',
        releaseDate: '2023-05-20'
    },
    game2: {
        title: 'Space II',
        genre: 'Sci-Fi',
        plataform: 'PC',
        releaseDate: '2024-05-24'
    },
})

</script>

<template>
    <h1>v-for</h1>

    <p v-for="(person, index) in people" :key="index">{{ person }}</p>

    <ul v-for="({id, title, author, genre, publicationYear}, index) in books" :key="index">
        <li>ID: {{ id }}</li>
        <li>TITLE: {{ title }}</li>
        <li>Author: {{ author }}</li>
        <li>Genre: {{ genre }}</li>
        <li>Publication: {{ publicationYear }}</li>
    </ul>

    <h1>Games Obj</h1>

    <ul v-for="(game, index) in complexGamesObj" :key="index">
        <li>{{ game }}</li>
        <br>

        <!-- Single value from Obj -->
         <li v-for="(property, i) in game" :key="i">
            {{ property }}
         </li>
    </ul>

    <h1>v-for iteration on numbers</h1>
    <ul v-for="number in 5" :key="number">
        <li>{{ number }}</li>
    </ul>
</template>