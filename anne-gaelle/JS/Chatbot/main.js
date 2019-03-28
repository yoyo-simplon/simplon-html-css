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
                timestamp: moment().format('LTS'),
            },
            {
                body: 'Merci Bot!',
                author: 'you',
                timestamp: moment().format('LTS'),
            },
            {
                body: "Fais comme chez toi!",
                author: 'bot',
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
            }),
            this.youMessage = ''; // Clear form après envoi
        } else {
            this.messages.push({
                body: this.botMessage,
                author: 'bot',
                timestamp: moment().format('LTS'),
            }),
            this.botMessage = ''; // Clear form après envoi
        }
        },
        clearAllMessages() {
            this.messages = []
        }
    }
});

// https://codepen.io/manifoldkaizen/pen/oqzOKw