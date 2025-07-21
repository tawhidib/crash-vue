<script setup>
import { ref } from "vue";

const name = "Md Towhidul Islam";
const status = ref("active");
const tasks = ref(["task 1", "task 2", "task 3"]);
const githubLink = "https://github.com/tawhidib";
const newTask = ref("");

const toggleStatus = () => {
    switch (status.value) {
        case "active":
            status.value = "pending";
            break;

        case "pending":
            status.value = "inactive";
            break;

        case "inactive":
            status.value = "active";
            break;

        default:
            status.value = "active";
            break;
    }
};

const addNewTask = () => {
    if (newTask.value.trim() !== "") {
        tasks.value.push(newTask.value);
        newTask.value = "";
    }
};

const deleteTask = (index) => {
    tasks.value.splice(index, 1);
};

// initial version of setup api start from here [script setup is no need]

// export default {
//     setup() {
//         const name = "Md Towhidul Islam";
//         const status = ref("active");
//         const tasks = ["task 1", "task 2", "task 3"];
//         const githubLink = "https://github.com/tawhidib";

//         const toggleStatus = () => {
//             switch (status.value) {
//                 case "active":
//                     status.value = "pending";
//                     break;

//                 case "pending":
//                     status.value = "inactive";
//                     break;

//                 case "inactive":
//                     status.value = "active";
//                     break;

//                 default:
//                     status.value = "active";
//                     break;
//             }
//         };

//         return {
//             name,
//             status,
//             tasks,
//             githubLink,
//             toggleStatus,
//         };
//     },
// };
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

    <h5>Add Task</h5>
    <form @submit.prevent="addNewTask">
        <label for="newTask">New Task</label>
        <input type="text" id="newTask" v-model="newTask" />
        <button type="submit">Add Task</button>
    </form>

    <p v-if="tasks.length === 0">No Task Left</p>
    <ul>
        <li v-for="(task, index) in tasks" :key="task">
            {{ task }}

            <button @click="deleteTask(index)">X</button>
        </li>
    </ul>
    <!-- tasks start ends here  -->

    <p>If you are interested for see my github profile, <a :href="githubLink" target="_blank">Click here</a></p>
</template>
