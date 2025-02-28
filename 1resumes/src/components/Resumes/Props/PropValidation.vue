<script setup>
// Basic validation
// const props = defineProps({
//     fullName: String,
//     age: Number,
// })

// Complex validation
const props = defineProps({
    fullName: {
        type: String,
        required: true,
        default: 'Anonymus',
    },
    age: Number
})
</script>

<template>
    <h1>Validation</h1>
    <p>{{ props.fullName }}</p>
    <p>{{ props.age }}</p>

</template>