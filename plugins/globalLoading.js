// https://nuxt.com.cn/docs/api/advanced/hooks#%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E9%92%A9%E5%AD%90%E8%BF%90%E8%A1%8C%E6%97%B6

import { createDiscreteApi } from "naive-ui";

export default defineNuxtPlugin((nuxtApp) => {
  const bar = ref(null);

  nuxtApp.hook("app:mounted", (e) => {
    if (!bar.value) {
      const { loadingBar } = createDiscreteApi(["loadingBar"]);
      bar.value = loadingBar;
    }
  });
  nuxtApp.hook("page:start", () => {
    bar.value?.start();
  });
  nuxtApp.hook("page:finish", () => {
    setTimeout(() => {
      bar.value?.finish();
    }, 150);
  });
  nuxtApp.hook("app:error", () => {
    //它会执行两次(服务端，客户端)
    if (process.client) {
      //NodeJS的 process.server
      setTimeout(() => {
        bar.value?.finish();
      }, 150);
    }
  });
});
