<script setup>
import PageContent from "../componentes/PageContent.vue";
</script>

<script>
export default {
  name: "home-page",
};
</script>
<template>
  <div class="page-content">
    <div class="title-container">
      <img src="../assets/hands.svg" alt="shaking hands" />
      <p class="title">Notas fiscais</p>
    </div>
    <div>
      <p class="subtitle">Visualize as notas fiscais que você tem.</p>
    </div>
    <div>
      <PageContent />
    </div>
  </div>
</template>

<style>
.title-container {
  display: flex;
  align-items: center;
  align-content: center;
}

.title {
  color: #021b51;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 0;
  margin-left: 9px;
}

.subtitle {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #727d94;
  margin-top: 5;
  margin-bottom: 19px;
}
</style>
