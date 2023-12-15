<template>
  <div class="bg-gray-700 p-5">
    <div>
      <p class="text-lg font-bold"
         :class="{'line-through':  todo.isComplete, 'text-gray-400': todo.isComplete, 'text-white': !todo.isComplete,}"
      >{{ todo.title }}</p>
      <p class="text-md"
         :class="{'line-through':  todo.isComplete, 'text-gray-400': todo.isComplete, 'text-white': !todo.isComplete,}"
      >{{ todo.body }}</p>
    </div>
    <hr class="border-2 my-5">
    <div class="space-x-5">

      <router-link to="todo/1" 
      class="text-yellow-300 font-bold border border-yellow-500 p-2 rounded-lg hover:text-white hover:bg-yellow-700 ">
      <i class="fa-solid fa-eye" aria-hidden="true"></i> View </router-link>
 
      <button
          @click="toggleTodo(todo.id)"
          class="text-green-300 font-bold border border-green-500 p-2 rounded-lg hover:text-white hover:bg-green-700 ">
        <i class="fa-solid " :class="{ 'fa-x' : todo.isComplete, 'fa-check': ! todo.isComplete}"
           aria-hidden="true"></i>
        {{ todo.isComplete ? 'Incomplete' : 'Complete' }}
      </button>
      <button @click="deleteTodo(todo.id)"
              class="text-red-500 font-bold border border-red-500 p-2 rounded-lg hover:bg-red-700 hover:text-white">
        <i class="fa-solid fa-trash" aria-hidden="true"></i> Delete
      </button>
    </div>
  </div>

</template>

<script setup>
import {useTodoStore} from "@/stores/TodoStore";
import TodoDetails from "./TodoDetails.vue";

const todosStore = useTodoStore()

function deleteTodo(id) {
  if (confirm('Are you sure you want to delete?')) {
    todosStore.deleteTodo(id);
  }

}

function toggleTodo(id) {
  todosStore.toggleComplete(id)
}

let {todo} = defineProps(['todo'])

</script>
