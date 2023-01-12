import {ref} from "vue";

let  todoStore =  ref([
    {
        id:1,
        title: 'my first todo',
        body: 'this is my first todo from my vue js projects project.'
    },
    {
        id:2,
        title:'my second todo',
        body:'this is my second todo from vue js projects project.'
    },
    {
        id:3,
        title:'my third todo',
        body:'this is my third todo from vue js projects project'
    }
]);

function deleteTodo(id){
    todoStore.value = todoStore.value.filter((item)=>{
        return item.id !== id;
    })
}

export {todoStore, deleteTodo}