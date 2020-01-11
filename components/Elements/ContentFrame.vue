<template>
  <div class="my-4 lg:my-0">
    <h3 class="text-indigo-500 font-bold text-xl mb-2 sm:mb-6">
      <slot name="title"></slot>
    </h3>
    <h1
      class="text-4xl font-bold leading-none tracking-tighter w-3/4 sm:w-full sm:mb-6 lg:text-5xl"
    >
      <slot name="subTitle"></slot>
    </h1>
    <div class="lg:flex justify-center items-center">
      <p class="my-4 text-lg font-bold sm:text-left sm:mb-6">
        <slot name="content"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
