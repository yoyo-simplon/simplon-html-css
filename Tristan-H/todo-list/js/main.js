let newtask={
  props:{
    state: "",
    task:""
},
 
  template: `<div id="item">
               <p>{{task}}</p>
               <p>tâche {{ state }} </p>
               <input type="radio" id="wait" value="en attente" v-model="state">
               <label for= "wait" > en attente</label>
               <input type="radio" id="en-cours" value="en cours" v-model="state" checked="checked">
               <label for="en cours">en cours</label>
               <input type="radio" id="fini" value="fini" v-model="state">
               <label for="fini">fini</label
               ></div>`
};
var app =new Vue({
  el: '#app',
  data: {
    state:"",
    task:"",
  },
  components:{newtask},
  methods: {
    addTask: function(){
      this.compoments.push(newtask);
    }
  },

  
 });