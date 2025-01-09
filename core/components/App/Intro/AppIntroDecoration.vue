<script setup lang="ts">
const cards = [
  { style: { transform: "rotate(0deg) translateX(30px) translateY(10px)" } },
  { style: { transform: "rotate(-100deg) translateY(50px)" } },
  { style: { transform: "rotate(-80deg) translateY(40px)" } },
  { style: { transform: "rotate(-60deg) translateY(30px)" } },
  { style: { transform: "rotate(-40deg) translateY(20px)" } },
  { style: { transform: "rotate(-20deg) translateY(10px)" } },
]
</script>

<template>
  <div class="card-container__wrapper">
    <div class="card-container">
      <div class="card" v-for="card in cards" :style="card.style">
        <div class="content" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-container {
  position: absolute;
  bottom: 1px;
  right: 1px;
  width: 310px;
  height: 140px;
  overflow: hidden;
}

.card {
  position: absolute;
  width: 300px;
  height: 250px;
  margin-top: 80px;
  margin-left: 50px;
  background: rgb(var(--v-theme-surface));
  border-radius: 24px;
  box-shadow: inset 0 0 0 1px rgba(var(--v-border-color), 0.08);
  transform-origin: center;
  transition: transform 0.8s, box-shadow 0.8s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #ffffff;

  .content {
    text-align: center;
    font-weight: bold;
  }
}
</style>