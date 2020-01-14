<template>
  <section class="py-8 mx-4">
    <div class="sm:flex lg:mx-20 lg:items-center lg:mb-16">
      <div class="sm:w-1/2">
        <content-frame>
          <template #title>
            <h1 class="text-blue-500">Communicate Better</h1>
          </template>
          <template #subTitle>Built for busy small teams</template>
          <template #content>
            Three products that can be used independently or combined together
            for your company’s needs.
          </template>
        </content-frame>

        <div class="flex justify-center mt-4 mb-8 sm:w-1/2 lg:w-1/4">
          <base-button
            width="w-full"
            color="bg-indigo-600"
            textColor="text-white"
            >Get Started</base-button
          >
        </div>
      </div>

      <figure-frame class="sm:w-1/2">
        <template #figure>
          <img
            class="h-auto w-64 lg:w-104"
            src="~/assets/imgs/rush-16@2x.png"
            alt
          />
        </template>
        <template #figureCaption>
          <p>A better way to acquire new users</p>
        </template>
      </figure-frame>
    </div>

    <div class="text-lg sm:flex items-start justify-around lg:mx-20 ">
      <div class="m-2 p-2 border-r lg:ml-0" v-scroll-reveal.reset>
        <h1 class="font-bold lg:text-xl lg:text-gray-800 lg:mb-3">
          Subscriptions.
        </h1>
        <p>
          Foundation works with the tools and services you already use every
          day.
        </p>
        <a class="inline-block text-blue-600 underline py-1" href
          >Learn more about subscriptions</a
        >
      </div>
      <div
        class="m-2 p-2 border-r lg:ml-0"
        v-scroll-reveal.reset="{ delay: 200 }"
      >
        <h1 class="font-bold lg:text-xl lg:text-gray-800 lg:mb-3">
          Felxible Hours.
        </h1>
        <p>
          Get started with our simple snippet of JavaScript or easy to install
          SDKs for iOS and Android.
        </p>
        <a class="inline-block text-blue-600 underline py-1" href
          >Get more info about hours</a
        >
      </div>
      <div class="m-2 p-2 lg:ml-0" v-scroll-reveal.reset="{ delay: 400 }">
        <h1 class="font-bold lg:text-xl lg:text-gray-800 lg:mb-3">
          Fast Communication.
        </h1>
        <p>
          We offer measures like 2FA and SSO to ensure the safety of your data.
        </p>
        <a class="inline-block text-blue-600 underline py-1" href
          >Communication guidelines</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import ContentFrame from "@/components/elements/frames/ContentFrame.vue";
import BaseButton from "@/components/elements/BaseButton.vue";
import FigureFrame from "@/components/elements/frames/FigureFrame.vue";

export default {
  components: {
    ContentFrame,
    BaseButton,
    FigureFrame
  }
};
</script>

<style></style>
