<template>
  <section class="max-w-4xl lg:px-0 px-4 container text-[#fefefe] mx-auto py-5">
    <HomeAccordion/>
    <footer class="mt-3 flex items-center">
      <button class="text-[#141414] bg-green-500 font-semibold w-[180px] h-[45px] text-lg rounded-xl flex items-center justify-center">
          ثبت سفارش
      </button>
    </footer>
  </section>
</template>
<script setup lang="ts">
import HomeAccordion from '@/components/accordion/HomeAccordion.vue';
</script>
