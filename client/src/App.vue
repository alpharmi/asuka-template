<template>
  <main class="min-h-screen">
    <RouterView/>
  </main>
</template>

<script setup>
  import * as vueRouter from "vue-router"

  const router = vueRouter.useRouter()
</script>