<template>
            <button class="size-8 rounded-xl bg-green-600 flex items-center justify-center">
                <PlusIcon class="size-7"/>
              </button>
              <div class="flex items-center gap-x-1 text-zinc-800">
                <span>{{ toPersianNumbers(String(value)) }}</span>
                <span>{{ label }}</span>
              </div>
              <button :disabled="value === 0" class="size-8 rounded-xl bg-green-600 flex items-center justify-center">
                <MinusIcon class="size-7"/>
              </button>
</template>
<script setup lang="ts">
import { MinusIcon, PlusIcon } from '@heroicons/vue/20/solid';
import { toPersianNumbers } from '@/utils/toPersianNumber';

const {value,label} = defineProps({
    value:{
        type : Number,
        required:true
    },
    label:{
        type : String,
        required:true
    },
})
</script>
