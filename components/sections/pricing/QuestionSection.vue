<template>
  <section class="mx-4 my-10 bg-white">
    <h2 class="text-4xl text-center font-bold md:mb-4" v-scroll-reveal>
      Your questions, answered
    </h2>
    <div class="md:flex md:flex-wrap justify-center">
      <div
        class="py-3 md:w-1/2 md:p-4"
        v-for="(item, index) in questions"
        :key="index"
        v-scroll-reveal="{ delay: index * 100 }"
      >
        <h3 class="font-bold text-2xl leading-tight py-2">
          {{ item.question }}
        </h3>
        <p>{{ item.answer }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "Can I cancel anytime?",
          answer:
            "Of course. Contact our Client Support team prior to your next billing cycle and we'll take care of your request.",
          hasLink: true
        },
        {
          question: "My team has credits. How do we use them?",
          answer:
            "Once your team signs up for a subscription plan, we’ll draw against your credit balance until it runs out. Only then will we start charging your subscription to your credit card.",
          hasLink: false
        },
        {
          question: "Is there a setup fee??",
          answer:
            "We’ll make a one-time, prorated charge to your credit card to cover your new team member’s account for the remainder of the current billing period.",
          hasLink: false
        },
        {
          question: "Can I cancel anytime?",
          answer:
            "Of course. Contact our Client Support team prior to your next billing cycle and we'll take care of your request.",
          hasLink: false
        },
        {
          question:
            "What are my payment options - credit card and/or invoicing?",
          answer:
            "You can use your credit card to pay for any plan. If you sign up for an Annual subscription and plan to spend at least $2,000.",
          hasLink: false
        },
        {
          question: "Can we get a refund?",
          answer:
            "Team Owners can change the team’s subscription level. There are two options when downgrading from a paid plan to the Free plan.",
          hasLink: false
        }
      ]
    };
  }
};
</script>

<style></style>
