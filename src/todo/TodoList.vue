<template>
  <div class="max-w-2xl bg-gray-300 mx-auto mt-5">
    <h1 class="text-2xl text-gray-600 text-center p-5">Todo List</h1>
    <hr class="border-2 my-2">
    <div class="p-5">
      <input type="text"
             :disabled="filteredTodo.length <= 0"
             class="rounded-lg p-2 border border-gray-600 min-w-full"
             v-model="query"
             placeholder="search todos(title, body)">
    </div>
    <hr class="border-2 my-2">
    <div class=" space-y-5">
      <todo-item v-for="todo in filteredTodo" :todo="todo" />
    </div>
  </div>
</template>

<script setup>
import {useTodoStore} from "@/stores/TodoStore";
import TodoItem from './TodoItem.vue'
import {computed, ref} from "vue";

const query = ref('')

const todosStore = useTodoStore();

const filteredTodo = computed(()=>{
  return todosStore.todos.filter((item)=>{
    let q = query.value.trim().toLocaleLowerCase();
    return item.title.includes(q) || item.body.includes(q);
  })
})


</script> 