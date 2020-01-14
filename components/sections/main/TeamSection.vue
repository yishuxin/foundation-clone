<template>
  <section class="bg-orange-200 border-b-2 py-8 lg:border-none">
    <div class="mx-4 sm:flex items-center">
      <figure-frame class="sm:w-1/2">
        <template #figure>
          <img class="h-auto w-56 lg:w-104" src="~/assets/imgs/rush-4@2x.png" alt />
        </template>
        <template #figureCaption>
          <p>Connect with customers and grow faster</p>
        </template>
      </figure-frame>

      <div class="sm:w-1/2">
        <content-frame>
          <template #title>
            <h1 class="text-red-500">Team Inbox</h1>
          </template>
          <template #subTitle>Manage conversations</template>
          <template #content>
            One place to manage and respond to all conversations with leads and
            users. Receive messages from leads.
          </template>
        </content-frame>
        <quote-card class="lg:w-3/4 mx-auto" />
      </div>
    </div>
  </section>
</template>

<script>
import FigureFrame from "@/components/UI/frames/FigureFrame.vue";
import ContentFrame from "@/components/UI/frames/ContentFrame.vue";
import QuoteCard from "@/components/UI/QuoteCard.vue";
export default {
  components: {
    FigureFrame,
    ContentFrame,
    QuoteCard
  }
};
</script>

<style></style>
