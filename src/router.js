import { createRouter, createWebHistory } from "vue-router";

import Tasks from "./components/todos/TodoItems.vue";
import Dashboard from "./components/Dashboard.vue";
import NotFound from "./components/NotFound.vue";
import Notes from "../views/Notes.vue";
import TaskAddEdit from "../views/AddEditNote.vue";
//import { store } from "./store";
import NavbarComponent from "./components/navigation/Navbar.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/tasksToDoVue",
      components: {
        default: Dashboard,
        Navbar: NavbarComponent,
      },
      children: {},
    },
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/dashboard",
      name: "dashboard",
      components: {
        default: Dashboard,
        Navbar: NavbarComponent,
      },
      alias: "/home",
    },
    {
      path: "/tasks",
      name: "tasks",
      components: {
        default: Tasks,
        Navbar: NavbarComponent,
      },
    },
    {
      path: "/notes",
      name: "notes",
      components: {
        default: Notes,
        Navbar: NavbarComponent,
      },
      children: [
        { path: "new", name: "newnote", component: TaskAddEdit },
        {
          meta: {
            redirectRouteName: "notes",
          },

          name: "editnote",
          path: "edit/:id([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})?",
          component: TaskAddEdit,
          props: (route) => ({ id: route.params.id }),
        },
      ],
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
  linkActiveClass: "active text-info",
  linkExactActiveClass: "active",
  scrollBehavior(to, from, savedposition) {
    console.log("to", to);
    console.log("from", from);
    console.log("saved Position", savedposition);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(savedposition || { left: 0, top: 0 });
      }, 500);
    });
  },
});

export default router;
