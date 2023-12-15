import {defineStore} from "pinia";

export const useTodoStore = defineStore('todos', {
    state: () => ({
        query:'',
        todos: [
            {
                id: 1,
                isComplete:false,
                title: 'my first todo',
                body: 'this is my first todo from my vue js projects project.'
            },
            {
                id: 2,
                isComplete:false,
                title: 'my second todo',
                body: 'this is my second todo from vue js projects project.'
            },
            {
                id: 3,
                isComplete:false,
                title: 'my third todo',
                body: 'this is my third todo from vue js projects project'
            }
        ]
    }),
    actions: {
        addTodo(title, body){
             this.todos.push({id:Math.floor(Math.random() * 100), title, body, isComplete: false})
        },
        deleteTodo(id){
            this.todos = this.todos.filter((item)=>{
                return item.id !== id;
            })
        },
        toggleComplete(id){
            this.todos = this.todos.map((item)=>{
                if(item.id === id){
                    return {...item, isComplete:! item.isComplete}
                }
                return item;
            })
        },
        currentTodo( id){
            return this.todos.filter(item=>{return item.id === id})[0];
        },
    },
    getters:{
        filteredTodo(state){
            let q = state.query.trim().toLowerCase()
            return state.todos.filter(item=>{
                return item.title.includes(q) || item.body.includes(q)
            })
        },
       
        completedStyle(todo){

        },

    }
})