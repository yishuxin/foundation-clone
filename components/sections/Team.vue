<template>
  <section class="bg-orange-200 border-b-2 py-8 lg:border-none">
    <div class="mx-4 sm:flex items-center">
      <figure-frame class="sm:w-1/2">
        <template #figure>
          <img class="h-auto w-56 lg:w-104" src="../../static/imgs/rush-4@2x.png" alt />
        </template>
        <template #figureCaption>
          <p>Connect with customers and grow faster</p>
        </template>
      </figure-frame>

      <div class="sm:w-1/2">
        <content-frame>
          <template #title>Team Inbox</template>
          <template #subTitle>Manage conversations</template>
          <template #content>
            One place to manage and respond to all conversations with leads and
            users. Receive messages from leads.
          </template>
        </content-frame>
        <quote class="lg:w-3/4 mx-auto" />
      </div>
    </div>
  </section>
</template>

<script>
import FigureFrame from "@/components/Elements/FigureFrame.vue";
import ContentFrame from "@/components/Elements/ContentFrame.vue";
import QuoteCard from "@/components/Elements/QuoteCard.vue";
export default {
  components: {
    "figure-frame": FigureFrame,
    "content-frame": ContentFrame,
    quote: QuoteCard
  }
};
</script>

<style></style>
