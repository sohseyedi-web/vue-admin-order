<template>
    <Box dir="rtl">
      <div 
        class="flex items-center justify-between text-zinc-800 cursor-pointer"
        @click="$emit('toggle')"
      >
        <h3 class="lg:text-xl text-lg font-semibold">{{ title }}</h3>
        <ChevronDownIcon
          class="lg:size-8 size-6 transition-transform"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
      <div 
        ref="contentRef"
        :class="{ 'h-auto': isOpen }"
        class="overflow-hidden transition-all duration-300"
        :style="contentStyle"
      >
        <AccUserData v-show="visible === 1"/>
        <AccOrder v-show="visible === 2"/>
        <AccDetail v-show="visible === 3"/>
      </div>
    </Box>
</template>
  
<script setup lang="ts">
import Box from './Box.vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import { ref, computed } from 'vue';
import AccUserData from './accordion/AccUserData.vue';
import AccOrder from './accordion/AccOrder.vue';
import AccDetail from './accordion/AccDetail.vue';
  
  const { title ,isOpen,visible} = defineProps({
    title: {
      type: String,
      required: true
    },
    isOpen: {
    type: Boolean,
    required: true,
  },
    visible:{
    type: Number,
    required: true,
  }
  });
  
  const contentRef = ref<HTMLElement | null>(null);
  
  const contentStyle = computed(() => ({
    maxHeight: isOpen && contentRef.value
      ? `${contentRef.value.scrollHeight}px`
      : '0px'
  }));
</script>
  
<style scoped>
  .rotate-180 {
    transform: rotate(180deg);
  }
</style>
  