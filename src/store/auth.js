import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import router from "../router";

const auth = {
  state: {
    isLogged: false,
    error: null,
    auth: getAuth()
  },

  mutations: {
    SET_IS_LOGGED(state, payload) {
      state.isLogged = payload;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
    SET_AUTH(state, payload) {
      state.auth = payload;
    }
  },

  actions: {
    async authLogin({ commit, state }, payload) {
      commit("SET_AUTH", getAuth());
      signInWithEmailAndPassword(state.auth, payload.email, payload.password)
        .then((data) => {
          console.log(state.auth.currentUser);
          router.push("/notes");
        })
        .catch((error) => {
          commit("SET_ERROR", error.code);
        });
    },
    async authSignup({ commit, state }, payload) {
      commit("SET_AUTH", getAuth());
      createUserWithEmailAndPassword(
        state.auth,
        payload.email,
        payload.password
      )
        .then((user) => {
          router.push("/notes");
        })
        .catch((error) => {
          commit("SET_ERROR", error.code);
        });
    },
    async checkAuth({ commit, state }) {
      commit("SET_AUTH", getAuth());
      onAuthStateChanged(state.auth, (user) => {
        if (user) {
          commit("SET_IS_LOGGED", true);
        } else {
          commit("SET_IS_LOGGED", false);
        }
      });
    },
    async authLogout({ state }) {
      signOut(state.auth).then(() => {
        router.push('/')
      });
    }
  },

  getters: {}
};

export default auth;
