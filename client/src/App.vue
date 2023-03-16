<template>
  <main class="min-h-screen flex flex-col gap-3 items-center justify-center">
    <RouterView/>
  </main>

  <div class="absolute top-0 w-[108rem] h-fulloverflow-hidden mix-blend-lighten opacity-20 -z-40">
    <img src="/images/rays1.avif" loading="lazy" class="absolute">
    <img src="/images/rays2.avif" loading="lazy" class="absolute">
  </div>
</template>