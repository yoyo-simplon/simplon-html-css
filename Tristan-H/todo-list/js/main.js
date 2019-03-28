let newtask = {
  props: {
    state: "",
    task: "",
  },

  template: `<li id="item">
               <p>{{task}}</p>
               <p>tâche {{ state }} </p>
               <input type="radio" id="en-cours" value="en cours" v-model="state" checked="checked">
               <label for="en cours">en cours</label>
               <input type= "radio" id= "fini" value= "fini" v-model= "state" class= " custom-radio" >
               <label for="fini">fini</label>
               <button name= "deletetask" id= "deletetask" v-on: click = "deletetask" class= " btn-danger" > supprimer </button>
             </li>`
};
var app =new Vue({
  el: '#app',
  components:{newtask},
  
  data: {
    state:"",
    task:"",
    list:[],
  },
  
  methods: {
    addTask: function(){
      this.list.push({components:{newtask} });
    },
    deletetask:function(){
      this.list.splice({components:{newtask}});
    }
  },

  
 });