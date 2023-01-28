<template>
  <div>
    <h2>id: {{ id }}</h2>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
console.log(route);
const { id } = route.params;
</script>

<style scoped></style>
