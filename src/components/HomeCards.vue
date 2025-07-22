<script setup>
import Card from "./Card.vue";
import LinkButton1 from "./LinkButton1.vue";
</script>

<template>
    <section class="py-4">
        <div class="container-xl lg:container m-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                <Card title="For Developers" subtitle="Browse our Vue jobs and start your career today">
                    <LinkButton1 href="jobs.html" bg="bg-black" hoverBg="bg-gray-700" text="Browse Jobs" />
                </Card>
                <Card
                    bg="bg-green-100"
                    title="For Employers"
                    subtitle="List your job to find the perfect developer for the role"
                >
                    <LinkButton1 href="add-job.html" bg="bg-green-500" hoverBg="bg-green-600" text="Add Job" />
                </Card>
            </div>
        </div>
    </section>
</template>
