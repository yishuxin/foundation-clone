<template>
  <div class="bg-white border-gray-300 border-b">
    <brand-pic />
    <home-slider />
    <figure-frame class="lg:hidden">
      <template #figure>
        <img class="h-auto w-64" src="../../static/imgs/rush-1.png" alt />
      </template>
      <template #figureCaption>
        <p>A better way to acquire new users</p>
      </template>
    </figure-frame>

    <figure-frame class="hidden lg:block lg:relative lg:w-auto">
      <template #figure>
        <img
          class="h-auto w-80 lg:absolute lg:right-0 lg:bottom-0"
          src="../../static/imgs/rush-1.png"
          alt
        />
      </template>
    </figure-frame>
  </div>
</template>

<script>
import BrandPic from "@/components/Elements/BrandPic.vue";
import HomeSlider from "@/components/Sliders/HomeSlider.vue";
import FigureFrame from "@/components/Elements/FigureFrame.vue";
export default {
  components: {
    "brand-pic": BrandPic,
    "home-slider": HomeSlider,
    "figure-frame": FigureFrame
  }
};
</script>

<style>
</style>