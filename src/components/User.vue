<template>
  <h1>User</h1>

  <div>
    <ul>
      <li v-for="user in users" :key='user'>
        <router-link :to="`/user/${user.id}`">{{user.name}}</router-link>
      </li>
    </ul>
  </div>


</template>

<script>
export default {

  setup(){
    const useUserStore = useUserStore();
    console.log(useUserStore)

    return {
       users: useUserStore
    }
  }
}
</script>

<style scoped>

</style>