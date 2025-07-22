<script setup>
import HeroSection from "./components/HeroSection.vue";
import HomeCards from "./components/HomeCards.vue";
import JobListing from "./components/JobListing.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
    <Navbar />
    <HeroSection title="This is the title" subtitle="this is the subtitle" />
    <HomeCards />
    <JobListing />
</template>
