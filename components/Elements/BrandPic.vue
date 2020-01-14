<template>
  <div class="pb-10 ">
    <!-- For small screens -->
    <div class="bg-white lg:hidden">
      <div class="flex justify-around items-center">
        <div
          class="w-1/3 h-24 flex justify-center items-center p-2 border-r border-b"
        >
          <img
            class="object-fit h-12 w-auto"
            src="~/assets/imgs/the-new-york-times@2x.png"
            alt
          />
        </div>
        <div
          class="w-1/3 h-24 flex justify-center items-center p-2 border-r border-b"
        >
          <img
            class="object-fit h-8 w-auto"
            src="~/assets/imgs/forbes@2x.png"
            alt
          />
        </div>
        <div class="w-1/3 h-24 flex justify-center items-center p-2 border-b">
          <img
            class="object-fit h-12 w-auto"
            src="~/assets/imgs/apple@2x.png"
            alt
            srcset
          />
        </div>
      </div>
      <div class="flex justify-around items-center">
        <div
          class="w-1/3 h-24 flex justify-center items-center p-2 border-r boder-b"
        >
          <img
            class="object-fit h-14 w-auto"
            src="~/assets/imgs/mashable@2x.png"
            alt
          />
        </div>
        <div
          class="w-1/3 h-24 flex justify-center items-center p-2 border-r boder-b"
        >
          <img
            class="object-fit h-8 w-auto"
            src="~/assets/imgs/wsj@2x.png"
            alt
          />
        </div>
        <div class="w-1/3 h-24 flex justify-center items-center boder-b">
          <img
            class="object-fit h-8 w-auto"
            src="~/assets/imgs/google@2x.png"
            alt
          />
        </div>
      </div>
    </div>
    <!-- For large screens -->
    <div class="hidden bg-white lg:block lg:flex justify-around">
      <div class="h-24 flex justify-center items-center p-2">
        <img
          class="object-fit h-12 w-auto"
          src="~/assets/imgs/the-new-york-times@2x.png"
          alt
        />
      </div>
      <div class="h-24 flex justify-center items-center p-2">
        <img
          class="object-fit h-8 w-auto"
          src="~/assets/imgs/forbes@2x.png"
          alt
        />
      </div>
      <div class="h-24 flex justify-center items-center p-2">
        <img
          class="object-fit h-8 w-auto"
          src="~/assets/imgs/apple@2x.png"
          alt
        />
      </div>
      <div class="h-24 flex justify-center items-center p-2">
        <img
          class="object-fit h-8 w-auto"
          src="~/assets/imgs/mashable@2x.png"
          alt
        />
      </div>
      <div class="h-24 flex justify-center items-center p-2">
        <img class="object-fit h-8 w-auto" src="~/assets/imgs/wsj@2x.png" alt />
      </div>
      <div class="h-24 flex justify-center items-center p-2">
        <img
          class="object-fit h-8 w-auto"
          src="~/assets/imgs/google@2x.png"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
