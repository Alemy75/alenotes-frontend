<template>
  <section class="list">
    <note-component v-for="note in this.$store.state.notes.notes" :note="note" :key="note.id"/>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import NoteComponent from "./NoteComponent.vue";
export default {
  components: {
    "note-component": NoteComponent
  },

  methods: {
    ...mapActions(["getNotes"])
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

article {
  border: 2px solid rgba(144, 179, 255, 0.089);
  padding: 15px 15px;
  margin-bottom: 10px;
  display: flex;
  width: calc(100% - 30px);
  justify-content: space-between;
  h2 {
    margin: 0;
    font-size: 1rem;
    line-height: 1em;
    font-weight: normal;
    color: rgb(66, 126, 255);
  }
  & div {
    width: 95%;
  }

  & p {
    margin: 10px 0;
  }
}

.date {
  font-size: 0.8rem;
  background-color: rgb(66, 126, 255);
  padding: 5px 10px;
  border-radius: 3px;
  color: white;
}
</style>
