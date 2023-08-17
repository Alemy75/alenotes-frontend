<template>
  <form @submit.prevent="loginHandler" @keydown.enter="createNote">
    <h3>Вход в систему</h3>
    <label for="email">Почта</label>
    <input
      class="input"
      name="email"
      v-model="email"
      placeholder="Введите почту..."
    />
    <label for="password">Пароль</label>
    <input
      class="input"
      type="password"
      name="password"
      v-model="password"
      placeholder="Введите пароль..."
    />
    <button class="button" type="submit">Войти</button>
    <span>Нет аккаунта? <router-link to="/signup">Создать</router-link></span>
    <p class="error" v-if="this.$store.state.auth.error">
      Ошибка входа: {{ this.$store.state.auth.error }}
    </p>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["authLogin"]),
    async loginHandler() {
      this.authLogin({
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
form {
  & span {
    display: block;
    color: #333;
    text-align: center;
    width: 100%;
    margin-top: 10px;

    font-size: 0.8rem;
  }

  & a {
    color: rgb(66, 126, 255);
    &:hover {
      color: #333;
      text-decoration: underline;
    }
  }
}
</style>
