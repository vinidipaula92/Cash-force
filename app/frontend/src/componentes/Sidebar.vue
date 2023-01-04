<template>
  <div class="sider">
    <div class="logo">
      <img src="../assets/logo.svg" alt="Logo" />
    </div>
    <div class="item-container">
      <div class="tag" />
      <img src="../assets/green-hand.svg" alt="shaking hands" />
      <p class="item-name">Notas fiscais</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "sider-financier",
};
</script>

<style>
.sider {
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  width: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.item-container {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  align-content: center;
}

.tag {
  height: 64px;
  border-left: #00ad8c 4px solid;
  border-radius: 4px;
  margin-right: 21px;
}

.item-name {
  color: #00ad8c;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 0;
  margin-left: 9px;
}
</style>
