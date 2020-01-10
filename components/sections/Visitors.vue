<template>
  <section class="py-8 mt-4 bg-blue-100">
    <div class="mx-4 sm:mx-20 lg:flex-col">
      <content-frame class="sm:text-center">
        <template #title>Engage Visitors</template>
        <template #subTitle>Understand your audience</template>
        <template #content>
          Early stage company? Eligible applicants get all of our products for
          just $49 a month.
        </template>
      </content-frame>

      <div class="flex justify-center mx-auto">
        <my-button
          class="m-4 mr-4 sm:w-1/3 sm:m-2 lg:w-32"
          color="bg-indigo-500"
          width="w-full"
          textColor="text-white"
        >Get Started</my-button>
        <my-button
          class="m-4 sm:w-1/3 sm:m-2 lg:w-32"
          color="bg-white"
          width="w-full"
          textColor="text-indigo-500"
        >Learn More</my-button>
      </div>

      <div
        class="flex flex-col items-center justify-center my-10 w-full sm:flex-row sm:flex-wrap lg:flex-no-wrap lg:justify-around"
      >
        <div
          class="w-full p-12 shadow rounded-lg hover:bg-indigo-500 my-4 bg-gray-100 sm:w-64 sm:mr-16 sm:p-4 lg:mr-4"
        >
          <img class="w-40 h-56 mx-auto p-2" src="../../static/imgs/rush-2@2x.png" alt />
          <h1 class="text-center text-lg font-bold">Developers</h1>
        </div>
        <div
          class="w-full p-12 shadow rounded-lg hover:bg-indigo-500 my-4 bg-gray-100 sm:w-64 sm:mr-3 sm:p-4"
        >
          <img class="w-40 h-56 mx-auto p-2" src="../../static/imgs/rush-9@2x.png" alt />
          <h1 class="text-center text-lg font-bold">Developers</h1>
        </div>
        <div
          class="w-full shadow rounded-lg p-12 hover:bg-indigo-500 my-4 bg-gray-100 sm:w-64 sm:mr-16 sm:p-4 lg:mr-4"
        >
          <img class="w-40 h-56 mx-auto p-2" src="../../static/imgs/rush-13@2x.png" alt />
          <h1 class="text-center text-lg font-bold">Developers</h1>
        </div>
        <div
          class="w-full shadow rounded-lg p-12 hover:bg-indigo-500 my-4 bg-gray-100 sm:w-64 sm:mr-3 sm:p-4"
        >
          <img class="w-40 h-56 mx-auto p-2" src="../../static/imgs/rush-14@2x.png" alt />
          <h1 class="text-center text-lg font-bold">Developers</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContentFrame from "@/components/Elements/ContentFrame.vue";
import MyButton from "@/components/Elements/MyButton.vue";
export default {
  components: {
    "content-frame": ContentFrame,
    "my-button": MyButton
  }
};
</script>

<style>
</style>