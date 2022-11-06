<template>
  <h1 class="mt-10">Welcome to Colony</h1>
  <p>It provides</p>
  <h2>Please Select the profile</h2>
  <div class="flex justify-around mt-16">
    <h2>Work Profile</h2>
    <h3>Personal Profile</h3>
  </div>
  <div class="flex justify-around">
    <img src="@/assets/work.jpg" />
    <img src="@/assets/personal.jpg" />
  </div>
</template>

<style scoped>
img {
  max-height: 60vh !important;
  max-width: 40vh !important;
  object-fit: cover;
}
</style>
