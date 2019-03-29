

var myli = new Vue({
    el: '#chat',
    data: {
        author: "",
        time: "",
        text: "",
        pseudo:"",
        visible:true,
        isEdit:false,
        tabs:["general","aide"],
        currentTab:"general",
        listmsg: [{
            time: "10:00",
            author: "cvv",
            text: "yo tout le monde",
            isEdit:false,
           salon:"general"
        }, {
            time: "10:05",
            author: "fred",
            text: "yo !",
            isEdit:false,
            salon:"general"
        },
        {
            time: "10:05",
            author: "fred",
            text: "yo !",
            isEdit:false,
            salon:"aide"
        }
    ]

    },  
    methods:{
    addmsg:function(){
        var d=new Date();
        var time=d.getHours()+":"+d.getMinutes();
   
        myli.listmsg.push({author:this.pseudo,time:time,text:this.text,isEdit:false,salon:this.currentTab});

    },
    setNom:function(){
    myli.pseudo=this.pseudo;
    myli.visible=!this.visible;
    }
    }
})
