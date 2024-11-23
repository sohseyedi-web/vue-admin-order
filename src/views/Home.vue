<template>
  <section class="max-w-4xl lg:px-0 px-3 container text-[#fefefe] mx-auto py-5">
    <AccordionContainer
     v-for="acc in accordions"
      :key="acc.id" 
      :title="acc.title"
      :isOpen="activeAccordion === acc.id"
      @toggle="handleToggle(acc.id)"
      :visible="acc.id"
    />
    <Footer/>
  </section>
</template>
<script setup lang="ts">
import AccordionContainer from '../components/AccordionContainer.vue';
import Footer from '../components/Footer.vue'
import { ref } from 'vue';

const accordions = [
  { id: 1, title: 'اطلاعات کاربر' },
  { id: 2, title: 'اطلاعات سفارش' },
  { id: 3, title: 'جزئیات سفارش' },
];

const activeAccordion = ref<number | null>(0);

const handleToggle = (id: number) => {
  activeAccordion.value = activeAccordion.value === id ? null : id;
};
</script>
