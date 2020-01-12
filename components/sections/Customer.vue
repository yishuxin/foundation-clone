<template>
  <section class="lg:bg-white mt-8 ">
    <!-- Brand component -->
    <BrandPic />

    <!-- Component for small screen -->
    <div class="mx-4 my-4 lg:hidden">
      <content-frame>
        <template class="text-green-500" #title>Acquire Customers</template>
        <template #subTitle>Easily find leads and customers</template>
        <template #content>
          Send one-off and automated email, push, and in-app messages to people.
          Create better stories.
        </template>
      </content-frame>

      <div class="sm:flex" v-for="(item, index) in customerList" :key="index">
        <div class="sm:w-1/2">
          <div class="flex text-indigo-500 items-center">
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
            >
              <path :d="item.svgPath" />
            </svg>
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
    <!-- Media Query for large screen -->
    <div class="hidden lg:block lg:flex mx-20 items-center h-auto pb-10">
      <div class="flex-col items-start">
        <content-frame>
          <template #title>
            <h1 class="text-green-500">Acquire Customers</h1>
          </template>
          <template #subTitle>Easily find leads and customers</template>
          <template #content>
            Send one-off and automated email, push, and in-app messages to
            people. Create better stories.
          </template>
        </content-frame>
        <div class="mx-auto h-64">
          <ul class="flex flex-col">
            <li
              class="flex flex-col justify-start my-1 cursor-pointer"
              v-for="(item, index) in customerList"
              :key="index"
              @click="changePic(item)"
            >
              <div class="flex text-indigo-500 items-center">
                <svg
                  :class="item.isActive ? 'text-green-600' : ''"
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                >
                  <path :d="item.svgPath" />
                </svg>

                <h1
                  :class="item.isActive ? 'text-green-600' : ''"
                  class="ml-2 font-bold text-xl leading-none py-2"
                >
                  {{ item.title }}
                </h1>
              </div>
              <p class="my-2">{{ item.subTitle }}</p>
            </li>
          </ul>
        </div>
      </div>

      <div class=" p-8">
        <img :src="imgSrc" alt />
      </div>
    </div>
  </section>
</template>

<script>
import ContentFrame from "@/components/Elements/ContentFrame.vue";
import BrandPic from "@/components/Elements/BrandPic.vue";
export default {
  components: {
    "content-frame": ContentFrame,
    BrandPic
  },
  data() {
    return {
      imgSrc: "https://i.imgur.com/vpXw1Gs.jpg",
      customerList: [
        {
          id: 0,
          title: "Acquire new customers",
          subTitle: "Your team comes together to collaborate.",
          svgPath:
            "M10,8.9 C9.39,8.9 8.9,9.39 8.9,10 C8.9,10.61 9.39,11.1 10,11.1 C10.61,11.1 11.1,10.61 11.1,10 C11.1,9.39 10.61,8.9 10,8.9 Z M10,0 C4.48,0 0,4.48 0,10 C0,15.52 4.48,20 10,20 C15.52,20 20,15.52 20,10 C20,4.48 15.52,0 10,0 Z M12.19,12.19 L4,16 L7.81,7.81 L16,4 L12.19,12.19 Z",
          imgURL: "https://i.imgur.com/vpXw1Gs.jpg",
          isOpen: false,
          isActive: false
        },
        {
          id: 1,
          title: "Engage Users",
          subTitle: "Conversations are searchable by everyone.",
          svgPath:
            "M2.421053,10.71429 L2.421053,19.04762 L6.052632,19.04762 L6.052632,10.71429 L2.421053,10.71429 Z M9.684211,10.71429 L9.684211,19.04762 L13.315789,19.04762 L13.315789,10.71429 L9.684211,10.71429 Z M0,25 L23,25 L23,21.42857 L0,21.42857 L0,25 Z M16.947368,10.71429 L16.947368,19.04762 L20.578947,19.04762 L20.578947,10.71429 L16.947368,10.71429 Z M11.5,0 L0,5.95238 L0,8.33333 L23,8.33333 L23,5.95238 L11.5,0 Z",
          imgURL: "https://i.imgur.com/hMNENi0.jpg",
          isOpen: false,
          isActive: false
        },
        {
          id: 2,
          title: "Support",
          subTitle: "Works with the tools you already use every day.",
          svgPath:
            "M19.555556,0 L2.444444,0 C1.1,0 0,1.1 0,2.44444 L0,11 C0,12.34444 1.1,13.44444 2.444444,13.44444 L19.555556,13.44444 C20.9,13.44444 22,12.34444 22,11 L22,2.44444 C22,1.1 20.9,0 19.555556,0 Z M19.555556,7.33333 L14.666667,7.33333 C14.666667,9.31333 12.98,11 11,11 C9.02,11 7.333333,9.31333 7.333333,7.33333 L2.444444,7.33333 L2.444444,2.44444 L19.555556,2.44444 L19.555556,7.33333 Z M14.666667,15.88889 L22,15.88889 L22,19.55556 C22,20.9 20.9,22 19.555556,22 L2.444444,22 C1.1,22 0,20.9 0,19.55556 L0,15.88889 L7.333333,15.88889 C7.333333,17.91778 8.971111,19.55556 11,19.55556 C13.028889,19.55556 14.666667,17.91778 14.666667,15.88889 Z",
          imgURL: "https://i.imgur.com/a6dk0Yj.jpg",
          isOpen: false,
          isActive: false
        }
      ]
    };
  },
  methods: {
    showPic(target) {
      target.isOpen = !target.isOpen;
    },
    changePic(item) {
      this.customerList.forEach(el => {
        el.isActive = false;
      });
      item.isActive = true;
      this.imgSrc = item.imgURL;
    }
  }
};
</script>

<style></style>
