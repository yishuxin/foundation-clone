<template>
  <div
    class="relative rounded-lg transition-fast hover:border-transparent hover:bg-white hover:shadow-md border border-gray-400 mb-4  md:mx-2"
    :class="plan.onSale ? 'md:rounded-t-none' : ''"
  >
    <figure class="border-b border-gray-300 ">
      <div
        class="sale-banner shadow-sm  md:rounded-lg text-center leading-relaxed p-2 border-b border-gray-400  md:rounded-b-none md:border md:border-b-0 md:border-gray-400"
        v-if="plan.onSale"
      >
        <h4>
          <span class="text-indigo-500">Save 30% </span
          ><span class="text-gray-500">with this plan</span>
        </h4>
      </div>
      <img class="h-48 w-auto mx-auto mt-6 mb-6" :src="plan.imgUrl" alt="" />
      <figcaption
        class="text-center mx-12"
        v-scroll-reveal="{ delay: plan.id * 100 }"
      >
        <h1 class="text-2xl font-bold my-1">{{ plan.category }}</h1>
        <p class="text-left mb-4">
          {{ plan.intro }}
        </p>
        <p class="my-4 text-lg">$ {{ plan.price }} <span>/mo</span></p>
      </figcaption>
      <div class="flex items-center justify-center mb-8">
        <base-button class="mx-8" width="w-1/2">Try for Free</base-button>
      </div>
    </figure>

    <div class="flex items-center justify-center my-8 mx-8 md:my-4">
      <ul class="flex-col" v-scroll-reveal="{ delay: plan.id * 200 }">
        <li
          class="flex items-center my-3"
          v-for="(item, index) in plan.detailList"
          :key="index"
        >
          <img
            class="h-4 w-4 mr-4"
            src="https://i.imgur.com/hpODD8V.png"
            alt=""
            srcset=""
          />
          <h4>{{ item }}</h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/elements/BaseButton.vue";
export default {
  components: {
    BaseButton
  },
  props: {
    plan: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
@media (min-width: 768px) {
  .sale-banner {
    position: absolute;
    width: 100.5%;
    transform: translateY(-155%);
    margin-left: -1px;
    margin-right: 2px;
  }
}
</style>
