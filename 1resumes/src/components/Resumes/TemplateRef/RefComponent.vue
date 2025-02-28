<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import MyComponent from '../MyComponent.vue';

const myRef = ref(null)

onMounted(() => {
    console.log(myRef.value);
    
})
</script>

<template>
    <MyComponent ref="myRef"/>
</template>