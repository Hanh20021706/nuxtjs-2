<template>
  <div class="container mb-[88px]">
    <div class="banner-link px-[46px] py-[36px]">
      <div class="banner z-10">
        <h2 class="text-[44px] text-white font-medium">
          Bắt Đầu Ngay: Tạo Biểu Mẫu Khảo Sát của Bạn!
        </h2>
        <p
          class="text-white text-[18px] font-medium mt-[17px] mb-[110px] tracking-tight"
        >
          Hãy bắt đầu ngay hôm nay bằng cách tạo biểu mẫu khảo sát của bạn!
          Thuận tiện, linh hoạt và hoàn toàn tùy chỉnh, trang web của chúng tôi
          sẽ giúp bạn nhanh chóng thu thập ý kiến quan trọng từ đối tượng của
          mình.
        </p>
        <nuxt-link to="/" class="button-primary px-[24px] py-[8px]">
          Bấm để tạo khảo sát
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.banner-link {
  background-image: url("~images/bg-banner.png");
  border-radius: 10px;
  height: auto;
}
</style>
