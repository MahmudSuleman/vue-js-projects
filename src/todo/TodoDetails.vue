<template>
    <div class="max-w-2xl bg-gray-300 mx-auto mt-5">
      <h1 class="text-2xl text-gray-600 text-center p-5">Todo Details</h1>
      <hr class="border-2 my-2">
      <div class="p-5">
        <todo-item   :todo="todo"/>
      </div>
      <hr class="border-2 my-2">
      <div class=" space-y-5">
        
      </div>
    </div>
  </template>
  
  <script setup>
  import {useTodoStore} from "@/stores/TodoStore";
  import { useRoute } from "vue-router";
  import TodoItem from './TodoItem.vue'
  const route = useRoute()
  const todosStore = useTodoStore();
 
  const todo = todosStore.currentTodo(parseInt(route.params.id))
  console.log(todo)
 
 
  </script> 