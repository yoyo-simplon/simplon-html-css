var app = new Vue({
    el: '#app',
    data: {
        todos: [{
                text: 'Learn JavaScript'
            },
            {
                text: 'Learn Vue'
            },
            {
                text: 'Build something awesome'
            }
        ]
    },
    methods: {
        addTodo: function (e) {
            this.todos.push({text: e});
        }
    }
});

// A FAIRE : Enlever un élément