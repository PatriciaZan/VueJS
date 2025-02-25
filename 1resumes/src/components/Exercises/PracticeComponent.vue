<script setup>
import { inject } from 'vue';

const friendsList = inject('friends')
const gamesList = inject('games')
</script>

<template>
<p>{{ friendsList }}</p>
</template>