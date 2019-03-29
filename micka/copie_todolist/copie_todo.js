var taskApp = new Vue({
  el: '#taskApp',
  data: {
    tasks: [
   
        
    ]
  },
  methods: {
    addTask: function(o) {
     o. preventDefault();
      this.tasks.push({
        name: this.tasks.name,
        done: false
      });
    },
    deleteTask: function(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1)
    }
  }
});