<script setup>
import { ModalsContainer, useModal } from "vue-final-modal";
import PageSection1 from "./components/PageSection1.vue";
import PageSection2 from "./components/PageSection2.vue";
import PageSection3 from "./components/PageSection3.vue";
import PageSection4 from "./components/PageSection4.vue";
import PageSection5 from "./components/PageSection5.vue";
import PageSection6 from "./components/PageSection6.vue";
import FloatingButton from "./components/Modal/FloatingButton.vue";
</script>

<template>
  <FloatingButton class="mx-auto z-50" />
  <PageSection1 class="mx-auto" />
  <PageSection2 class="mx-auto" />
  <PageSection3 class="mx-auto" />
  <PageSection4 class="mx-auto" />
  <PageSection5 class="mx-auto" />
  <PageSection6 class="mx-auto" />
  <ModalsContainer  />
</template>

<style scoped>
</style>
