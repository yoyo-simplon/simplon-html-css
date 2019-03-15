new Vue({
    el: "#app",
    data:{
        task:"",
        todos:[
        ]
    },
    mounted() {
        if (localStorage.getItem('test')) {
          try {
            this.todos = JSON.parse(localStorage.getItem('test'));
          } catch(e) {
            localStorage.removeItem('test');
          }
        }
    },
    methods:{
        addTask:function(task){
            this.todos.push({value: task , edit:'', termine:''});
            this.task="";
            this.saveCats()
        },
        editTask: function(todo){
            todo.edit = true;
            console.log(todo);

        },
        deleteTask: function(index){
            this.todos.splice(index,1)
        },
        saveCats() {
            const parsed = JSON.stringify(this.todos);
            localStorage.setItem('test', parsed);
            
          }
    }
})