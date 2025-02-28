<!-- npm i axios -->
 <script setup>
import { ref } from 'vue';
// import axios

const data = ref(null)
const fetchData = async () => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

        data.value = response.data
    }catch (err){
        console.log(`Error: ${err}`);
        
    }
}
</script>

<template>
    <h1>Axios</h1>
    <button @click="fetchData">Fetch</button>
    <div>
        <p>Data:</p>
        <p>{{ data }}</p>
    </div>
</template>