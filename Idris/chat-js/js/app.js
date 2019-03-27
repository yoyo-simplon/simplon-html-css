new Vue({
    el: "#app",
    data:{
        message: "",
        chats: [],
    },
    methods: {
       envoyerMessage: function (message){
           this.chats.push({
               value: message,
               edit:'',
               date: '',
               
           });
           this.message = "";
       },
       
    },
    computed: {
        createdAtDisplay() {
            return moment ( chat.created_at).format('DD-MM-YYYY h:mm A');
        }
    }
})

