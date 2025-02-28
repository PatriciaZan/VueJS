<script setup>
import { ref } from 'vue';

const data = ref(null)

const FetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=> {
        if(!response.ok){
            throw new Error(`Error ${response.status}`)
        }
        return response.json()
    }).then((responseData) => {
        data.value = responseData
    }).catch((err) => {
        console.log(`Error fetching data: ${err}`);
        
    })
}
</script>

<template>
<div>
    <h1>(( Using fetch))</h1>
    <button @click="FetchData">Fetch Data</button>
    <div>
        <h2>Data from API:</h2>
        <pre>{{ data }}</pre>
    </div>
</div>
</template>