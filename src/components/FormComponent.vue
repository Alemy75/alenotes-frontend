<template>
  <div class="overlay"></div>
  <form @submit.prevent="createNote" @keydown.enter="createNote">
    <div class="modal__top">
      <h3>Создать запись</h3>
      <span class="delete" @click="TOGGLE_FORM()">
        <X />
      </span>
    </div>
    <label for="title">Название</label>
    <input v-model="title" placeholder="Введите название.." type="text" />
    <label for="content">Содержание</label>
    <textarea
      ref="textarea"
      v-model="content"
      placeholder="Введите текст.."
      @input="resizeTextarea"
      type="text"
    />
    <button class="button" type="submit">Создать запись</button>
  </form>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { X } from "lucide-vue-next";

export default {
  components: {
    X: X
  },
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    ...mapActions(["addNote"]),
    ...mapMutations(["TOGGLE_FORM"]),
    async createNote() {
      const dataObj = {
        title: this.title,
        content: this.content,
        date: new Date().toLocaleString()
      };

      this.addNote(dataObj);

      this.title = "";
      this.content = "";

      this.TOGGLE_FORM();

      const textarea = this.$refs.textarea;
      textarea.style.height = "";
    },
    resizeTextarea() {
      const textarea = this.$refs.textarea;
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: calc(600px - 48px);
  max-width: 100%;
  @media (max-width: 600px) {
    width: calc(100% - 48px);
  }
  padding: 20px;
  outline: 4px solid #9dbcff;
  & h3 {
    display: block;
    margin-top: 0;
    padding-top: 0;
  }
}

.modal__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
}
</style>
