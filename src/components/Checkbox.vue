<template>
    <div class="form-control my-3">
        <label class="cursor-pointer flex gap-x-2 items-center">
          <input
            type="checkbox"
            class="checkbox checkbox-success border-2"
            v-model="isChecked"
          />
          <span class="label-text font-semibold">
            {{ label }}        
        </span>
        </label>
      </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';

  const {label} = defineProps({
    label:{
        type:String
    }
  })
  
  const isChecked = ref(false);
  </script>
  