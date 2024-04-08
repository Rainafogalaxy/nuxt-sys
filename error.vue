<template>
  <!-- 这个页面会在应用中未捕获的错误发生时显示 -->
  <div class="error-page">
    <el-result>
      <template #icon>
        <el-image src="/assets/NotFound/404.jpg" />
      </template>
    </el-result>
    <div class="error-back">
      <el-button type="primary" @click="backToHome">回到首页</el-button>
    </div>
  </div>
</template>

<script setup>
const useRouter = useNuxtApp().$router;
const backToHome = () => {
  useRouter.push("/");
};
</script>

<style lang="scss" scoped>
:deep(.el-result) {
  padding: 0;
}
.error-page {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  .error-back {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translateX(-43px);
  }
}
</style>
