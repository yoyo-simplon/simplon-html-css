

let app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos: []
    },
    methods: {
        addTodo (todo) {
            this.todos.push(todo)
            this.newTodo = ''
        },
        cancelTodo () {
            this.newTodo = ''
        },
        removeTodo (index) {
            this.todos.splice(index, 1)
        },
        clearAll () {
            this.todos = []
        }
    }
})

