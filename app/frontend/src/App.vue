<script setup>
import Header from "./componentes/Header.vue";
import Sidebar from "./componentes/Sidebar.vue";
import Homepage from "./pages/Homepage.vue";
</script>

<template>
  <div class="grid-container">
    <div class="sider-container">
      <Sidebar />
    </div>
    <div class="header-container">
      <Header />
    </div>
    <div class="page-container">
      <Homepage />
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 288px 1fr;
  grid-template-rows: 64px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.page-container {
  grid-area: 2 / 2 / 3 / 3;
  background: #ffffff;
  padding: 48px;
}
.header-container {
  grid-area: 1 / 2 / 2 / 3;
  background: #ffffff;
  border-bottom: 1px solid #dfe2eb;
}
.sider-container {
  grid-area: 1 / 1 / 3 / 2;
  background: #fbfdfe;
}
</style>
