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
</template>