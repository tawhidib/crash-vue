<script setup>
import HeroSection from "@/components/HeroSection.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListing from "@/components/JobListing.vue";
</script>

<template>
    <HeroSection title="This is the title" subtitle="this is the subtitle" />
    <HomeCards />
    <JobListing :limit="3" :showbutton="true" />
</template>
