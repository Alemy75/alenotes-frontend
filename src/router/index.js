import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import NotesView from "../views/NotesView.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView
  },
  {
    path: "/notes",
    name: "notes",
    component: NotesView,
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const remveListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        remveListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("No access");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
