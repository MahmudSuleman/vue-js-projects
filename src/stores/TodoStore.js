import { defineStore } from "pinia";

export const useTodoStore = defineStore('todos', {
    state: () => ({
        query: '',
        showAddForm: false,
        selectedTodo:{
            id:null, 
            title:null,
            body:null
        },
        todos: [
            {
                id: 1,
                isComplete: false,
                title: 'my first todo',
                body: 'this is my first todo from my vue js projects project.',
                createdAt: new Date(2024, 1, 1)
            },
            {
                id: 2,
                isComplete: false,
                title: 'my second todo',
                body: 'this is my second todo from vue js projects project.',
                createdAt: new Date(2024, 1, 2)
            },
            {
                id: 3,
                isComplete: false,
                title: 'my third todo',
                body: 'this is my third todo from vue js projects project',
                createdAt: (new Date(2024, 1, 3))
            }
        ]
    }),
    actions: {
        addTodo(title, body) {
            if(this.selectedTodo.id != null){
                this.todos = this.todos.map((item)=>{
                    if(item.id == this.selectedTodo.id){
                       item.title = title
                       item.body = body
                    }
                    return item;
                })
            }else{                
                this.todos.push({
                    id: Math.floor(Math.random() * 100),
                    title,
                    body,
                    isComplete: false,
                    createdAt: new Date()
                })
            }
        },
        deleteTodo(id) {
            this.todos = this.todos.filter((item) => {
                return item.id !== id;
            })
        },
        toggleComplete(id) {
            this.todos = this.todos.map((item) => {
                if (item.id === id) {
                    item.isComplete = !item.isComplete 
                }
                return item;
            })
        },
        toggleAddForm() {
            this.showAddForm = !this.showAddForm
        },

        toggleEditForm(id) {
            this.showAddForm = true
            let todo = this.todos.filter(item => item.id===id)[0]
            this.selectedTodo.id =todo.id
            this.selectedTodo.title =todo.title
            this.selectedTodo.body =todo.body   
        },
        currentTodo(id) {
            return this.todos.filter(item => { return item.id === id })[0];
        },
    },
    getters: {
        filteredTodo(state) {
            let q = state.query.trim().toLowerCase()

            const processAndSortTodos = (todos) => {
                return todos
                    .map(item => ({
                        ...item,
                        createdAt: new Date(item.createdAt) // Convert to Date object for accurate sorting
                    }))
                    .sort((a, b) => b.createdAt - a.createdAt) // Sort in descending order
                    .map(item => ({
                        ...item,
                        createdAt: item.createdAt.toISOString().split('T')[0] // Convert back to string format
                    }));
            };

            if (q.length === 0) {
                return processAndSortTodos(this.todos);
            }

            return processAndSortTodos(state.todos)
                .filter(item => {
                    return item.title.toLowerCase().includes(q) || item.body.toLowerCase().includes(q)
                });
        },

        completedStyle(todo) {

        },

    }
})