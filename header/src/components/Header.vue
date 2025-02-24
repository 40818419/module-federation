<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <header style="background: #42b883; padding: 0.5rem; color: white;">
    <h1 style="margin: 0">{{ title || "Vue Header" }}</h1>
  </header>
</template>