

new Vue({
    el: '#app',
    data: {
        // newTache: 'hello',
      taches: [{value: '' , test:'', termine: false}
          
      ],
    //   success: false,
    },
    methods: {
      addTache: function () {
        this.taches.push({ value: '' , test:'' , termine: false});
      },
      deleteTache: function (index) {
        console.log(index);
        console.log(this.taches);
        this.taches.splice(index, 1);
      },

      
      // termineTache: function (index) {
      //   console.log(index);
      //   this.taches.push({index, termine: 'toto'});
      //   console.log(this.taches);

      // },

      termineTache: function (tache){
        // console.log(index);
        tache.termine = true;
        console.log(tache)
      }
      
      
    }
  });