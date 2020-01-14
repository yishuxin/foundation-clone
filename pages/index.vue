<template>
  <div class="bg-gray-100 text-gray-700">
    <landing-section />
    <intro-section v-scroll-reveal />
    <customer-section />
    <team-section v-scroll-reveal />
    <communication-section />
    <visitors-section />
    <slider-section />
    <hiring-section />
    <trial-section v-scroll-reveal />
  </div>
</template>

<script>
import LandingSection from "@/components/sections/main/LandingSection.vue";
import IntroSection from "@/components/sections/main/IntroSection.vue";
import CustomerSection from "@/components/sections/main/CustomerSection.vue";
import TeamSection from "@/components/sections/main/TeamSection.vue";
import CommunicationSection from "@/components/sections/main/CommunicationSection.vue";
import VisitorsSection from "@/components/sections/main/VisitorsSection.vue";
import SliderSection from "@/components/sections/main/SliderSection.vue";
import HiringSection from "@/components/sections/main/HiringSection.vue";
import TrialSection from "@/components/sections/main/TrialSection.vue";
import BrandSection from "@/components/sections/main/BrandSection.vue";

export default {
  transition: "page",
  components: {
    LandingSection,
    IntroSection,
    CustomerSection,
    TeamSection,
    CommunicationSection,
    VisitorsSection,
    SliderSection,
    HiringSection,
    TrialSection,
    BrandSection
  }
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 2s ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>
