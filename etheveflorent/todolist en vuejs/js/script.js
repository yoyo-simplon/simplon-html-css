var myli = new Vue({
    el: '#myli',
    data: {
        isActive:false,
      isedit:false,
      istext:true,
        todos: [{
                text: "list1",
                isedit:false
            },
            {
                text: "liste2",
                isedit:false
            }
        ]
    },
    methods:{
        deleteliste:function(index){
            myli.todos.splice(index,1);
        },
        effacer:function(){//efface toutes les lignes où la checkbox est cochés
            var listes=document.getElementsByClassName("taches.completed");

            Array.forEach(listes,(el)=>{
                myli.todos.splice(myli.todos.indexOf(el),1);
            })
        },
        completer: function(){

            this.$refs.tache.isActive=!this.$refs.tache.isActive;
        },

    /*  update:function(el,i){
            myli.todos[i].text=el.text;
            this.isedit=false;
      this.istext=true; 
      myli.todos.pop();
        }
        ,*/
        modifier:function(el){
           /* var text=prompt("Modifier la tâches",el.text);
            if(text!=null){
                el.text=text;
            }*/
            this.isedit=true;
      this.istext=false;     

        }

    }
})

new Vue({
    el: "#maliste",
    created() {
        window.addEventListener("keypress", (e) => {
            if (e.key == "Enter") {
                myli.todos.push({ text: e.target.value,isedit:false });
            }
        });
    }

}) 