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

const vFormateDiv2 = {
    mounted: (el, binding) => {
        switch (binding.arg){
            case 'orange':
                el.style.color = 'orange'
                break;
            case 'pink':
                el.style.color = 'pink'
                break;
            case 'purple':
                el.style.color = 'purple'
                break;
            case 'teal':
                el.style.color = 'teal'
                break;
            default:
                el.style.color = 'black'
        }
    }
}

const vFormateDiv3 = (el) => el.style.fontSize = '5rem'
</script>

<template>
    <h1>Directives</h1>
    <div v-formate-div>Simple directive</div>
    <div v-formate-div="100">Second Simple directive</div>

    <div v-formate-div-2:orange>Second Directive Switch case</div>
    <div v-formate-div-2:pink>Second Directive Switch case</div>
    <div v-formate-div-2:purple>Second Directive Switch case</div>
    <div v-formate-div-2:teal>Second Directive Switch case</div>

    <div v-format-div-3>Patricia</div>
</template>