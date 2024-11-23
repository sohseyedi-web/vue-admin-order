<template>
    <section class="flex items-center gap-x-3 my-2 flex-wrap">
        <div class="w-[150px] cursor-pointer flex-col rounded-xl bg-white flex items-center justify-center h-[150px]">
            <PlusIcon class="size-10 text-zinc-800"/>
            <span class="text-zinc-800 font-semibold text-lg">اضافه کردن <br>عکس سفارش</span>
        </div>
    </section>
</template>
<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/20/solid';
</script>
