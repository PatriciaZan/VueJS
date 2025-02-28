<template>
    <h2 class="global-1">Global Styled</h2>
    <h2 class="local-1">Local Style</h2>
</template>

<!-- Global -->
<style>
.global{
    background-color: aquamarine;
    color: white;
}
</style>

<!-- Local -->

<style scoped>
.local-1{
    background: black;
    color: white;
}
</style>