<template>
  <div class="flex flex-col items-center p-6" v-scroll-reveal="{ delay: 500 }">
    <slot name="figure"></slot>
    <slot name="figureCaption"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
