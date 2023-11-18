<template>
  <header>
    <div class="container">
      <img src="~/assets/svgs/logo.svg" alt="logo">
      <div class="toggleContainer">
        <img src="~/assets/svgs/icon-sun.svg" alt="light theme">
        <div class="toggle">
          <div class="switch"></div>
        </div>
        <img src="~/assets/svgs/icon-moon.svg" alt="dark theme">
      </div>
    </div>
  </header>
</template>

<style scoped>
.container {
  display: flex;
}
.toggleContainer {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
}
.toggle {
  display: flex;
  align-items: center;
  padding: 6px;
  width: 60px;
  height: 30px;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;
}
.toggle .switch {
  width: 22px;
  height:22px;
  border-radius: 50%;
  background-color: var(--color-violet);
}

.toggleContainer img {
  width: 24px;
  height: 24px;
}

header {
  display: flex;
  align-items: center;
  background: url('~/assets/svgs/bg-pattern-header.svg');
  background-size: cover;
  height: 190px;
}
</style>