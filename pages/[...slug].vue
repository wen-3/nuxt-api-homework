<script setup>
definePageMeta({
  layout: false,
})

const router = useRouter();
const event = useRequestEvent();
setResponseStatus(event, 404);

setTimeout(() => {
  router.push('/');
}, 2000);

</script>

<template>
  <div>
    <p>查無此頁面，將於2秒後跳轉回首頁...</p>
  </div>
</template>