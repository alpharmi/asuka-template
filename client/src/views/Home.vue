<template>
    <p>Hello, this is my template for <span class="text-lightpink">Vue</span> and <span class="text-lightpink">Express</span>.</p>
    <button class="w-auto h-8 px-3 bg-bg-light rounded-md" @click="redirect('exampleView')">Example Button</button>
</template>

<script setup>
    import * as vueRouter from "vue-router"

    const router = vueRouter.useRouter()

    function redirect(route) {
        router.push({
            path: route,
        })
    }
</script>