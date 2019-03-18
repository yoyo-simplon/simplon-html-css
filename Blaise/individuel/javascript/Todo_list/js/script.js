// var my_vue = new Vue ({
//   el: "#todo",

//   data: {
//     mon_tableau: [],
//     saisi: "",
//     mon_index: 0
//   },

//   methods: {
//     add_element: function () {
//       my_vue.mon_tableau.push(this.saisi),
//       this.mon_index++,
//       console.log(this.mon_index)
//       console.log(this.saisi),
//       this.saisi = ""
//     },

//     delete_element: function () {
//       // my_vue.mon_tableau.splice(0, 1),
//       console.log("delete")
//     }
//   }
// })


var my_vue = new Vue ({

  el: "#todo",

  data: {
    mon_tableau: [],
    saisi: "",
    index: 0,
  },
  methods: {
    add_element: function () {
          this.mon_tableau.push({index: this.index, tache: this.saisi}),
          this.index++
         console.log(this.index),
         this.saisi = ""
        },
    delete_element: function () {
          
    }

    }
  
})