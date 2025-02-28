<script setup>
const mySite = 'google.com';

//-----Dynamic Binding
const imageInfo ={
    src: 'https://images.pexels.com/photos/28588346/pexels-photo-28588346/free-photo-of-dramatic-coastal-landscape-of-el-golfo-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Random Image',
    width: 200,
    height: 400,
}

</script>

<template>
<a v-bind:href="mySite">Google Old way</a>
<a :href="mySite">Google New way</a>

<img :="imageInfo">

</template>