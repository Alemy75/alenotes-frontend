<template>
  <h1 class="title">Заметки</h1>
  <form-component v-if="this.$store.state.notes.isFormOpen" />
  <notelist-component />
  <button
    :disabled="this.$store.state.notes.isFormOpen"
    class="form__open"
    @click="TOGGLE_FORM()"
  >
    +
  </button>
</template>

<script>
import NotelistComponent from "@/components/NotelistComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    "form-component": FormComponent,
    "notelist-component": NotelistComponent
  },
  methods: {
    ...mapMutations(["TOGGLE_FORM"])
  }
};
</script>

<style lang="scss">
.form__open {
  position: fixed;
  right: 40px;
  @media (max-width: 600px) {
    right: 10px;
    bottom: 20px;
  }
  bottom: 40px;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 25px;
  background-color: rgb(66, 126, 255);
  cursor: pointer;
  opacity: 0.2;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
}
</style>
