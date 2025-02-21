<template>
    <h1 v-bind:class="$style['module-class']" >Module Styles $ (kabak-case) v-bind:</h1>
    <h1 :class="$style['module-class']" >Module Styles $ (kabak-case) :</h1>

    <h2 :class="$style.camelCaseClass">Module Styles $ (camelCase)</h2>

    <!-- <h2 :class="$myClasses.camelCaseClass">Module Styles $ (camelCase)</h2> -->
</template>

<!-- <style module="myClasses"> -->
<style>
/* kabab-case */
.module-class{
    background: firebrick;
    color: white;
}

.camelCaseClass{
    background: seagreen;
    color: white;
}
</style>