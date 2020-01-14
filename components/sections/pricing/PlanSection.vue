<template>
  <section class="py-6 text-gray-700 bg-purple-200 ">
    <div class="mx-4">
      <h2
        class="font-logo text-4xl font-bold py-2 text-center leading-tight md:m-5 lg:text-6xl "
      >
        Pick a plan. Grow faster with Foundation
      </h2>
      <h3 class="text-2xl text-center pt-2 pb-10 md:mb-12 lg:text-4xl">
        Try for free for 14 days.
      </h3>

      <div class="md:flex">
        <plan-card v-for="(plan, index) in plans" :key="index" :plan="plan" />
      </div>
    </div>
  </section>
</template>

<script>
import PlanCard from "@/components/elements/PlanCard.vue";
export default {
  components: {
    PlanCard
  },
  data() {
    return {
      plans: [
        {
          id: 1,
          category: "Standart",
          imgUrl: "https://i.imgur.com/nZ8xGcA.png",
          intro: "Works perfect for small teams and companies",
          price: 89,
          detailList: [
            "Upload up to 200 MB",
            "View message performance and test against variants",
            "Control groups to improve results",
            "Engage customers"
          ],
          onSale: false
        },
        {
          id: 2,
          category: "Professional",
          imgUrl: "https://i.imgur.com/K0oI67c.png",
          intro: "Works perfect for small teams and companies",
          price: 249,
          detailList: [
            "Upload up to 1000 MB",
            "View message performance and test against variants",
            "Control groups to improve results",
            "Engage customers",
            "Unlimited subscriptions",
            "Free Support"
          ],
          onSale: true
        },
        {
          id: 3,
          category: "Corporate",
          imgUrl: "https://i.imgur.com/RWCA1aZ.png",
          intro: "Works perfect for small teams and companies",
          price: 899,
          detailList: [
            "Upload up to 5000 MB",
            "View message performance and test against variants",
            "Control groups to improve results",
            "Engage customers",
            "Unlimited subscriptions",
            "Unlimited messages",
            "Free Support"
          ],
          onSale: false
        }
      ]
    };
  }
};
</script>
