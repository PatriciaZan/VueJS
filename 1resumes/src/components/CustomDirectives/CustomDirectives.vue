<script setup>
const vFormateDiv ={
    mounted: (el, binding)=> {
        console.log(el);
        el.style.fontSize = '4rem'
        el.style.color = 'red'
        
        console.log(binding);
        el.style.fontSize = binding.value + 'px'
        el.style.fontSize =  `${binding.value}px`
        

    }
}
</script>

<template>
    <h1>Directives</h1>
    <div v-formate-div>Simple directive</div>
    <div v-formate-div="100">Second Simple directive</div>
</template>