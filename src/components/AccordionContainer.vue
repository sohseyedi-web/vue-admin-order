<template>
    <Box dir="rtl" :class="{
    'bg-[#D8DBBD]': !child,
    'bg-[#eee]' : child
    }">
      <div 
        class="flex items-center justify-between text-zinc-800 cursor-pointer"
        @click="$emit('toggle')"
      >
        <div class="relative">
          <h3 class="lg:text-xl text-lg font-semibold">{{ title }}</h3>
          <StarIcon v-if="req" class="size-3 absolute text-green-500 -top-0 -left-4"/>
        </div>
        <ChevronDownIcon
          class="lg:size-8 size-6 transition-transform"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
      <div 
        v-if="isOpen"
        class="overflow-hidden transition-all h-auto duration-300"
      >
        <slot></slot>
      </div>
    </Box>
</template>
  
<script setup lang="ts">
import Box from './Box.vue';
import { ChevronDownIcon, StarIcon } from '@heroicons/vue/20/solid';
  
  const { title ,isOpen,child,} = defineProps({
    title: {
      type: String,
      required: true
    },
    isOpen: {
    type: Boolean,
    required: true,
  },
  child:{
    type: Boolean,
    required: true,
  },
  req:{
    type: Boolean,
    default : true
  },
  });

</script>
  
<style scoped>
  .rotate-180 {
    transform: rotate(180deg);
  }
</style>
  