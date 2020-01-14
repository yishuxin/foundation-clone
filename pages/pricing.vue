<template>
  <div class="text-gray-700">
    <plan-section />
    <support-section />
    <question-section />
    <trial-section bgcolor="bg-indigo-100" />
  </div>
</template>

<script>
import PlanSection from "@/components/sections/pricing/PlanSection.vue";
import SupportSection from "@/components/sections/pricing/SupportSection.vue";
import QuestionSection from "@/components/sections/pricing/QuestionSection.vue";
import TrialSection from "@/components/sections/main/TrialSection.vue";
export default {
  layout: "pricing",

  components: {
    PlanSection,
    SupportSection,
    QuestionSection,
    TrialSection
  }
};
</script>

<style>
.page-enter-active {
  animation: acrossIn 4s ease-out both;
}
.page-leave-active {
  animation: acrossOut 6s ease-in both;
}
@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
