var app = new Vue({
    el: '#app',
    data: {
        editedTodo: null,
        todos: [{
                text: 'Learn JavaScript',
                completed: true,
                edit: false,
            },
            {
                text: 'Learn Vue',
                completed: false,
                edit: false,
            },
            {
                text: 'Build something awesome',
                completed: false,
                edit: false,
            }
        ]
    },
    methods: {
        addTodo: function (e) { // Ajoute dynamiquement à l'array donc à la liste
            this.todos.push({
                text: e
            });
            this.element = ''; // Clear form après envoi
        },
        removeTodo: function (e) { // Fonction pour enlever un item
            this.todos.splice(this.todos.indexOf(e), 1);
        },
        editTodo: function (todo) { // Edition du nom de la tâche au double click
            this.editedTodo = todo;
            //TODO// BUG : ne fonctionne que sur les items déjà existants dans l'array ou alors en cochant la checkbox => problème de dynamisme ?!
        },
    },
    computed: {
        count() { // Renvoie un compteur de tâches non complétées
            return this.todos.filter(todo => !todo.completed).length;
        }
    },
});