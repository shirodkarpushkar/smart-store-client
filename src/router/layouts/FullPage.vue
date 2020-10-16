<template>
  <transition name="fade" mode="out-in">
    <RouterView :key="$route.fullPath" />
  </transition>
</template>

<script>
export default {}
</script>

<style></style>
