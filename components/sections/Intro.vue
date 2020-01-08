<template>
  <section class="my-8 bg-gray-100 py-8">
    <div class="mx-4 sm:flex">
      <div class="mb-6 sm:mr-6">
        <h1 class="text-2xl font-bold">What is it about?</h1>
        <p>
          Building a website for a startup that looks amazing is not a rocket
          science anymore.
        </p>
      </div>
      <div class="mb-10">
        <h1 class="text-2xl font-bold">Who is it for?</h1>
        <p>Startups, small companies and teams, entrepreneurs and web developers.</p>
      </div>
    </div>
    <BrandPic />
  </section>
</template>

<script>
import BrandPic from "@/components/Elements/BrandPic.vue";
export default {
  components: {
    BrandPic
  }
};
</script>

<style></style>
