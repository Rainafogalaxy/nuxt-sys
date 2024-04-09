<template>
  <!-- 全局化配置 -->
  <NConfigProvider inline-theme-disabled>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NConfigProvider>
</template>

<script setup>
import { NConfigProvider } from "naive-ui";
</script>

<style lang="scss" scoped></style>
