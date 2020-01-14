<template>
  <div class="text-gray-700 pb-6 border-gray-400 border-b">
    <div>
      <div class="mx-4 mx-auto bg-teal-300">
        <h1
          class="font-logo text-5xl text-center pb-6 border-b border-gray-300 md:text-6xl md:py-10"
        >
          Contact Us
        </h1>
      </div>
      <form class="text-center my-10">
        <div class="my-3">
          <label class="block mb-2 text-gray-600">Your Email Address:</label>
          <input
            class="mb-2 w-72 appearance-none p-2 bg-gray-100 border border-gray-200 text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-300 md:w-104"
            type="text"
            placeholder="Something@website.com"
          />
        </div>
        <div class="my-3">
          <label class="block mb-2 text-gray-600">Subject:</label>
          <input
            class="mb-2 w-72 appearance-none p-2 bg-gray-100 border border-gray-200 text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-300 md:w-104"
            type="text"
            placeholder="What's your concern?"
          />
        </div>
        <div class="my-3">
          <label class="block mb-2 text-gray-600">Message:</label>
          <textarea
            class="mb-2 w-72 appearance-none p-2 bg-gray-100 border border-gray-200 text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-300 md:w-104"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <base-button width="w-72">Send a Message</base-button>
      </form>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/elements/BaseButton.vue";
export default {
  layout: "contact",
  components: {
    BaseButton
  }
};
</script>

<style></style>
