<template>
  <div class="container grid grid-cols-12 gap-1 py-[32px] items-center">
    <div class="col-span-4">
      <div class="inline-block">
        <div
          class="bg-blueLight flex items-center gap-1 px-[12px] py-1 rounded-full"
        >
          <IconsWaring />
          <span class="text-white"> Phiên bản thử nghiệm</span>
        </div>
      </div>
    </div>
    <div class="col-span-4">
      <img src="~images/logo.png" alt="" />
    </div>
    <div class="col-span-4 flex justify-end">
      <div class="">
        <ul class="flex gap-3">
          <li>
            <Button title="login" classButton="button-primary" />
          </li>
          <li>menu</li>
          <li>menu</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
