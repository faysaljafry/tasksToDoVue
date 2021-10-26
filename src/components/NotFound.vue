<template>
  <div>
    <h4 class="text-danger text-center mt-5">
      The page you are looking for was not Found, Please counter check your
      path.
    </h4>
    <div class="text-center">
      "{{ $route.params.pathMatch }}" does not exist in root directory folder
    </div>
  </div>
</template>
<script>
export default {};
</script>
