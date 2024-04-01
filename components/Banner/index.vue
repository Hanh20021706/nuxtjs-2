<template>
  <div class="container">
    <div class="banner p-[88px] mb-[116px] mt-[64px]">
      <div class="grid grid-cols-12 gap-1 items-center">
        <div class="col-span-6">
          <h2
            class="text-[34px] text-white font-bold leading-[1.2] tracking-tight"
          >
            Nền tảng khảo sát thu thập ý kiến
          </h2>
          <p class="text-white pt-[14px] pb-[20px]">
            Nền tảng khảo sát và thu ý kiến người dân là công cụ độc lập để tổng
            hợp đánh giá về vấn đề xã hội và kinh tế. Cơ quan nhà nước sử dụng
            nền tảng này để đo lường hài lòng về dịch vụ công và thu ý kiến về
            chính sách quản lý. Các bảng khảo sát và câu hỏi được cá nhân hóa,
            tiếp cận từng dịch vụ và người dân để thu thập thông tin chi tiết và
            chính xác.
          </p>
          <Button
            title="Tạo khảo sát ngay"
            classButton="button-primary px-[20px] py-[6px] gap-[10px]"
            :iconRight="true"
          >
            <IconsRight />
          </Button>
        </div>
        <div class="col-span-6">
          <img src="~images/banner.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.banner {
  background-image: url("~images/bg-banner.png");
  border-radius: 10px;
  height: auto;
}
</style>
