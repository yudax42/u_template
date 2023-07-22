<template>
  <NotionRenderer :blockMap="blockMap" fullPage />
</template>

<script lang="ts" setup>
const { $notion } = useNuxtApp();

// use Notion module to get Notion blocks from the API via a Notion pageId
const { data: blockMap } = useAsyncData("page_nuxt", () =>
  $notion.getPageBlocks("147d16c50e5a4c2da2aa1cf88ac2a55c")
);
</script>

<style>
@import "vue-notion/src/styles.css";
</style>