<script>
export default {
    data() {
        return {
            name: "Md Towhidul Islam",
            status: "active",
            tasks: ["task 1", "task 2", "task 3"],
            githubLink: "https://github.com/tawhidib",
        };
    },

    methods: {
        toggleStatus() {
            switch (this.status) {
                case "active":
                    this.status = "pending";
                    break;

                case "pending":
                    this.status = "inactive";
                    break;

                case "inactive":
                    this.status = "active";
                    break;

                default:
                    this.status = "active";
                    break;
            }
        },
    },
};
</script>

<template>
    <h1>Hello, 👋 !!! My name is {{ name }}</h1>

    <!-- status related data start from here  -->
    <p v-if="status === 'active'">My status is 'Active' now</p>
    <p v-else-if="status === 'pending'">My status is 'Pending' now</p>
    <p v-else>My status is 'Inactive' now</p>

    <button @click="toggleStatus">Play with Status</button>
    <!-- status related data ends here  -->

    <!-- tasks start from here  -->
    <ul>
        <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
    <!-- tasks start ends here  -->

    <p>If you are interested for see my github profile, <a :href="githubLink" target="_blank">Click here</a></p>
</template>
