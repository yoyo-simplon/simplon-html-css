
new Vue({
  el: '#app',
  data: {
    pseudo: '',
    msg: '',
    daty: null,
    salon:'',
    tableau: [],
  },


  methods: {
    addchat: function () {   
      if (this.pseudo !== '' && this.msg !== '' && this.salon !== '') {
        this.tableau.push({
          salon: this.salon,
          pseudo: this.pseudo, 
          msg: this.msg,
          daty: moment().format('DD/MM/YYYY --- hh:mm:ss') });
        this.msg = "";
      }
    },

    filtreSalon: function (tableau, salon) {
      return tableau.filter(function (u) {
         return u.salon === salon })
    },
  }
});