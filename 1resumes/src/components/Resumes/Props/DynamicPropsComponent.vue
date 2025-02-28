<script setup>
const props = defineProps(['firsName', 'lastName'])

</script>

<template>
    <h1>{{ props.firsName }}</h1>
    <h1>{{ props.lastName }}</h1>
</template>