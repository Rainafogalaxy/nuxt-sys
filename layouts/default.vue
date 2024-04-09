<template>
  <div class="b-container">
    <NavBar />
    <main class="container">
      <slot />
    </main>
    <PageFooter />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.b-container {
  min-width: 1000px;
  @apply bg-gray-100 flex flex-col min-h-screen;
}
</style>
