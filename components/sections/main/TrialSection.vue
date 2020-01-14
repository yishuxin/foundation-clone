<template>
  <section :class="bgColor" class="py-10 sm:my-16  lg:py-24">
    <div class="mx-4 sm:flex items-center lg:mx-20">
      <div class="sm:w-1/3 sm:mx-8" v-scroll-reveal="{ delay: 300 }">
        <img class="mx-auto" src="~assets/imgs/rush.png" alt />
      </div>

      <div class="sm:w-2/3" v-scroll-reveal>
        <div>
          <h1
            class="mt-4 text-5xl leading-none tracking-tighter w-2/3 sm:w-full"
          >
            Start your free trial.
          </h1>
          <p class="text-xl my-4">
            Get notified about company updates, news and blog posts. We hate
            spam.
          </p>
        </div>
        <div>
          <form
            class="flex flex-col sm:flex-row sm:items-center lg:justify-start"
          >
            <input
              class="mb-4 border border-gray-200 rounded py-2 sm:mb-0 sm:mr-4 sm:px-6 lg:px-24"
              type="text"
              placeholder="Enter Your Email"
            />
            <div>
              <base-button width="w-full">Subscribe</base-button>
            </div>
          </form>
        </div>
        <p class="text-sm text-gray-600 mt-2">
          Free 14-day trial · Easy setup · Cancel any time. Check out Terms of
          Use.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from "@/components/Elements/BaseButton.vue";
export default {
  props: {
    bgColor: {
      type: String,
      default: "white"
    }
  },
  components: {
    BaseButton
  }
};
</script>

<style></style>
