<template>
    <div>
      <hr>
      <form @submit.prevent="submitTodo">
        <p>Add Todo</p>
        <div class="mb-2">
          <label for="todo-title">Title <required-star /></label>
          <input
            v-model="todo.title"
            id="todo-title"
            type="text"
            class="rounded-lg p-2 border border-gray-600 min-w-full"
            @input="validateTitle"
          >
          <p v-if="errors.title" class="text-red-600">{{ errors.title }}</p>
        </div>
        <div class="mb-2">
          <label for="todo-body">Body <required-star /></label>
          <textarea
            v-model="todo.body"
            id="todo-body"
            class="rounded-lg p-2 border border-gray-600 min-w-full"
            @input="validateBody"
          ></textarea>
          <p v-if="errors.body" class="text-red-600">{{ errors.body }}</p>
        </div>
        <button
          type="submit"
          class="border border-3 border-green-300 p-2 rounded-md bg-green-500 text-white"
          :disabled="!isFormValid"
        >
          Submit
        </button>
      </form>
      <hr>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed } from 'vue';
  import { useTodoStore } from '../stores/TodoStore';
  import RequiredStar from './RequiredStar.vue';
  
  const todoStore = useTodoStore();
  
  const todo = reactive({
    title: '',
    body: ''
  });
  
  const errors = reactive({
    title: '',
    body: ''
  });
  
  const validateTitle = () => {
    errors.title = todo.title.trim() ? '' : 'The title field is required';
  };
  
  const validateBody = () => {
    errors.body = todo.body.trim() ? '' : 'The body field is required';
  };
  
  const isFormValid = computed(() => {
    return todo.title.trim() !== '' && todo.body.trim() !== '' && !errors.title && !errors.body;
  });
  
  const submitTodo = async () => {
    if (isFormValid.value) {
      try {
         todoStore.addTodo(todo.title, todo.body);
        // Reset form after successful submission
        todo.title = '';
        todo.body = '';
        // Optionally, show a success message or perform other actions
        console.log('Todo added successfully');
        todoStore.toggleAddForm()
      } catch (error) {
        console.error('Error adding todo:', error);
        // Optionally, show an error message to the user
      }
    } else {
      validateTitle();
      validateBody();
    }
  };
  </script>