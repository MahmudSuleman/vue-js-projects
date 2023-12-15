<template>
  <div class="max-w-2xl bg-gray-300 mx-auto mt-5">
    <h1 class="text-2xl text-gray-600 text-center p-5">Todo List</h1>
    <hr class="border-2 my-2">
    <button class="border border-green-300 p-3">Show Add Form</button>
    <div :class="{'hidden':show_form}"></div>
    <div class="p-5">
      <input type="text"
             :disabled="todosStore.filteredTodo <= 0"
             class="rounded-lg p-2 border border-gray-600 min-w-full"
             v-model="todosStore.query"
             placeholder="search todos(title, body)">
    </div>
    <hr class="border-2 my-2">
    <div class=" space-y-5">
      <todo-item v-for="todo in todosStore.filteredTodo" :todo="todo"/>
    </div>
  </div>
</template>

<script setup>
import {useTodoStore} from "@/stores/TodoStore";
import TodoItem from './TodoItem.vue'
import {ref} from "vue";

let show_form = ref(false)

const todosStore = useTodoStore();
</script> 