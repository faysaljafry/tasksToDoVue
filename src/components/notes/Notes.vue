<template>
  <div class="row g-0" v-if="!editingNote">
    <div class="col-12">
      <button
        v-if="displayMode != displayModes.card"
        @click="displayMode = displayModes.card"
        type="button"
        class="float-end btn btn-link btn-dark m-2"
      >
        <i class="fa fa-th text-light"></i>
      </button>
      <button
        v-if="displayMode != displayModes.list"
        @click="displayMode = displayModes.list"
        type="button"
        class="float-end btn mt-2 m-1 btn-link btn-dark"
      >
        <i class="fa fa-list text-light"></i>
      </button>

      <button @click="createNote" class="float-end btn-link mt-2 btn btn-dark">
        <i class="fa fa-plus text-light"></i>
      </button>
    </div>

    <div class="col-12">
      <div
        v-if="displayMode == displayModes.card"
        class="row row-cols-1 row-cols-md-4 g-4 m-1"
      >
        <div class="col" :key="todo.id" v-for="todo in $store.getters.allNotes">
          <router-link
            :to="{ name: 'editnote', params: { id: todo.id } }"
            custom
            v-slot="{ navigate }"
          >
            <NoteItemCard
              @delete="deleteNote(todo.id)"
              @click="navigate"
              class="m-1 note-card"
              :value="todo"
            >
            </NoteItemCard>
          </router-link>
        </div>
      </div>
      <div
        v-else
        class="list-group m-1 p-3"
        :key="todo.id"
        v-for="todo in $store.getters.allNotes"
      >
        <router-link
          :to="'/notes/edit/' + todo.id"
          custom
          v-slot="{ navigate }"
        >
          <NoteItemList
            @click="navigate"
            @delete="deleteNote(todo.id)"
            class="m-2"
            :key="todo.id"
            :value="todo"
          />
        </router-link>
      </div>
    </div>
  </div>
  <div class="row p-5" v-else>
    <div class="col-12">
      <NoteAddEdit @close="editingNote = null" :value="editingNote" />
    </div>
  </div>
</template>

<script>
import NoteItemCard from "./NoteItemCart.vue";
import NoteItemList from "./NoteItemList.vue";
import NoteAddEdit from "./NoteAddEdit.vue";
import router from "../../router";
// import Labels from "../labels/LabelList.vue";
export default {
  name: "Notes",
  components: {
    NoteItemCard,
    NoteItemList,
    NoteAddEdit,
  },
  data() {
    return {
      editingNote: null,
      displayModes: { card: "cards", list: "list" },
      displayMode: "cards",
    };
  },
  props: {},
  methods: {
    createNote() {
      var noteCount = this.$store.getters.allNotes.length;
      if (noteCount >= 15) {
        alert("You cannot create more than 5 notes in free version.");
      } else {
        router.push({ name: "newnote" });
      }
    },
    deleteNote(id) {
      this.$store.commit("deleteNote", id);
    },
    edit(id) {
      let todo = this.$store.getters.allNotes.find((z) => z.id == id);
      this.editingNote = { ...todo }; // clone todo to avoid any reactive properties being set
    },
  },
};
</script>

<style></style>
