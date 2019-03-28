var prenom = prompt("Entrez votre prénom");
document.getElementById("name").innerHTML = prenom;

new Vue({
    el: '#app',
    data: {
        botMessage: '',
        youMessage: '',
        messages: [{
                body: "Bienvenue sur le chat " + prenom + ", je suis Bot!",
                author: 'bot',
                edit: false,
                timestamp: moment().format('LTS'),
            },
            {
                body: 'Merci Bot!',
                author: 'you',
                edit: false,
                timestamp: moment().format('LTS'),
            },
            {
                body: "Fais comme chez toi!",
                author: 'bot',
                edit: false,
                timestamp: moment().format('LTS'),
            }
        ]
    },
    methods: {
        sendMessage: function (e) { // Ajoute dynamiquement à l'array donc à la liste
        if (e === 'you') {
            this.messages.push({
                body: this.youMessage,
                author: 'you',
                timestamp: moment().format('LTS'),
                edit: false,
            }),
            this.youMessage = ''; // Clear form après envoi
        } else {
            this.messages.push({
                body: this.botMessage,
                author: 'bot',
                timestamp: moment().format('LTS'),
                edit: false,
            }),
            this.botMessage = ''; // Clear form après envoi
        }
        },
        clearAllMessages() {
            this.messages = []
        },
        removeMessage: function (e) { // Fonction pour enlever un item
        this.messages.splice(this.messages.indexOf(e), 1);
    }
    },
   
});

// https://codepen.io/manifoldkaizen/pen/oqzOKw