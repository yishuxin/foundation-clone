<template>
  <div class="font-body ">
    <Header bgColor="bg-purple-200" activeLink="Pricing" />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style></style>
