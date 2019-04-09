var myli = new Vue({
    el: '#myli',
    data: {
        element:"",
        todos: [{
                text: "list1",
                completed: false,
                edit:false
            },
            {
                text: "liste2",
                completed: false,
                edit:false
            }
        ]
    },
    mounted(){
this.text=localStorage.text;
this.completed=localStorage.completed;
this.edit=localStorage.edit;
    },watch:{
        stockage(text,completed,edit){
localStorage.text=text;
localStorage.completed=completed;
localStorage.edit=edit;
        }
    },
    methods: {
        deleteliste: function (index) {
            myli.todos.splice(index, 1);
        },
        modifier: function (el) {
            this.edit = true;
        },
        ajout:function(el){
            myli.todos.push({ text: el,completed: false,edit:false  });
        }

    }
})