<template>
  <NoteAddEdit v-bind="$props" @close="navigateBack" />
</template>
<script>
import router from "../src/router";
import NoteAddEdit from "../src/components/notes/NoteAddEdit.vue";
export default {
  components: {
    NoteAddEdit,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  methods: {
    navigateBack() {
      let currentRoute = router.currentRoute.value.meta;
      console.log("Current Route:", currentRoute);
      router.push({ name: currentRoute.redirectRouteName });
    },
  },
};
</script>
