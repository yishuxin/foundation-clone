<template>
  <div class="bg-white border-gray-300 border-b">
    <brand-pic />
    <home-slider />
    <figure-frame>
      <template #figure>
        <img class="h-auto w-64" src="../../static/imgs/rush-16@2x.png" alt />
      </template>
      <template #figureCaption>
        <p>A better way to acquire new users</p>
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