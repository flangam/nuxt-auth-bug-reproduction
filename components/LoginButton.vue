<template>
  <button class="button__login" @click="handleSignIn">Log In</button>
</template>

<script setup lang="ts">
const {signIn} = await useSession({required: false})
const rtConfig = useRuntimeConfig()
const handleSignIn = () => {
  signIn(rtConfig.auth.defaultProvider, {callbackUrl: rtConfig.public.callbackPath})
}
</script>