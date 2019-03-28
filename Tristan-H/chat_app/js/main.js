

var chatApp = new Vue({
    el: '#chatApp',
    data: {
        message: [],
        msg:'',
        pseudo:'',
        seen:false,
        unseen:true,
        salon:'',
    },
    methods: {
        sendMsg: function () { 
            this.message.push({msg:''});
         }
    },
});