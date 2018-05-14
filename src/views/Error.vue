<template>
  <div class="error">
    <h1>Страница не найдена</h1>
    <router-link to="/">Перейти на главную</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .error {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
