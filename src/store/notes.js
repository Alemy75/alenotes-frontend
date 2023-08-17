import db from "../../firebase/init";
import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  doc,
  deleteDoc,
  where
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const notes = {
  state: {
    notes: [],
    isFormOpen: false
  },

  mutations: {
    SET_NOTES(state, payload) {
      state.notes = payload;
    },
    DELETE_NOTE(state, payload) {
      state.notes = state.notes.filter((item) => item.id !== payload);
    },
    ADD_NOTE(state, payload) {
      state.notes.push({ id: payload.id, ...payload.dataObj });
    },
    TOGGLE_FORM(state) {
      state.isFormOpen = !state.isFormOpen;
    }
  },

  actions: {
    async getNotes({ commit }) {
      const auth = getAuth()
      const q = query(collection(db, "notes"), orderBy("date", "desc"), where("uid", "==", auth.currentUser.uid));
      const querySnap = await getDocs(q);
      const payload = [];
      querySnap.forEach((doc) => {
        payload.push({ id: doc.id, ...doc.data() });
      });
      commit("SET_NOTES", payload);
    },
    async deleteNote({ commit }, docId) {
      const docRef = doc(db, "notes", docId);

      await deleteDoc(docRef);

      commit("DELETE_NOTE", docId);
    },
    async addNote({ commit }, dataObj) {
      const auth = getAuth();
      const colRef = collection(db, "notes");
      const docRef = await addDoc(colRef, {uid: auth.currentUser.uid, ...dataObj});
      commit("ADD_NOTE", {
        id: docRef.id,
        uid: auth.currentUser.uid,
        dataObj
      });
    }
  },

  getters: {}
};

export default notes;
