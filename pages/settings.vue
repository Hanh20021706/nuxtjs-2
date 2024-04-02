<template>
  <div>
    this is header settings

    <NuxtChild />
    <button @click="say('hello')">Say hello</button>
  </div>
</template>

<script setup>
function say(message) {
  console.log("message", message);
}
</script>

<style lang="scss" scoped></style>
