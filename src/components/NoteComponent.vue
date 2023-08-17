<template>
  <transition name="slide">
    <article>
      <div>
        <h2>{{ note.title }}</h2>
        <p>{{ note.content }}</p>
        <span class="date">{{ note.date }}</span>
      </div>
      <aside>
        <span class="delete" @click="deleteNote(note.id)">
          <X />
        </span>
      </aside>
    </article>
  </transition>
</template>

<script>
import { mapActions } from "vuex";
import { X } from "lucide-vue-next";

export default {
  components: {
    X: X
  },
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(["getNotes", "deleteNote"])
  }
};
</script>
