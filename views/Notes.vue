<template>
  <div class="row g-0">
    <div class="col-2 mt-5"><Labels /></div>
    <div class="col-10">
      <div class="row g-0">
        <div class="col">
          <Notes />
        </div>
        <div class="col child-outlet"><router-view></router-view></div>
      </div>
    </div>
  </div>
</template>
<script>
import Notes from "../src/components/notes/Notes.vue";
import Labels from "../src/components/labels/LabelList.vue";

export default {
  components: {
    Notes,
    Labels,
  },
};
</script>

<style scoped>
.child-outlet:empty {
  flex: unset;
}
</style>
