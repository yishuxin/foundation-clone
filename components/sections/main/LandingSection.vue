<template>
  <section class="bg-skin-pink py-6">
    <div class="mx-4 lg:mx-16 lg:flex items-end">
      <div class="sm:w-2/3 lg:w-full lg:mr-8">
        <h1
          class="text-5xl py-4 font-bold leading-tight tracking-wide lg:text-6xl font-logo"
        >Build stunning websites & apps.</h1>
        <p class="text-xl my-2 lg:text-4xl">
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <div class="flex flex-col flex-shrink-0 justify-center my-6 sm:flex-row sm:my-4 sm:w-1/2">
          <base-button
            class="m-2 sm:mr-4"
            color="bg-indigo-500"
            width="w-full"
            textColor="text-white"
          >Get Started</base-button>
          <base-button
            class="m-2"
            color="bg-white"
            width="w-full"
            textColor="text-indigo-500"
          >Learn More</base-button>
        </div>
      </div>

      <div class="my-2 sm:-my-5 sm:p-4 lg:w-full">
        <img class="lg:hidden" src="~/assets/imgs/ouch.jpg" alt />
        <img class="hidden lg:block" src="~/assets/imgs/ouch@2x.jpg" alt />
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton.vue";
export default {
  components: {
    BaseButton
  }
};
</script>

<style></style>
