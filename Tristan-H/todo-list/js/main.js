var app5 = new Vue({
  el: '#app-5',
  data: {
   todos: [{
       text: 'Apprendre JavaScript'
     },
     {
       text: 'Apprendre Vue'
     },
     {
       text: 'Créer quelque chose de génial'
     }
   ]
  },
  methods: {
    seeTodos: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
  
});