<template>
  <form @submit.prevent="signupHandler" @keydown.enter="createNote">
    <h3>Регистрация</h3>
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
    <button class="button" type="submit">Создать аккаунт</button>
    <span>Уже есть аккаунт? <router-link to="/login">Войти</router-link></span>
    <p class="error" v-if="this.$store.state.auth.error">
      Ошибка регистрации: {{ this.$store.state.auth.error }}
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
    ...mapActions(["authSignup"]),
    async signupHandler() {
      this.authSignup({
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
