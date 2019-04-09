

var chatApp = new Vue({
    el: '#chatApp',
    data: {
        messages: [],
        msg:'',
        pseudo:'',
        seen:false,
        unseen:true,
        salon:'',
        
    },
    methods: {
        sendMsg: function () { 
            this.messages.push({
                pseudo:this.pseudo,
                msg:this.msg,
                
            });
            this.$refs.msgref.focus();
            this.msg='';
         },
         
         
    },
});