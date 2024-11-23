<template>
    <AccordionContainer
     v-for="acc in accordions"
      :key="acc.id" 
      :title="acc.title"
      :isOpen="activeAccordion === acc.id"
      @toggle="handleToggle(acc.id)"
    >
        <AccUserData v-if="acc.id == 1"/>
        <AccOrder v-if="acc.id == 2"/>
        <AccDetail v-if="acc.id == 3"/>
    </AccordionContainer>
</template>
<script setup lang="ts">
import AccordionContainer from '../AccordionContainer.vue';
import { ref } from 'vue';
import AccUserData from './AccUserData.vue';
import AccOrder from './AccOrder.vue';
import AccDetail from './AccDetail.vue';

const accordions = [
  { id: 1, title: 'اطلاعات کاربر' },
  { id: 2, title: 'لیست سفارش' },
  { id: 3, title: 'جزئیات' },
];

const activeAccordion = ref<number | null>(0);

const handleToggle = (id: number) => {
  activeAccordion.value = activeAccordion.value === id ? null : id;
};
</script>
<style lang="">
    
</style>