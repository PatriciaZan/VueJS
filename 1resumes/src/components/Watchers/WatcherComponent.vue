// watch(source, callback, options)
// Source -> Ref() - Reactive Object - Array - Getter Function
// Callback -> called when some data changes
// options -> immediate - deep - flush - onTrack/onTrigger

<script setup>
import { ref, watch } from 'vue';

    const message = ref('Hello!')
    const inputText = ref('')

    // Watch for changes in inputText and update message
    watch(inputText, (newValue, oldValue) => {
        console.log(newValue);
        console.log(oldValue);
        message.value = `You typed: ${newValue}`
    })
</script>

<template>
<h1>Watchers</h1>
    <div>
        <p>{{ message }}</p>
        <input v-model="inputText" placeholder="Type Something...">
    </div>

</template>