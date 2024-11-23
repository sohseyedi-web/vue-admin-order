<template>
        <RowDetails :title="toPersianNumbersWithComma('50000')" price="تومان">
            <Checkbox label="مشتری مایل است سفارش به صورت تکشویی انجام شود"/>
        </RowDetails>
        <RowDetails :title="toPersianNumbersWithComma('30000')" price="تومان">
            <Checkbox label="سفارش به صورت اکسپرس انجام شود"/>
        </RowDetails>
        <RowDetails title="زمان تحویل سفارش ها حداکثر 3 روز بعد از ثبت میباشد.">
            <Checkbox label="دریافت سفارش در زمان دیگر"/>
        </RowDetails>
</template>
<script setup lang="ts">
import RowDetails from '../../ui/RowDetails.vue';
import { toPersianNumbersWithComma } from '../../utils/toPersianNumber';
import Checkbox from '../Checkbox.vue';
</script>
