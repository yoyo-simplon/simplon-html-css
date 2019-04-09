var my_vue = new Vue({
    el: '#chat_box',
    data: {
        utilisateur: "",
        commentaire: "",
        date: "",
        mon_tableau: [],
    },
    methods: {
        envoyer: function () {
            this.mon_tableau.push({
                pseudo: this.utilisateur,
                message: this.commentaire,
                heure: this.date = new Date().toLocaleString(),
                edit: false
            }),
            this.message = ""
        },
        remove_message: function (index) {
            this.mon_tableau.splice(index, 1)
        }
    }
})