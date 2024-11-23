<template>
        <AccordionContainer
        :child="true"
        :title="titleOne" 
        :isOpen="activeAccordion == 1"
        @toggle="handleToggle(1)"
        >
            <OrderList/>
        </AccordionContainer>
        <AccordionContainer
        :child="true"
        :title="titleTwo" 
        :isOpen="activeAccordion == 2"
        @toggle="handleToggle(2)"
        :req="false"
        >
            <ImageOrder/>
        </AccordionContainer>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import AccordionContainer from '../AccordionContainer.vue';
import OrderList from '../order/OrderList.vue';
import ImageOrder from '../order/ImageOrder.vue';

const activeAccordion = ref<number | null>(0);
const titleOne=ref<string>("لیست")
const titleTwo=ref<string>("عکس سفارش ها")

const handleToggle = (id: number) => {
    activeAccordion.value = activeAccordion.value === id ? null : id;
};

</script>
