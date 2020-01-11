<template>
  <header>
    <div>
      <div class="flex justify-between items-center h-16 shadow lg:hidden">
        <div class="flex w-2/3 items-center">
          <div class="ml-2">
            <img class="h-12 w-12" src="../../static/imgs/foundation@2x.jpg" alt />
          </div>
          <h1 class="ml-4 text-xl font-bold text-gray-700">Foundation</h1>
        </div>
        <div class="w-1/3 flex justify-between">
          <div></div>
          <div class="border-l border-gray-500 h-16 w-16 flex justify-center items-center">
            <svg
              @click="openMainDropDown"
              v-if="!isDropdownOpen"
              class="fill-current text-gray-700 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M 0 2 L 0 4 L 24 4 L 24 2 Z M 0 11 L 0 13 L 24 13 L 24 11 Z M 0 20 L 0 22 L 24 22 L 24 20 Z"
              />
            </svg>
            <svg
              v-if="isDropdownOpen"
              @click="openMainDropDown"
              class="fill-current text-gray-700 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100.353 100.353"
            >
              <path
                d="M99.574 97.399L52.061 49.884 99.345 2.6A1.456 1.456 0 0097.286.54L50.002 47.824 2.721.54A1.456 1.456 0 10.662 2.6l47.281 47.284L.428 97.399a1.456 1.456 0 102.06 2.06l47.515-47.515 47.513 47.515a1.453 1.453 0 002.06 0 1.458 1.458 0 00-.002-2.06z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div v-if="isDropdownOpen" class="lg:hidden flex items-center mx-8 sm:flex-col">
        <ul>
          <nuxt-link to>
            <li
              class="transition-fast my-2 font-bold text-lg text-gray-700 hover:text-indigo-500"
            >Home</li>
          </nuxt-link>
          <nuxt-link to>
            <li
              class="transition-fast my-2 font-bold text-lg text-gray-700 hover:text-indigo-500"
            >Stories</li>
          </nuxt-link>
          <nuxt-link to>
            <li @click="openSubNav" class="transition-fast my-2 font-bold text-lg text-gray-700">
              <div class>
                <div class="flex items-center hover:text-indigo-500">
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

                <div v-if="isSubNavOpen">
                  <ul>
                    <nuxt-link to>
                      <li class="text-base my-4">
                        <h3 class="hover:text-skin-pink">Acquire Users</h3>
                        <p class="text-sm">Work with tools and service you use.</p>
                      </li>
                    </nuxt-link>
                    <nuxt-link to>
                      <li class="text-base my-4">
                        <h3 class="hover:text-skin-pink">Engage Customers</h3>
                        <p class="text-sm">Get started with our simple snippet of Javascript.</p>
                      </li>
                    </nuxt-link>
                    <nuxt-link to>
                      <li class="text-base my-4">
                        <h3 class="hover:text-skin-pink">Book Appointments</h3>
                        <p class="text-sm">We offer measures like 2FA to ensure saftey.</p>
                      </li>
                    </nuxt-link>
                    <nuxt-link to>
                      <li class="text-base my-4">
                        <h3 class="hover:text-skin-pink">Generate Leads</h3>
                        <p class="text-sm">Become a better desigener by learning this course.</p>
                      </li>
                    </nuxt-link>
                  </ul>
                </div>
              </div>
            </li>
          </nuxt-link>
        </ul>
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
  },
  data() {
    return {
      isDropdownOpen: false,
      isSubNavOpen: false
    };
  },
  methods: {
    openMainDropDown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    openSubNav() {
      this.isSubNavOpen = !this.isSubNavOpen;
    }
  }
};
</script>

<style></style>
