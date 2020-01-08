<template>
  <div class="my-4">
    <h3 class="text-indigo-500 font-bold text-xl mb-2 sm:mb-6">
      <slot name="title"></slot>
    </h3>
    <h1 class="text-5xl font-bold leading-none tracking-tighter w-3/4 sm:w-full sm:mb-6">
      <slot name="subTitle"></slot>
    </h1>
    <p class="my-4 text-xl font-bold sm:text-left sm:ml-10 sm:mb-6">
      <slot name="content"></slot>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
