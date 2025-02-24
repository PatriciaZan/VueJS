<script setup>
defineProps({
    name: {
        type: String,
        validator: (propValue) => {
            return ['pati', 'Patricia', 'Paty'].includes(propValue)
        }
    },

    age: {
        type: Number,
        validator: (propsValue) => (propsValue >= 18 && propsValue <= 30 ? true : false) 
    },

    password: {
        type: String,
        validator: (propValue) => propValue.length >= 8
    }
})
</script>

<template>
<p>Name: {{ name }}</p>
<p>Age: {{ age }}</p>
<p>Password: {{ password }}</p>
</template>