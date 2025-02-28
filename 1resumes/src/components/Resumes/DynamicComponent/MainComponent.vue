<script setup>
import { ref } from 'vue';
import ComponentOne from './ComponentOne.vue';
import ComponentTwo from './ComponentTwo.vue';
import ComponentThree from './ComponentThree.vue';

const currentTab = ref('ComponentOne')

const tabs = {
    ComponentOne,
    ComponentTwo,
    ComponentThree
}
</script>

<template>
    <h1>Main Component</h1>
    <button @click="currentTab = 'ComponentOne'">Component One</button>
    <button @click="currentTab = 'ComponentTwo'">Component Two</button>
    <button @click="currentTab = 'ComponentThree'">Component Three</button>

    <component :is="tabs[currentTab]" />
</template>