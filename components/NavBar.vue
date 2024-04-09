<template>
  <div class="nav-bar">
    <div class="container flex items-center h-[60px]">
      <n-button class="[!text-xl !font-bold]" quate>DohKyungSoo</n-button>
      <div>导航区域</div>
      <n-button circle>
        <template #icon>
          <n-icon>
            <Search />
          </n-icon>
        </template>
      </n-button>
      <n-button type="primary" secondary strong>登录</n-button>
    </div>
  </div>
  <div class="w-[100%] h-[80px]"></div>
</template>

<script setup>
import { NButton, NIcon } from "naive-ui";
</script>

<style lang="scss" scoped>
.nav-bar {
  z-index: 1000;
  @apply bg-white fixed top-0 left-0 right-0 shadow-sm;
}
</style>
