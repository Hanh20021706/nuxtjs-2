<template>
  <div class="">
    <button :class="classButton">
      {{ title }}
    </button>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: {
    title: String,
    classButton: String,
  },
};
</script>
