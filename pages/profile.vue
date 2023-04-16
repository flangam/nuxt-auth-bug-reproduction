<template>
  <div class="content-layout">
    <h1 id="page-title" class="content__title">Profile Page</h1>
    <div class="content__body">
      <p id="page-description">
        <span>You can use the <strong>ID Token</strong> to get the profile information of an authenticated user.</span>
        <span><strong>Only authenticated users can access this page.</strong></span>
      </p>
      <div class="profile-grid">
        <div class="profile__header">
          <img :src="data.user.picture" alt="Profile" class="profile__avatar" />
          <div class="profile__headline">
            <h2 class="profile__title" v-if="data">{{ data.user.name }}</h2>
            <span class="profile__description" v-if="data">{{ data.user.email }}</span>
          </div>
        </div>
        <div class="profile__details" v-if="data">
          <CodeSnippet title="Decoded ID Token" :code="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = useSession()
</script>
