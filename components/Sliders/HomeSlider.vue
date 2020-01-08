<template>
  <carousel
    class="mx-4 sm:py-10"
    :per-page="1"
    :autoplay="true"
    :pagination-enabled="true"
    pagination-position="bottom-overlay"
    :centerMode="true"
    pagination-active-color="gray"
  >
    <slide class="my-8" v-for="(content, index) in sliderContents" :key="index">
      <h1 class="my-4 text-xl text-indigo-500 font-bold">{{ content.title }}</h1>
      <q class="text-xl">{{ content.quote }}</q>
      <h3 class="text-center mt-4 font-bold text-sm">{{ content.name }}</h3>
      <h3 class="text-center mb-4 font-bold text-sm text-gray-500">{{ content.role }}</h3>
    </slide>
  </carousel>
</template>

<script>
export default {
  data() {
    return {
      sliderContents: [
        {
          title:
            "Trusted by the world’s most innovative businesses – big and small",
          quote:
            "Comprehensive set of startup tools for all imaginable entrepreneurial needs. Create landing pages, send emails, find freelancers. Perfect for sales, marketing, and support",
          name: "Viella Malkovich",
          role: "Creative Director at Johnson"
        },
        {
          title:
            "Trusted by the world’s most innovative businesses – big and small",
          quote:
            "Comprehensive set of startup tools for all imaginable entrepreneurial needs. Create landing pages, send emails, find freelancers. Perfect for sales, marketing, and support",
          name: "Viella Malkovich",
          role: "Creative Director at Johnson"
        },
        {
          title:
            "Trusted by the world’s most innovative businesses – big and small",
          quote:
            "Comprehensive set of startup tools for all imaginable entrepreneurial needs. Create landing pages, send emails, find freelancers. Perfect for sales, marketing, and support",
          name: "Viella Malkovich",
          role: "Creative Director at Johnson"
        }
      ]
    };
  }
};
</script>

<style></style>
