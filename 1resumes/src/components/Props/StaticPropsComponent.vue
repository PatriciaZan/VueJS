<script setup>
const props = defineProps(['name'])
console.log(props);

</script>

<template>
    <h1>Props</h1>
    <p>{{ props.name }}</p>
</template>