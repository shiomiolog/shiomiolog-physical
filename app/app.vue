<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | 汐猫みお Physical Mode Official`
      : "physical.shiomiolog.com";
  },
  ogTitle: "physical.shiomiolog.com",
  description:
    "Undergraduate Student / Programmer / Virtual Existence. Mapping the physical and logical layers of life.",
  ogDescription:
    "Undergraduate Student / Programmer / Virtual Existence. Mapping the physical and logical layers of life.",
  ogImage: "https://physical.shiomiolog.com/ogp.png", // 後で作る画像パスにゃ！
  twitterCard: "summary_large_image",
  twitterSite: "@shiomiolog",
  twitterCreator: "@shiomiolog",
});
</script>
