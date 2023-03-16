<template>
    <div class="flex flex-col gap-3 w-96 bg-bg-dark p-4 rounded-md outline outline-1 outline-offset-1 outline-white-10">
        <h1 class="font-bold">{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            description: String
        }
    }
</script>