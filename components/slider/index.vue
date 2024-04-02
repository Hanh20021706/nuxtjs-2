<template>
  <div class="container">
    <TitleSection title="Các bước tạo biểu mẫu khảo sát" />
    <div class="carousel w-full">
      <div
        class="carousel-item relative w-full"
        v-for="item in data"
        :key="item.id"
      >
        <div class="flex items-center px-[32px]">
          <div class="flex-1 max-w-[650px]">
            <div class="z-100">
              <img :src="item.image" alt="" />
            </div>
          </div>
          <div class="flex-1">
            <div class="flex flex-col gap-[16px] px-[26px]">
              <img class="w-[64px] h-[64px]" :src="item.icon" alt="" />
              <h3 class="text-black text-[18px] font-bold">
                {{ item.title }}
              </h3>
              <p class="text-gray text-[16px] font-light">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = [
  {
    id: "slide1",
    image: require("@/assets/images/slider/image-1.png"),
    icon: require("@/assets/images/slider/item-1.png"),
    title: "Đăng nhập/ đăng ký",
    description:
      "Vui lòng truy cập trang web của chúng tôi bằng cách đăng nhập vào tài khoản của bạn.",
  },
  {
    id: "slide2",
    image: require("@/assets/images/slider/image-2.png"),
    icon: require("@/assets/images/slider/item-2.png"),
    title: "Thiết kế biểu mẫu",
    description:
      "Tạo ra một biểu mẫu hoàn toàn mới và điều chỉnh thiết kế của nó theo sở thích và yêu cầu cụ thể của bạn.",
  },
  {
    id: "slide3",
    image: require("@/assets/images/slider/image-4.png"),
    icon: require("@/assets/images/slider/item-4.png"),
    title: "Chia sẻ",
    description:
      "Chia sẻ biểu mẫu khảo sát nhanh chóng và thuận tiện để thu thập ý kiến và thông tin từ cộng đồng của bạn.",
  },
  {
    id: "slide4",
    image: require("@/assets/images/slider/image-5.png"),
    icon: require("@/assets/images/slider/item-5.png"),
    title: "Phân tích",
    description:
      "Kiểm tra kết quả thống kê và tải xuống các câu trả lời để sử dụng theo nhu cầu của bạn một cách thuận tiện.",
  },
];
</script>
