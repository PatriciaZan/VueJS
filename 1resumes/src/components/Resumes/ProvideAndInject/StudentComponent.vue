<script setup>
import { inject } from 'vue';


//defineProps(['studentName', 'studentAge'])
const studentName = inject('studentName')
const studentAge = inject('studentAge')
</script>

<template>
    <h1>Student Component</h1>
    <p>{{ studentName }}</p>
    <p>{{ studentAge }}</p>
</template>