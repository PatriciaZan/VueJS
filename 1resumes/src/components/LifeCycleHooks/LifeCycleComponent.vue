<script setup>
import { ref, onBeforeMount, onBeforeUpdate, onMounted, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

const message = ref('Hello vue!')
</script>

<template>
    <p>{{ message }}</p>
    <button>Update</button>
</template>