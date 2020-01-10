<template>
  <header>
    <div class="flex justify-between items-center h-16 shadow lg:hidden">
      <div class="flex w-2/3 items-center">
        <div class="ml-2">
          <img class="h-12 w-12" src="../../static/imgs/foundation@2x.jpg" alt />
        </div>
        <h1 class="ml-4 text-xl font-bold text-gray-700">Foundation</h1>
      </div>
      <div class="w-1/3 flex justify-between">
        <div></div>
        <div class="border-l border-gray-500 h-16 w-16 flex justify-center items-center">ham</div>
      </div>
    </div>

    <div class="hidden p-4 lg:bg-skin-pink lg:flex justify-between items-center lg:block">
      <div class="flex">
        <div class="ml-2 mr-4">
          <img class="h-12 w-12 rounded-lg shadow-md" src="../../static/imgs/foundation@2x.jpg" alt />
        </div>
        <div>
          <nuxt-link to="/">
            <h1 class="font-bold text-lg text-gray-100">Foundation</h1>
            <h1 class="text-indigo-500">Startup Landing Template</h1>
          </nuxt-link>
        </div>
      </div>

      <nav class="p-6 transition-all">
        <ul class="flex items-center">
          <nuxt-link to>
            <li
              class="transition-fast mx-10 font-bold text-lg text-gray-100 hover:text-indigo-500"
            >Home</li>
          </nuxt-link>
          <nuxt-link to>
            <li
              class="transition-fast mx-10 font-bold text-lg text-gray-100 hover:text-indigo-500"
            >Stories</li>
          </nuxt-link>
          <nuxt-link to>
            <li
              class="transition-fast ml-10 mr-16 font-bold text-lg text-gray-100 hover:text-indigo-500"
            >
              <div class="flex items-center">
                Libiary
                <svg
                  class="fill-current h-3 w-3 ml-1 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                >
                  <polygon points=".94 0 4 3.09 7.06 0 8 .951 4 5 0 .951" />
                </svg>
              </div>
            </li>
          </nuxt-link>
          <nuxt-link to>
            <my-button
              class="mx-10 px-6 hover:text-indigo-500 hover:bg-gray-100"
              width="w-full"
            >Get Started</my-button>
          </nuxt-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import MyButton from "@/components/Elements/MyButton.vue";
export default {
  components: {
    "my-button": MyButton
  }
};
</script>

<style></style>
