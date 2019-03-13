var app = new Vue({
    el: '#app',
    data: {
        todos: [{
                text: 'Learn JavaScript',
                completed: true
            },
            {
                text: 'Learn Vue',
                completed: false
            },
            {
                text: 'Build something awesome',
                completed: false
            }
        ]
    },
    methods: {
        addTodo: function (e) { // Ajoute dynamiquement à l'array donc à la liste
            this.todos.push({text: e});
            e.resetForm(); // sensé faire un clear form après l'ajout à l'array - ne fonctionne pas :<
        },
        removeTodo: function (e) { // FONCTION POUR ENLEVER UN ITEM ... JE DOIS TROUVER COMMENT LIER L'INDEX
            // this.todos.splice({text: e}); // NOT GOOD - enlève TOUTE l'array, need index - //TODO// le remove
            this.todos.splice(this.todos.indexOf(e),1);
        }
    }
});

//TODO// A FAIRE : clear this.form