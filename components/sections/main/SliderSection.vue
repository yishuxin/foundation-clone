<template>
  <div class="bg-white border-gray-300 border-b mx-auto">
    <brand-pic />
    <home-slider v-scroll-reveal.reset />
    <figure-frame class="lg:hidden">
      <template #figure>
        <img class="h-auto w-64" src="~assets/imgs/rush-1.png" alt />
      </template>
      <template #figureCaption>
        <p>A better way to acquire new users</p>
      </template>
    </figure-frame>

    <figure-frame class="hidden lg:block lg:relative lg:w-auto">
      <template #figure>
        <img
          class="h-auto w-80 lg:absolute lg:right-0 lg:bottom-0"
          src="~assets/imgs/rush-1.png"
          alt
        />
      </template>
    </figure-frame>
  </div>
</template>

<script>
import BrandPic from "@/components/elements/BrandPic.vue";
import HomeSlider from "@/components/elements/HomeSlider.vue";
import FigureFrame from "@/components/elements/frames/FigureFrame.vue";
export default {
  components: {
    BrandPic,
    HomeSlider,
    FigureFrame
  }
};
</script>

<style></style>
