<template>
  <transition name="slide">
    <article>
      <div>
        <h2>{{ note.title }}</h2>
        <p>{{ note.content }}</p>
        <span class="date">{{ note.date }}</span>
      </div>
      <aside>
        <button class="delete" @click="deleteNote(note.id)">
          <X />
        </button>
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
    ...mapActions(["getNotes", "deleteNote"]),  
  }
};
</script>

<style lang="scss">
article {
  border: 2px solid rgba(144, 179, 255, 0.089);
  padding: 15px 15px;
  margin-bottom: 10px;
  display: flex;
  width: calc(100% - 34px);
  justify-content: space-between;
  h2 {
    margin: 0;
    font-size: 1rem;
    line-height: 1em;
    font-weight: normal;
    color: rgb(66, 126, 255);
  }
  & div {
    width: 85%;
  }

  & p {
    margin: 10px 0;
  }
  & aside {
    width: 15%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
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
