<script setup>
defineProps({
    href: String,
    text: String,
    bg: {
        type: String,
        default: "bg-gray-500",
    },
    hoverBg: {
        type: String,
        default: "bg-gray-600",
    },
    color: {
        type: String,
        default: "text-white",
    },
});
</script>

<template>
    <a :href :class="`inline-block ${bg} rounded-lg px-4 py-2 hover:${hoverBg} ${color}`">{{ text }} </a>
</template>
