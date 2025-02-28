<script setup>
import { onMounted, ref } from 'vue';

const myRef = ref('')
//console.log(myRef.value);

onMounted(() => {
    console.log(myRef.value);
    myRef.value.focus()
    myRef.value.value = 'something new'
    
})

</script>

<template>
    <h1>Template ref</h1>
    <div>
        <input type="text" placeholder="Enter your name" ref="myRef">
    </div>
</template>