<template>
  <section class="my-8 bg-gray-100 lg:py-8" v-scroll-reveal>
    <div class="mx-4 sm:flex lg:mx-16 lg:justify-between">
      <div class="mb-6 sm:mr-6">
        <h1 class="text-2xl font-bold lg:text-3xl lg:mb-4">What is it about?</h1>
        <p class="lg:text-xl lg:w-3/4">
          Building a website for a startup that looks amazing is not a rocket
          science anymore.
        </p>
      </div>
      <div class="mb-10">
        <h1 class="text-2xl font-bold lg:text-3xl lg:mb-4">Who is it for?</h1>
        <p class="lg:text-xl">Startups, small companies and teams, entrepreneurs and web developers.</p>
      </div>
    </div>
  </section>
</template>

<script>
import BrandPic from "@/components/UI/BrandPic.vue";
export default {
  components: {
    BrandPic
  }
};
</script>

<style></style>
