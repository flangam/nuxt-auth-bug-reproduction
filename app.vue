<template>
  <NuxtPage />
</template>

<script setup>
const { status } = await useSession({ required: false })
</script>
