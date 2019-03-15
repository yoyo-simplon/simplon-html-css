new Vue({
  el: '#app',
  data: {
    taches: [

    ],
  },
  methods: {
    addTache: function () {
      this.taches.push({
        value: '',
        test: '',
        termine: false
      });
    },
    deleteTache: function (index) {
      console.log(index);
      console.log(this.taches);
      this.taches.splice(index, 1);
    },

  }
});