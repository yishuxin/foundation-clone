<template>
  <section class="mx-4 my-8 sm:mx-20">
    <div>
      <h1 class="text-5xl leading-none tracking-tighter sm:text-center sm:mb-6">We're hiring</h1>
      <p class="text-left text-xl my-4 sm:mb-6">
        We’re a team of lifelong learners. We’re equal parts left and right
        brained.
      </p>
      <div class="sm:flex justify-center">
        <my-button width="w-1/3" textColor="text-white">More about company</my-button>
      </div>

      <div class="mt-8 sm:mx-12">
        <div class="flex justify-around border shadow-sm h-32 mb-4">
          <div class="flex-1 flex flex-col justify-center">
            <h3 class="text-2xl font-bold text-center">Front-end Developer</h3>
            <h4 class="text-lg text-gray-500 text-center mt-2">LA / Remote</h4>
          </div>
          <div class="p-4 bg-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
              <polygon points="0 10.59 4.58 6 0 1.41 1.41 0 7.41 6 1.41 12" />
            </svg>
          </div>
        </div>

        <div class="flex justify-around border shadow-sm h-32 mb-4">
          <div class="flex-1 flex flex-col justify-center">
            <h3 class="text-2xl font-bold text-center">Community Manager</h3>
            <h4 class="text-lg text-gray-500 text-center mt-2">NY / Full-time</h4>
          </div>
          <div class="p-4 bg-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
              <polygon points="0 10.59 4.58 6 0 1.41 1.41 0 7.41 6 1.41 12" />
            </svg>
          </div>
        </div>

        <div class="flex justify-around border shadow-sm h-32 mb-4">
          <div class="flex-1 flex flex-col justify-center">
            <h3 class="text-2xl font-bold text-center">UX/UI Desiger</h3>
            <h4 class="text-lg text-gray-500 text-center mt-2">NY / Full-time</h4>
          </div>

          <div class="p-4 bg-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
              <polygon points="0 10.59 4.58 6 0 1.41 1.41 0 7.41 6 1.41 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyButton from "@/components/Elements/MyButton.vue";
export default {
  components: {
    "my-button": MyButton
  }
};
</script>

<style>
</style>