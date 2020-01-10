<template>
  <section class="py-8 mx-4">
    <div class="sm:flex lg:mx-20 lg:items-center lg:mb-16">
      <div class="sm:w-1/2">
        <content-frame>
          <template #title>Communicate Better</template>
          <template #subTitle>Built for busy small teams</template>
          <template #content>
            Three products that can be used independently or combined together for
            your company’s needs.
          </template>
        </content-frame>

        <div class="flex justify-center mt-4 mb-8 sm:w-1/2 lg:w-1/4">
          <my-button width="w-full" color="bg-indigo-600" textColor="text-white">Get Started</my-button>
        </div>
      </div>

      <figure-frame class="sm:w-1/2">
        <template #figure>
          <img class="h-auto w-64 lg:w-104" src="../../static/imgs/rush-16@2x.png" alt />
        </template>
        <template #figureCaption>
          <p>A better way to acquire new users</p>
        </template>
      </figure-frame>
    </div>

    <div class="text-lg sm:flex items-start justify-around lg:mx-20 lg:items-center">
      <div class="m-2 p-2 border-r lg:ml-0">
        <h1 class="font-bold lg:text-xl lg:text-gray-800 lg:mb-2">Subscriptions.</h1>
        <p>
          Foundation works with
          the tools and services you already use every day.
        </p>
        <a class="inline-block text-blue-600 underline py-3" href>Learn more about subscriptions</a>
      </div>
      <div class="m-2 p-2 border-r lg:ml-0">
        <h1 class="font-bold lg:text-xl lg:text-gray-800 lg:mb-2">Felxible Hours.</h1>
        <p>
          Get started with our
          simple snippet of JavaScript or easy to install SDKs for iOS and
          Android.
        </p>
        <a class="inline-block text-blue-600 underline py-3" href>Get more info about hours</a>
      </div>
      <div class="m-2 p-2 lg:ml-0">
        <h1 class="font-bold lg:text-xl lg:text-gray-800 lg:mb-2">Fast Communication.</h1>
        <p>
          We offer measures
          like 2FA and SSO to ensure the safety of your data.
        </p>
        <a class="inline-block text-blue-600 underline py-3" href>Communication guidelines</a>
      </div>
    </div>
  </section>
</template>

<script>
import ContentFrame from "@/components/Elements/ContentFrame.vue";
import MyButton from "@/components/Elements/MyButton.vue";
import FigureFrame from "@/components/Elements/FigureFrame.vue";

export default {
  components: {
    "content-frame": ContentFrame,
    "my-button": MyButton,
    "figure-frame": FigureFrame
  }
};
</script>

<style>
</style>