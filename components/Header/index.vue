<template>
  <div class="container grid grid-cols-12 gap-1 py-[32px] items-center">
    <div class="col-span-4">
      <div class="inline-block">
        <div
          class="bg-blueLight flex items-center gap-2 px-[12px] py-1 rounded-full"
        >
          <IconsWaring />
          <span class="text-white"> Phiên bản thử nghiệm</span>
        </div>
      </div>
    </div>
    <div class="col-span-4">
      <img src="~images/logo.png" alt="" class="max-w-[256px]" />
    </div>
    <div class="col-span-4 flex justify-end">
      <div class="">
        <ul class="flex gap-3 items-center">
          <li>
            <nuxt-link to="/" class="flex items-center gap-[8px]">
              <IconsBook />
              Hướng dẫn</nuxt-link
            >
          </li>
          <li>
            <HeaderSelectLang />
          </li>
          <li>
            <nuxt-link
              to="/"
              class="flex items-center gap-[8px] button-secondary px-[12px] py-[4px]"
            >
              <IconsUser />
              Đăng nhập</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
