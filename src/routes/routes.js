import Home from "@/components/Home.vue";
import TodoList from "@/todo/TodoList.vue";

export const routes = [
    { path: "/", component: Home },
    { path: "/todo", component: TodoList },
];