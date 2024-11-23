<template>
    <section
      class="w-full h-[235px] overflow-y-auto cursor-pointer text-lg rounded-xl"
    >
      <div class="flex items-center flex-wrap lg:gap-3 gap-y-5 justify-between p-3 shadow-sm">
        <div v-for="item in orderLists" :key="item.id" class="flex items-center justify-between gap-x-2 md:w-[45%] w-full">
          <OrderItem :value="item.value" :label="item.label"/>
        </div>
      </div>
    </section>
  </template>
<script setup lang="ts">
import { orderLists } from '@/constant/orderValue';
import OrderItem from './OrderItem.vue';


</script>
