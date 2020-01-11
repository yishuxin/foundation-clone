<template>
  <footer class="mx-4 px-2">
    <div class="lg:flex lg:items-center lg:border-b">
      <Brand class="lg:w-1/2" />
      <div class="sm:flex justify-around">
        <div class="my-4 lg:mx-8" v-for="(brand, index) in brands" :key="index">
          <h1 class="font-bold text-xl mb-3">{{ brand.title }}</h1>
          <ul>
            <li
              class="my-1 text-gray-700"
              v-for="(item, index) in brand.list"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="lg:flex lg:justify-between lg:items-center">
      <div class="my-4 mx-auto text-center sm:w-1/2 lg:mx-0 lg:w-64">
        <ul class="flex sm:justify-around">
          <li class="mr-4">Terms</li>
          <li class="mr-4">Privacy</li>
          <li class="mr-4">Licence</li>
        </ul>
      </div>
      <div class="my-4 mb-8 mx-auto sm:w-1/2 lg:mx-0 lg:w-64 lg:mb-4">
        <ul class="flex sm:justify-around">
          <li class="mr-4">
            <img src="@/static/imgs/svg/icon-twitter.svg" alt />
          </li>
          <li class="mr-4">
            <img src="@/static/imgs/svg/icon-facebook.svg" alt />
          </li>
          <li class="mr-4">
            <img src="@/static/imgs/svg/icon-linkedin.svg" alt />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import Brand from "@/components/sections/Brand.vue";
export default {
  components: {
    Brand
  },
  data() {
    return {
      brands: [
        {
          title: "Product",
          list: [
            "Acquire Users",
            "Content Marketing",
            "Website Templates",
            "Customer Management",
            "Virtual Inbox"
          ]
        },
        {
          title: "Company",
          list: ["About Foundation", "Brand Guidelines", "Press Kit", "Support"]
        }
      ],
      logos: []
    };
  }
};
</script>

<style></style>
