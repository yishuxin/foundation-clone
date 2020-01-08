<template>
  <footer class="mx-4 px-2">
    <div class="my-4 sm:flex sm:flex-row" v-for="(brand, index) in brands" :key="index">
      <div>
        <h1 class="font-bold text-xl">{{ brand.title }}</h1>
        <ul>
          <li class="my-1 text-gray-700" v-for="(item, index) in brand.list" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>

    <div class="my-4">
      <ul class="flex">
        <li class="mr-4">Terms</li>
        <li class="mr-4">Privacy</li>
        <li class="mr-4">Licence</li>
      </ul>
    </div>
    <div class="mt-4 mb-8">
      <ul class="flex">
        <li class="mr-4">
          <img src="../../static/imgs/icon-twitter.svg" alt />
        </li>
        <li class="mr-4">
          <img src="../../static/imgs/icon-facebook.svg" alt />
        </li>
        <li class="mr-4">
          <img src="../../static/imgs/icon-linkedin.svg" alt />
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
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
