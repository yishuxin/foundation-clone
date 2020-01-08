<template>
  <button
    :class="[color, width, textColor]"
    class="mx-auto p-2 rounded shadow font-bold"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "bg-indigo-600"
    },
    width: {
      type: String,
      default: "w-24"
    },
    textColor: {
      type: String,
      default: "text-white"
    }
  }
};
</script>

<style></style>
