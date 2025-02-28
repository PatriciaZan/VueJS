<script setup>
const myRefFunc = (el) => {
    console.log(el.textContent); // reading the text content
    el.textContent = 'Text changed'
    el.style.color = 'red'
    
}

</script>

<template>
    <h1>Function Ref</h1>
    <p :ref="myRefFunc" >This is the initial value</p>
</template>