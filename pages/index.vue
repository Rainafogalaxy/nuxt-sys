<template>
  <div>
    <NuxtLink to="test">点击我跳转</NuxtLink>
    <!-- NuxtLink组件是用来创建应用内的导航链接的，使用NuxtLink能够避免页面的全量刷新，实现客户端额路由跳转 -->
    <!-- 官网：<NuxtLink> 是 Vue Router 的 <RouterLink> 组件和 HTML 的 <a> 标签的替代品。
        它能智能地确定链接是内部链接还是外部链接，并根据可用的优化（预加载、默认属性等）进行渲染。 -->
    <!-- tip:
           1.有斜杠(/)：路径会被视为绝对路径，相对于应用的根目录，无论当前处于什么路由。
           2.没有斜杠(/):相对路径，这种路径的解析会基于当前的路由路径，不如当前在/about路径下，然后to="contact",最终会导航到/about/contact
     -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
