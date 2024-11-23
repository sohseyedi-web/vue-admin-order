<template>
    <div class="flex lg:items-center gap-2 lg:flex-row flex-col">
        <slot></slot>
        <p class="text-zinc-700 text-sm">({{ title }} {{ price }})</p>
    </div>
</template>
<script setup lang="ts">
    const {title,price} = defineProps({
        title:{
            type : String,
            required:true
        },
        price:{
            type : String,
        }
    })
</script>
