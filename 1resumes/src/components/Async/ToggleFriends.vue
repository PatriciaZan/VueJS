<script setup>
import { ref, defineAsyncComponent } from 'vue';
import RenderFriends from './RenderFriends.vue';

let showFriends = ref(false)
const RenderFriends = defineAsyncComponent(() => import('./RenderFriends.vue'))
const ToggleFriends = () => (showFriends.value = !showFriends.value)
</script>

<template>
    <div v-if="showFriends">
        <RenderFriends />
    </div>
    <button @click="ToggleFriends">Toggle</button>
</template>