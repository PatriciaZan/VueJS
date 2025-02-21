<script setup>
const myMessage = 'Blue World';
const myNumber = 404;
function add(x,y){
    return x+y;
}

</script>

<template>
    <h1>{{ myMessage }}</h1>
    <h2>{{ myNumber }}</h2>
    <h3>2 + 2 = {{ 2 + 2 }}</h3>
    <h4>Add Two numbers: {{ add(5,5) }}</h4>

    <h1>-------------------</h1>
    <!-- <p>Not allowed -> {{ const myName2 = 'Pati' }}</p> -->
</template>