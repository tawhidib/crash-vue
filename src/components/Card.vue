<script setup>
defineProps({
    bg: {
        type: String,
        default: "bg-gray-100",
    },
    title: String,
    subtitle: String,
});
</script>

<template>
    <div :class="`${bg}  p-6 rounded-lg shadow-md`">
        <h2 class="text-2xl font-bold">{{ title }}</h2>
        <p class="mt-2 mb-4">{{ subtitle }}</p>

        <slot></slot>
    </div>
</template>
