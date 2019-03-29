var prenom = prompt("Entrez votre prénom");
document.getElementById("name").innerHTML = prenom;

new Vue({
    el: '#app',
    data: {
        selected: 'Bot-spam',
        botMessage: '',
        youMessage: '',
        messages: [{
                body: "Bienvenue sur le chat " + prenom + ", je suis Bot!",
                author: 'bot',
                edit: false,
                timestamp: moment().format('LTS'),
                selected: 'Bot-spam',
            },
            {
                body: 'Merci Bot!',
                author: 'you',
                edit: false,
                timestamp: moment().format('LTS'),
                selected: 'Bot-spam',
            },
            {
                body: "Fais comme chez toi!",
                author: 'bot',
                edit: false,
                timestamp: moment().format('LTS'),
                selected: 'Bot-spam',
            },
            {
                body: "Let's play a game...",
                author: 'bot',
                edit: false,
                timestamp: moment().format('LTS'),
                selected: 'Gaming',
            },
            {
                body: "Work hard, bot hard!",
                author: 'bot',
                edit: false,
                timestamp: moment().format('LTS'),
                selected: 'Work',
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
                        selected: this.selected,
                    }),
                    this.youMessage = ''; // Clear form après envoi
            } else {
                this.messages.push({
                        body: this.botMessage,
                        author: 'bot',
                        timestamp: moment().format('LTS'),
                        edit: false,
                        selected: this.selected,
                    }),
                    this.botMessage = ''; // Clear form après envoi
            }
        },
        clearAllMessages() {
            this.messages = []
        },
        removeMessage: function (e) { // Enlève un item
            this.messages.splice(this.messages.indexOf(e), 1);
        },
        channelSelected: function (messages, selected) { // Retourne les messages en fonction des salons
            return messages.filter(function (f) {
                return f.selected == selected;
            })
        }
    },
});

//TODO// Ajouter la fonction pour mettre en stockage local et rappeler