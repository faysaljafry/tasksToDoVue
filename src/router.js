import { createRouter, createWebHashHistory } from "vue-router";

import Tasks from "./components/todos/TodoItems.vue";
import Dashboard from "./components/Dashboard.vue";
import NotFound from "./components/NotFound.vue";
import NotesView from "../views/Notes.vue";
import NoteEdit from "./components/notes/NoteAddEdit.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/dashboard", component: Dashboard },
    { path: "/tasks", component: Tasks },
    {
      path: "/notes",
      component: NotesView,
      children: [
        { path: "new", component: NoteEdit },
        { path: "edit/:id", component: NoteEdit },
      ],
    },
    { path: "/", component: Dashboard },
    { path: "/:pathMatch(.*)", component: NotFound },
  ],
  linkActiveClass: "active text-info",
  linkExactActiveClass: "active",
});

export default router;
