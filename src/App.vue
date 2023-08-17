<template>
  <header>
    <div class="container">
      <section class="header">
        <div class="logo">
          <h1>Alenote</h1>
          <span>Заметки, записи, мысли</span>
        </div>
        <nav>
          <router-link class="a-prim" to="/">Главная</router-link>
          <router-link v-if="this.$store.state.auth.isLogged" class="a-prim" to="/notes">Заметки</router-link>
          <router-link v-if="!this.$store.state.auth.isLogged" class="a-prim" to="/login">Войти</router-link>
          <button
            v-if="this.$store.state.auth.isLogged"
            @click="handleLogout"
            class="a-prim"
          >
            Выйти
          </button>
        </nav>
      </section>
    </div>
  </header>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["authLogout", "checkAuth"]),
    handleLogout() {
      this.authLogout()
    }
  },
  mounted() {
    this.checkAuth();
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "MyCustomFont";
  src: url("../public/fonts/JetBrainsMono-Bold.ttf") format("truetype");
  src: url("../public/fonts/JetBrainsMono-Regular.ttf") format("truetype");
  src: url("../public/fonts/JetBrainsMono-Light.ttf") format("truetype");
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "MyCustomFont", sans-serif;
  color: #333;
}

header {
  background-color: rgba(144, 179, 255, 0.089);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.container {
  width: 600px;
  max-width: 100%;
  margin: 0 auto;
  @media (max-width: 600px) {
    margin: 0 10px;
    width: calc(100% - 20px);
  }
}

a {
  text-decoration: none;

  color: #333;
}

.title {
  display: block;
  padding-top: 20px;
  font-size: 1.5rem;
}

.a-sec {
  color: rgb(66, 126, 255);
}

.a-prim {
  font-weight: bold;
  font-size: 0.8rem;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 0%;
    transition: all 0.2s ease-in-out;
    background-color: rgb(66, 126, 255);
    outline: 2px solid rgba(66, 126, 255, 0);
    border-radius: 10px;
    margin-top: 2px;
  }
  &:hover {
    &::after {
      width: 100%;
      outline: 2px solid rgba(66, 126, 255, 0.342);
    }
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
h1 {
  display: inline;
  margin-right: 8px;
}

button {
  all: unset;
  cursor: pointer;
}

input,
textarea {
  all: unset;
  width: calc(100% - 30px);
  display: block;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1.5px solid #9dbcff;
  outline: 5px solid #9dbcff00;
  transition: 0.2s ease-in-out;
  &::placeholder {
    color: #9dbcff;
  }
  &:focus {
    outline: 5px solid #9dbcff20;
  }
}

textarea {
  overflow-wrap: break-word;
  word-wrap: break-word;
  resize: vertical;
  overflow: hidden;
}

.logo {
  display: flex;
  align-items: center;
  & span {
    max-width: 50px;
    font-size: 0.7rem;
    padding: 7px;
    border-radius: 5px;
    font-weight: bold;
    background-color: #c9daff77;
  }
}

nav {
  display: flex;
  align-items: center;
}

.delete {
  width: 5%;
  &:hover {
    svg {
      cursor: pointer;
      stroke: #9dbcff;
    }
  }
}

label {
  padding-bottom: 10px;
  font-size: 0.8em;
}

.button {
  all: unset;
  color: white;
  background-color: rgb(66, 126, 255);
  padding: 10px 15px;
  width: calc(100% - 30px);
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: rgb(31, 100, 248);
  }
}

.error {
  color: #df4040;
}

</style>
