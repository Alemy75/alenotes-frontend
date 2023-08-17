<template>
  <header>
    <div class="container header_container">
      <section class="header">
        <div class="logo">
          <h1>Alenote</h1>
          <span>Заметки, записи, мысли</span>
        </div>
        <button @click="toggleNav" class="header__button">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </section>
      <nav v-if="isNavOpen">
        <router-link @click="toggleNav()" class="a-prim" to="/">
          <Blinds size="15px" /> Главная
        </router-link>
        <router-link
          @click="toggleNav()" v-if="this.$store.state.auth.isLogged"
          class="a-prim"
          to="/notes"
        >
          <PenSquare size="15px" />
          Заметки
        </router-link>
        <router-link
          @click="toggleNav()" v-if="!this.$store.state.auth.isLogged"
          class="a-prim"
          to="/login"
        >
          <LogOut size="15px" />
          Войти
        </router-link>
        <button
          v-if="this.$store.state.auth.isLogged"
          @click="handleLogout"
          class="a-prim"
        >
          <LogOut size="15px" />
          Выйти
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";
import { Blinds, PenSquare, LogIn, LogOut } from "lucide-vue-next";

export default {
  components: {
    Blinds,
    PenSquare,
    LogIn,
    LogOut
  },
  data() {
    return {
      isNavOpen: false
    };
  },
  methods: {
    ...mapActions(["authLogout", "checkAuth"]),
    handleLogout() {
      this.authLogout();
      this.toggleNav();
    },
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    }
  },
  mounted() {
    this.checkAuth();
  }
};
</script>

<style lang="scss" scoped>
header {
  background-color: rgba(144, 179, 255, 0.089);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & .header__button {
    width: 25px;
    height: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & span {
      display: block;
      width: 100%;
      height: 2px;
      outline: 1px solid rgba(66, 126, 255, 0);
      background-color: rgb(66, 126, 255);
      transition: all 0.2s ease;
    }
    &:hover {
      & span {
        outline: 1px solid rgba(66, 126, 255, 0.356);
      }
    }
  }
}

.header_container {
  position: relative;
}

nav {
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  width: 200px;
  box-shadow: 0px 4px 20px #33333328;
  right: 0;
  top: 100%;
  border: 2px solid rgba(144, 179, 255, 0.089);
  border-top: 0;
  & .a-prim {
    display: flex;
    align-items: center;
    width: min-content;
    & svg {
      margin-right: 5px;
    }
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>
