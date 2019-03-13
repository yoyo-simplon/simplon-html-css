var myli = new Vue({
    el: '#myli',
    data: {
        todos: [{
                text: "list1"
            },
            {
                text: "liste2"
            }
        ]
    },
    methods:{
        deleteliste:function(index){
myli.todos.splice(index,1);
        }

    }
})

new Vue({
    el: "#maliste",
    created() {
        window.addEventListener("keypress", (e) => {
            if (e.key == "Enter") {
                myli.todos.push({ text: e.target.value });
            }
        });
    }

})