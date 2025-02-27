<script setup>
import { ref, onBeforeMount, onBeforeUpdate, onMounted, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

const message = ref('Hello vue!')

//
onBeforeMount(() => {
    console.log('Component is about to be mounted');
})

onMounted(() => {
    console.log('Component has been mounted');
})

onBeforeUpdate(() => {
    console.log('Component is about to be updated');
})

onUpdated(() => {
    console.log('Component has been updated');    
})

// When the component is destroyed
onBeforeUnmount(() => {
    console.log('Component is about to be unmounted');
})

// Sucess on removing the component from the DOM
onUnmounted(() => {
    console.log('Component has been unmonted');
})

const updateMessage = () => {
    message.value = 'Updated message';
}


</script>

<template>
    <p>{{ message }}</p>
    <button @click="updateMessage" >Update</button>
</template>