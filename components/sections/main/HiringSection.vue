<template>
  <section class="mx-4 my-8 sm:mx-20">
    <div v-scroll-reveal.reset>
      <h1 class="text-5xl leading-none tracking-tighter sm:text-center sm:mb-6">
        We're hiring
      </h1>
      <p class="text-left text-xl my-4 sm:mb-6 lg:text-center">
        We’re a team of lifelong learners. We’re equal parts left and right
        brained.
      </p>
      <div class="flex justify-center items-center sm:mx-auto">
        <base-button
          class="mx-32 p-4 lg:w-auto"
          width="w-full"
          textColor="text-white"
          >More about company</base-button
        >
      </div>

      <div class="mt-8 sm:mx-12 lg:mx-48">
        <div
          v-scroll-reveal.reset="{ delay: 200 }"
          class="flex justify-around border rounded-lg shadow-sm h-24 mb-4 lg:h-16"
        >
          <div
            class="flex-1 flex flex-col justify-center lg:flex-row lg:items-center lg:justify-around"
          >
            <h3 class="text-2xl font-bold text-center">Front-end Developer</h3>
            <h4 class="text-lg text-gray-500 text-center mt-2">LA / Remote</h4>
          </div>
          <div
            class="p-4 bg-gray-500 flex items-center rounded-lg lg:bg-gray-100 lg:mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
            >
              <polygon points="0 10.59 4.58 6 0 1.41 1.41 0 7.41 6 1.41 12" />
            </svg>
          </div>
        </div>

        <div
          v-scroll-reveal.reset="{ delay: 400 }"
          class="flex justify-around border rounded-lg shadow-sm h-24 mb-4 lg:h-16"
        >
          <div
            class="flex-1 flex flex-col justify-center lg:flex-row lg:items-center lg:justify-around"
          >
            <h3 class="text-2xl font-bold text-center">Community Manager</h3>
            <h4 class="text-lg text-gray-500 text-center mt-2">
              LA / Full-time
            </h4>
          </div>
          <div
            class="p-4 bg-gray-500 flex items-center rounded-lg lg:bg-gray-100 lg:mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
            >
              <polygon points="0 10.59 4.58 6 0 1.41 1.41 0 7.41 6 1.41 12" />
            </svg>
          </div>
        </div>

        <div
          v-scroll-reveal.reset="{ delay: 600 }"
          class="flex justify-around border rounded-lg shadow-sm h-24 mb-4 lg:h-16"
        >
          <div
            class="flex-1 flex flex-col justify-center lg:flex-row lg:items-center lg:justify-around"
          >
            <h3 class="text-2xl font-bold text-center">UX/UI Designer</h3>
            <h4 class="text-lg text-gray-500 text-center mt-2">LA / Remote</h4>
          </div>
          <div
            class="p-4 bg-gray-500 flex items-center rounded-lg lg:bg-gray-100 lg:mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
            >
              <polygon points="0 10.59 4.58 6 0 1.41 1.41 0 7.41 6 1.41 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from "@/components/elements/BaseButton.vue";
export default {
  components: {
    BaseButton
  }
};
</script>

<style></style>
