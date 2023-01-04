<script setup>
import api from "../services/api";
import Card from "./Card.vue";
</script>

<template>
  <div class="info-container">
    <div class="header-container">
      <span class="header-title-1">NOTA FISCAL</span>
      <span class="header-title-1">SACADO</span>
      <span class="header-title-1">CEDENTE</span>
      <span class="header-title-1">EMISSÃO</span>
      <span class="header-title-1">VALOR</span>
      <span class="header-title-2">STATUS</span>
    </div>
    <div
      v-for="receipt in receipts"
      :key="receipt.orderNumber"
      class="card-row-component"
    >
      <Card :receipt="receipt" :loaded="loaded" />
    </div>
  </div>
</template>

<script>
export default {
  name: "page-content",
  data() {
    return {
      receipts: [],
      loaded: false,
    };
  },
  mounted() {
    api.get("/receipt").then((response) => {
      this.receipts = response.data;
      this.loaded = true;
      console.log(response.data);
    });
  },
};
</script>

<style>
.info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  padding: 0px 30px;
}
.header-title-1 {
  flex: 1;
  color: #a1a8b8;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
}
.header-title-2 {
  flex: 2;
  color: #a1a8b8;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
}

.card-row-component {
  display: flex;
  flex: 1;
  width: 100%;
}
</style>
