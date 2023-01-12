<template>
  <h1>User Detail</h1>

  <div>
    <p>id: {{ $route.params.id }}</p>
  </div>


</template>

<script>
export default {
  name: "User",
  data() {
    return {
      users: [{id: 1, name: 'mudi'}, {id: 2, name: 'wunnam'}]
    }
  }
}
</script>

<style scoped>

</style>