<template>
  <div class="bg-gray-100 text-gray-700">
    <landing-section />
    <intro-section />
    <customer-section />
    <team-section />

    <communication-section />

    <visitors-section />

    <slider-section />

    <hiring-section />

    <trial-section />

    <brand-section />
  </div>
</template>

<script>
import Landing from "@/components/sections/Landing.vue";
import Intro from "@/components/sections/Intro.vue";
import Customer from "@/components/sections/Customer.vue";
import Team from "@/components/sections/Team.vue";
import Communication from "@/components/sections/Communication.vue";
import Visitors from "@/components/sections/Visitors.vue";
import Slider from "@/components/sections/Slider.vue";
import Hiring from "@/components/sections/Hiring.vue";
import Trial from "@/components/sections/Trial.vue";
import Brand from "@/components/sections/Brand.vue";

import MyButton from "@/components/Elements/MyButton.vue";
import HomeSlider from "@/components/Sliders/HomeSlider.vue";

export default {
  components: {
    "landing-section": Landing,
    "intro-section": Intro,
    "customer-section": Customer,
    "team-section": Team,
    "communication-section": Communication,
    "visitors-section": Visitors,
    "slider-section": Slider,
    "hiring-section": Hiring,
    "trial-section": Trial,
    "brand-section": Brand,
    MyButton,
    HomeSlider
  }
};
</script>

<style></style>
