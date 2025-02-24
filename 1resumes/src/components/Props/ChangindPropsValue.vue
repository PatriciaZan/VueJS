<script setup>
const numberProp = defineProps(['number'])
// props are immutable = cannot be changed
// -- readOnly
//numberProp.number = 7 NO!
</script>


<template>
    <h1>Changing Props</h1>
    <p>{{ numberProp.number }}</p>

</template>