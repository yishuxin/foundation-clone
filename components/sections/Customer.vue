<template>
  <section class="lg:bg-white mt-8 ">
    <BrandPic />
    <div class="mx-4 my-4 lg:hidden">
      <content-frame>
        <template #title>Acquire Customers</template>
        <template #subTitle>Easily find leads and customers</template>
        <template #content>
          Send one-off and automated email, push, and in-app messages to people.
          Create better stories.
        </template>
      </content-frame>

      <div class="sm:flex" v-for="(item, index) in customerList" :key="index">
        <div class="sm:w-1/2">
          <div class="flex text-indigo-500 items-center">
            <img class="h-4 w-4" :src="item.svgURL" alt="" />
            <h1
              @click="showPic(item)"
              class="ml-2 font-bold text-xl leading-none py-2"
            >
              {{ item.title }}
            </h1>
          </div>
          <p class="my-2">{{ item.subTitle }}</p>
        </div>

        <div
          v-if="item.isOpen"
          class="p-2 border-b-4 border-indigo-500 sm:w-1/2 sm:mx-auto"
        >
          <img :src="item.imgURL" alt />
        </div>
      </div>
    </div>

    <div class="hidden lg:block lg:flex mx-20 items-center h-screen">
      <div class="w-1/2 mx-auto h-64">
        <ul class="mx-auto flex flex-col">
          <li
            class="flex flex-col justify-start my-4"
            v-for="(item, index) in customerList"
            :key="index"
            @click="changePic(item)"
          >
            <div class="flex text-indigo-500 items-center">
              <h1 class="ml-2 font-bold text-xl leading-none py-2">
                {{ item.title }}
              </h1>
            </div>
            <p class="my-2">{{ item.subTitle }}</p>
          </li>
        </ul>
      </div>

      <div class="w-1/2 p-8">
        <img :src="imgSrc" alt />
      </div>
    </div>
  </section>
</template>

<script>
import ContentFrame from "@/components/Elements/ContentFrame.vue";
import BrandPic from "@/components/Elements/BrandPic.vue";
import CustomerSVG from "@/static/imgs/svg/customer.svg";
import EngageSVG from "@/static/imgs/svg/engage.svg";
import SupportSVG from "@/static/imgs/svg/support.svg";
export default {
  components: {
    "content-frame": ContentFrame,
    BrandPic,
    CustomerSVG,
    EngageSVG,
    SupportSVG
  },
  data() {
    return {
      imgSrc: "https://i.imgur.com/vpXw1Gs.jpg",
      customerList: [
        {
          title: "Acquire new customers",
          subTitle: "Your team comes together to collaborate.",
          svgURL: "https://svgshare.com/i/HDQ.svg",
          imgURL: "https://i.imgur.com/vpXw1Gs.jpg",
          isOpen: false
        },
        {
          title: "Engage Users",
          subTitle: "Conversations are searchable by everyone.",
          svgURL: "https://svgshare.com/i/HEA.svg",
          imgURL: "https://i.imgur.com/hMNENi0.jpg",
          isOpen: false
        },
        {
          title: "Support",
          subTitle: "Works with the tools you already use every day.",
          svgURL: "https://svgshare.com/i/HEn.svg",
          imgURL: "https://i.imgur.com/a6dk0Yj.jpg",
          isOpen: false
        }
      ]
    };
  },
  methods: {
    showPic(target) {
      target.isOpen = !target.isOpen;
    },
    changePic(target) {
      this.imgSrc = target.imgURL;
    }
  }
};
</script>

<style></style>
