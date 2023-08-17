<template>
  <transition name="slide">
    <article>
      <div>
        <h2>{{ note.title }}</h2>
        <textarea
          ref="textarea"
          :class="{ textarea: isEditing }"
          :readonly="!isEditing"
          v-model="this.content"
          >{{ note.content }}</textarea
        >
        <span class="date">{{ note.date }}</span>
      </div>
      <aside>
        <button class="icon-btn" @click="deleteNote(note.id)">
          <X size="20px" />
        </button>
        <button v-if="!isEditing" class="icon-btn" @click="editHandler">
          <FileEdit size="20px" :stroke-width="1.7" />
        </button>
        <button
          v-if="isEditing"
          class="icon-btn"
          @click="updateHandler(note.id)"
        >
          <CheckCheck :stroke-width="1.5" />
        </button>
      </aside>
    </article>
  </transition>
</template>

<script>
import { mapActions } from "vuex";
import { X, FileEdit, CheckCheck } from "lucide-vue-next";

export default {
  components: {
    X,
    FileEdit,
    CheckCheck
  },
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isEditing: false,
      content: this.note.content
    };
  },
  methods: {
    ...mapActions(["getNotes", "deleteNote", "updateNote"]),
    resizeTextarea() {
      const textarea = this.$refs.textarea;
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    },
    editHandler() {
      this.isEditing = true;
      this.resizeTextarea();
    },
    updateHandler(id) {
      this.updateNote({
        id,
        content: this.content
      }).then(() => {
        this.isEditing = false;
      });
      this.resizeTextarea();
    }
  },
  mounted() {
    this.resizeTextarea()
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

  & textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    height: auto;
    overflow-x: hidden;
    overflow-wrap: break-word;
    padding: 0;   
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

.icon-btn {
  &:hover {
    svg {
      cursor: pointer;
      stroke: #9dbcff;
    }
  }
}
</style>
