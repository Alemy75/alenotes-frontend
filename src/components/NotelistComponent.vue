<template>
  <section class="list">
    <note-component
      v-for="note in this.$store.state.notes.notes"
      :note="note"
      :key="note.id"
    />
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import NoteComponent from "./NoteComponent.vue";
export default {
  components: {
    "note-component": NoteComponent
  },

  methods: {
    ...mapActions(["getNotes"]),
  },

  mounted() {
    this.getNotes();
  }
};
</script>

<style lang="scss">
.list {
  margin-top: 10px;
  width: 100%;
}
</style>
