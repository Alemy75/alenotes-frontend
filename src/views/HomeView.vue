<template>
  <h1 class="title">Главная</h1>
  <p v-if="!this.$store.state.auth.isLogged">Получить доступ: <router-link class="a-sec" to="/login">Войти</router-link></p>
  <p v-else>Вы уже авторизованы!</p>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
