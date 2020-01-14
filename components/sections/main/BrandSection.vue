<template>
  <div>
    <!-- For small screen -->
    <section class="my-6 bg-white border-b lg:hidden">
      <div class="mx-4 sm:mx-20">
        <div class="pt-10 pb-6 flex flex-col items-center text-center">
          <img src="~/assets/imgs/foundation-color.png" alt />
          <a href>
            <div>
              <h1 class="font-bold text-lg mt-2">Foundation</h1>
              <p class="text-gray-600 text-lg">Startup landing template</p>
            </div>
          </a>
        </div>
        <p class="text-gray-600 text-lg text-center sm:px-12">
          Foundation is a website template for startups and small teams. It
          helps to build a website in no time.
        </p>
        <div class="flex my-6 justify-around pb-10">
          <img src="~/assets/imgs/appstore.png" alt />
          <img src="~/assets/imgs/googleplay.png" alt />
        </div>
      </div>
    </section>
    <!-- For large screen -->
    <section class="hidden mb-10 bg-white border-b lg:block lg:border-none">
      <div class="mx-4 sm:mx-20">
        <div
          class="pt-10 pb-6 flex flex-col items-center text-center lg:flex-row lg:px-12 lg:pt-0 "
        >
          <img class="lg:mr-6" src="~/assets/imgs/foundation-color.png" alt />
          <a href>
            <div>
              <h1 class="font-bold text-lg mt-2 text-left">Foundation</h1>
              <p class="text-gray-600 text-lg text-left">
                Startup landing template
              </p>
            </div>
          </a>
        </div>
        <p class="text-gray-600 text-lg sm:text-center sm:px-12 lg:text-left">
          Foundation is a website template for startups and small teams. It
          helps to build a website in no time.
        </p>
        <div class="flex my-4 justify-around pb-10 lg:justify-center lg:mx-10">
          <img src="~/assets/imgs/appstore.png" class="lg:mr-4" alt />
          <img src="~/assets/imgs/googleplay.png" alt />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
