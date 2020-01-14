<template>
  <header>
    <div>
      <div class="flex justify-between items-center h-16 shadow lg:hidden">
        <div class="flex w-2/3 items-center">
          <div class="ml-2">
            <img class="h-12 w-12" src="../../assets/imgs/foundation.jpg" alt />
          </div>
          <h1 class="ml-4 text-xl font-bold text-gray-700 font-logo">Foundation</h1>
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
      <transition
        enter-active-class="transition-all transition-fastest ease-out"
        leave-active-class="transition-all transition-faster ease-in"
        enter-class="opacity-0"
        enter-to-class="opacity-100 "
        leave-class="opacity-100 "
        leave-to-class="opacity-0 "
      >
        <div v-if="isDropdownOpen" class="origin-top lg:hidden flex items-center mx-8 sm:flex-col">
          <ul>
            <nuxt-link to="/">
              <li
                class="transition-fast my-2 font-bold text-lg text-gray-700 hover:text-indigo-500"
              >Home</li>
            </nuxt-link>
            <nuxt-link to="/pricing">
              <li
                class="transition-fast my-2 font-bold text-lg text-gray-700 hover:text-indigo-500"
              >Pricing</li>
            </nuxt-link>
            <nuxt-link to="/contact">
              <li
                class="transition-fast my-2 font-bold text-lg text-gray-700 hover:text-indigo-500"
              >Contact</li>
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
      </transition>
    </div>
    <!-- Media query for lagrge screen -->
    <div :class="bgColor" class="hidden p-4 lg:flex justify-between items-center lg:block">
      <div class="flex">
        <div class="ml-2 mr-4">
          <img class="h-12 w-12 rounded-lg shadow-md" src="~/assets/imgs/foundation@2x.jpg" alt />
        </div>
        <div>
          <nuxt-link to="/">
            <h1 class="font-bold text-lg text-gray-100">Foundation</h1>
            <h1 class="text-indigo-500">Startup Landing Template</h1>
          </nuxt-link>
        </div>
      </div>

      <nav class="p-6 transition-all flex items-center relative">
        <ul class="flex">
          <li
            @click="setActiveLink(link)"
            v-for="(link, index) in navLinks"
            :key="index"
            :class="changeActiveLink(link)"
            class="transition-fast mx-6 font-bold text-lg text-gray-100"
          >
            <nuxt-link :to="{ name: link.goTo }">
              <div class="flex items-center">
                {{ link.name }}
                <div v-if="link.hasSVG">
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
              </div>
            </nuxt-link>
          </li>
        </ul>
        <!-- Libary Dropdown -->
        <transition
          enter-active-class="transition-all transition-fastest ease-out"
          leave-active-class="transition-all transition-faster ease-in"
          enter-class="opacity-0 scale-75"
          leave-to-class="opacity-0 scale-75"
        >
          <div
            v-on-clickaway="hideDropdown"
            v-if="isSubNavOpen"
            class="origin-top-right subdropdown absolute h-auto bg-gray-100 p-8 rounded shadow items-center justify-center"
          >
            <ul class="flex">
              <div class="px-6">
                <li class="text-base my-4">
                  <h3
                    class="text-indigo-500 hover:text-indigo-600 my-1 text-xl font-bold cursor-pointer"
                  >Acquire Users</h3>
                  <p>Work with all kinds of tools and service you use.</p>
                </li>

                <li class="text-base my-4">
                  <h3
                    class="text-indigo-500 hover:text-indigo-600 my-1 text-xl font-bold cursor-pointer"
                  >Engage Customers</h3>
                  <p>Get started with our simple snippet of Javascript.</p>
                </li>
              </div>
              <div>
                <li class="text-base my-4">
                  <h3
                    class="text-indigo-500 hover:text-indigo-600 my-1 text-xl font-bold cursor-pointer"
                  >Book Appointments</h3>
                  <p>We offer measures like 2FA to ensure saftey.</p>
                </li>

                <li class="text-base my-4">
                  <h3
                    class="text-indigo-500 hover:text-indigo-600 my-1 text-xl font-bold cursor-pointer"
                  >Generate Leads</h3>
                  <p>Become a better desigener by learning this course.</p>
                </li>
              </div>
            </ul>
          </div>
        </transition>
        <nuxt-link to>
          <base-button
            class="mx-10 px-6 hover:text-indigo-500 hover:bg-gray-100"
            width="w-full"
          >Get Started</base-button>
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton.vue";
import { directive as onClickaway } from "vue-clickaway";

export default {
  props: {
    bgColor: {
      type: String,
      default: "bg-white"
    },
    activeLink: { type: String, required: true }
  },
  directives: {
    onClickaway: onClickaway
  },
  components: {
    BaseButton
  },
  data() {
    return {
      navLinks: [
        { name: "Home", hasSVG: false, isActive: false, goTo: "index" },
        { name: "Pricing", hasSVG: false, isActive: false, goTo: "pricing" },
        { name: "Contact", hasSVG: false, isActive: false, goTo: "contact" },
        { name: "Libary", hasSVG: true, isActive: false }
      ],
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
    },
    setActiveLink(item) {
      if (item.hasSVG === true) {
        this.isSubNavOpen = !this.isSubNavOpen;
      }
    },
    hideDropdown() {
      this.isSubNavOpen = false;
      console.log(this.isSubNavOpen);
    },
    changeActiveLink(link) {
      if (link.name === "Libary") {
        return "text-gray-100";
      }
      if (link.name === this.activeLink) {
        return "text-indigo-500";
      }
    }
  },
  computed: {}
};
</script>

<style>
.subdropdown {
  top: 80px;
  max-width: 40rem;
  left: -3rem;
}
</style>
