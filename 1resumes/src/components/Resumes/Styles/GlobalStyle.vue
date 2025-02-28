<template>
    <h1 class="text-red">Global Styling</h1>
    <p class="local">Local scope in this component</p>
</template>

<!-- if not scope the style will apply to every component that uses the class name -->
<style>
    .text-red{
        color: red;
    }
</style>