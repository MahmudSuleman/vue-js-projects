<template>
  <div class="max-w-2xl bg-gray-300 mx-auto mt-5">
    <h1 class="text-2xl text-gray-600 text-center p-5">Todo List</h1>
    <hr class="border-2 my-2">
    
    <div class="p-5">
      <div class="mb-3">
        <button @click="todosStore.toggleAddForm()" class="mb-2 border border-3 border-green-700 p-2 rounded-md hover:bg-green-500 hover:text-white">Show Add Form</button>
        <div v-if="todosStore.showAddForm" class="mb-2">
         <todo-form></todo-form>
        </div>
      </div>
      <input type="text"
             :disabled="todosStore.todos <= 0"
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
import TodoForm from './TodoForm.vue'
import {ref} from "vue";

let show_form = ref(false)

const todosStore = useTodoStore();
</script> 