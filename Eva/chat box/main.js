var my_chatbox = new Vue({
    el: '#chatbox',
    data: {
        
        message:'',

        pseudo:'', 
        
        time: '',

        tableau: []
    },



    methods: {
        send_function: function()  {
            this.tableau.push({
              commentaire: my_chatbox.message, name: my_chatbox.pseudo, temps:my_chatbox.time = new Date().toLocaleString(), edit:false })
                        
       },

    removeElement : function(index){
        this.tableau.splice(index);
    
  }
    }


})