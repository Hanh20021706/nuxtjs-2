<template>
  <div>this is posts page id : {{ $route.params.id }}</div>
</template>

<script>
export default {
  // validate đường dẫn có 9 số
  validate(context) {
    return /^[0-9]{9,12}$/.test(context.params.id);
  },
  // mounted là vòng đời của nuxt
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style></style>
