<template>
  <!-- phải có thẻ div bao bọc tất cả không thì sẽ bị lỗi -->
  <div class="container">
    <Banner />
    <!-- <h2>{{ $t("hello") }}</h2> -->
    <Feature />
    <h2>title section</h2>
    <TitleSection title="Title-section" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data: () => ({
    lang: "vi",
  }),
};
</script>
