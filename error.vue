<template>
  <!-- 这个页面会在应用中未捕获的错误发生时显示 -->
  <div class="error-page">
    <el-result
      :status="404"
      title="页面出错了"
      sub-title="当前访问的页面不存在"
    >
      <template #extra>
        <el-button type="primary" @click="backToHome"></el-button> </template
    ></el-result>
  </div>
</template>

<script setup>
const backToHome = ()=>{
    
}
</script>

<style lang="scss" scoped></style>
