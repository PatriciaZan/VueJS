<script setup>
import { ref } from 'vue';

const friends = ref(['Friend1','Friend2','Friend3','Friend4','Friend5',])
</script>

<template>
    <h3 v-for="(friend, i) in friends" : key="i">
        {{ friend }}
    </h3>
</template>