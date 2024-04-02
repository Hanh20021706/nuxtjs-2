<template>
  <div class="relative">
    <div class="absolute right-0 top-0 w-[200px] h-[200px]">
      <img src="~images/tab/subtract.png" alt="" />
    </div>
    <div class="container mb-[116px]">
      <TitleSection title="Tại sao lại chọn VNForm" />
      <div class="grid grid-cols-12 gap-[32px] items-center">
        <div class="col-span-6 flex flex-col gap-[32px]">
          <div v-for="tab in tabs" :key="tab.id">
            <!-- TODO: CHECK DEFAULT -->
            <div
              v-bind:class="[
                tab.type === 'EASY' ? 'border-primary' : 'border-gray3',
                'border-[2px] cursor-pointer flex shadow-xl items-center gap-[24px] rounded-[12px] p-[24px]',
              ]"
              @click="changeTab(tab.type)"
            >
              <!-- TODO:CHECK DEFAULT -->
              <div class="">
                <img
                  :src="tab.icon"
                  alt=""
                  v-bind:class="[
                    tab.type === 'EASY' ? 'opacity-100' : 'opacity-50',
                    'w-full',
                  ]"
                />
              </div>
              <div class="flex flex-col gap-[16px]">
                <h3 class="font-bold text-black text-[20px]">
                  {{ tab.name }}
                </h3>
                <p class="text-gray text-[16px] font-light">{{ tab.desc }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6">
          <div class="" v-show="selectedTab === 'EASY'">
            <img src="~images/tab/image-1.png" alt="" />
          </div>
          <div class="" v-show="selectedTab === 'SURVEY'">
            <img
              src="https://i.pinimg.com/564x/92/d1/58/92d1587b6eb0e5a26243e2cd476e9130.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const tabs = [
  {
    type: "EASY",
    name: "Dễ Dàng & nhanh chóng",
    desc: "Tham gia khảo sát chỉ trong vài phút. Giao diện thân thiện và đơn giản để bạn tập trung vào ý kiến của mình",
    image: require("@/assets/images/tab/image-1.png"),
    icon: require("@/assets/images/tab/tab-1.png"),
  },
  {
    type: "SAFE",
    name: "An Toàn và Bảo Mật",
    desc: "Tham gia khảo sát chỉ trong vài phút. Giao diện thân thiện và đơn giản để bạn tập trung vào ý kiến của mình",
    icon: require("@/assets/images/tab/tab-2.png"),
  },
  {
    type: "SURVEY",
    name: "Khảo Sát Nổi Bật",
    desc: "Tham gia khảo sát chỉ trong vài phút. Giao diện thân thiện và đơn giản để bạn tập trung vào ý kiến của mình",
    icon: require("@/assets/images/tab/tab-3.png"),
  },
];

const selectedTab = ref("EASY");

const changeTab = (tabType) => {
  selectedTab.value = tabType;
};
</script>
