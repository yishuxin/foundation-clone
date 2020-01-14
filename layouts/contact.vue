<template>
  <div class="font-body">
    <Header bgColor="bg-teal-300 " activeLink="Contact" />
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
