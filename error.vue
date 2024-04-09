<template>
  <div class="err-wrapper">
    <n-result status="500" title="错误提示" :description="error.messgae">
      <template #footer>
        <n-button @click="() => clearError({ redirect: '/' })">
          回到首页
        </n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup>
import { NButton, NResult } from "naive-ui";
const props = defineProps({
  error: Object,
});
</script>

<style lang="scss" scoped>
.err-wrapper {
  margin-top: 200px;
}
</style>
