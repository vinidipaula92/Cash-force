<template>
  <div v-if="loaded" class="card-container">
    <span class="info-text">
      {{ receipt.orderNumber }}
    </span>
    <span class="info-text">
      {{ receipt.buyerName }}
    </span>
    <span class="info-text">
      {{ receipt.providerName }}
    </span>
    <span class="info-text">
      {{ receipt.createdAt }}
    </span>
    <span class="info-text text-value">
      {{ `R$ ${receipt.value}` }}
    </span>
    <span class="info-text text-value">
      {{ receipt.orderStatusBuyer.toUpperCase() }}
    </span>
    <button class="info-button">Dados do cedente</button>
  </div>
</template>
<script>
export default {
  name: "row-card",
  props: {
    receipt: Object,
    loaded: Boolean,
  },
};
</script>

<style>
.card-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  padding: 15px 30px;
  border: 1px solid #dfe2eb;
  border-radius: 6px;
}

.info-text {
  flex: 30;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #4d5566;
}
.info-button {
  flex: 26;
  border: 1px solid #cad3ff;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  border-radius: 24px;
  padding: 8px 29px;
  background-color: #ffffff;
  color: #727d94;
}

.info-button:hover {
  background-color: #3052f8;
  color: #ffffff;
  transition: all 0.4s;
}

.text-value {
  color: #00ad8c;
}
</style>
