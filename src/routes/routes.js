import Home from "@/components/Home.vue";
import TodoList from "@/todo/TodoList.vue";
import TodoDetails from "@/todo/TodoDetails.vue";

export const routes = [
    {
         path: "/", 
         name: "Home",
         component: Home 
        },
    {
         path: "/todo", 
         name: "TodoList",
         component: TodoList
         },
    {
         path: "/todo/:id", 
         name: "TodoDetails",
         component: TodoDetails
         },
];