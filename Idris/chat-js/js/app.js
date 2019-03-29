// change la langue de moments JS en FR
moment.locale('fr', {
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Aujourd’hui à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'dans %s',
        past: 'il y a %s',
        s: 'quelques secondes',
        m: 'une minute',
        mm: '%d minutes',
        h: 'une heure',
        hh: '%d heures',
        d: 'un jour',
        dd: '%d jours',
        M: 'un mois',
        MM: '%d mois',
        y: 'un an',
        yy: '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function (number) {
        return number + (number === 1 ? 'er' : 'e');
    },
    meridiemParse: /PD|MD/,
    isPM: function (input) {
        return input.charAt(0) === 'M';
    },
    // In case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example).
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
    // },
    meridiem: function (hours, minutes, isLower) {
        return hours < 12 ? 'PD' : 'MD';
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // Used to determine first week of the year.
    }
});

// Enregistrer une directive globale appelée `v-focus`
Vue.directive('focus', {
    // Quand l'élément lié est inséré dans le DOM...
    inserted: function (el) {
        // L'élément prend le focus
        el.focus()
    }
})





var chatJs = new Vue({
    el: "#app",
    data: {
        message: "",
        salon: "salon2",
        user: "",
        editPseudoInput: true,
        listUsers: [],
        chats: [],
        salon2s: [],
    },
    mounted() {

        // Met le focus sur input ajout de tâche
        // let input = document.querySelector('[autofocus]');
        // if (input) {
        //     input.focus();
        // };

        // Si il y a des données locales, elles seront chargées
        if (localStorage.getItem('dataLocal')) {
            try {
                this.listUsers = JSON.parse(localStorage.getItem('dataLocal'));
            } catch (e) {
                localStorage.removeItem('dataLocal');
            }
        };
        if (localStorage.getItem('dataLocalChats')) {
            try {
                this.chats = JSON.parse(localStorage.getItem('dataLocalChats'));
            } catch (e) {
                localStorage.removeItem('dataLocalChats');
            }
        };
        if (localStorage.getItem('dataLocalSalon2s')) {
            try {
                this.salon2s = JSON.parse(localStorage.getItem('dataLocalSalon2s'));
            } catch (e) {
                localStorage.removeItem('dataLocalSalon2s');
            }
        };
    },
    methods: {
        envoyerMessage: function () {
            moment.locale('fr');
            if (this.editPseudoInput == true) {

                this.listUsers.push({
                    user: this.user,
                });
                this.editPseudoInput = false;
            }
            this.editPseudoInput = false;


            if (this.salon == "chats") {
                this.chats.push({
                    value: this.message,
                    edit: '',
                    date: moment().local('fr').format("[Le] DD MMMM YYYY, à HH:mm:ss"),
                    pseudo: this.user,

                    // BONUS, à voir comment mettre à jour les date en fonction du jour...
                    //    date: moment().locale('fr').calendar(null, { // Date et heure de l'envoi avec momentJS
                    //     sameDay : '[Aujourd’hui à] HH:mm:ss', // le meme jour 
                    //     lastDay : '[Hier à] HH:mm:ss', // la  veille
                    //     lastWeek : 'dddd [dernier à] HH:mm:ss', // la semaine dernière
                    //     sameElse: '[le] DD/MM/YYYY [à] HH:mm:ss' // sinon, affiche la date et l'heure

                    // }),


                });
            }
            if (this.salon == "salon2") {

                this.salon2s.push({
                    value: this.message,
                    edit: '',
                    date: moment().local('fr').format("[Le] DD MMMM YYYY, à HH:mm:ss"),
                    pseudo: this.user,

                    // BONUS, à voir comment mettre à jour les date en fonction du jour...
                    //    date: moment().locale('fr').calendar(null, { // Date et heure de l'envoi avec momentJS
                    //     sameDay : '[Aujourd’hui à] HH:mm:ss', // le meme jour 
                    //     lastDay : '[Hier à] HH:mm:ss', // la  veille
                    //     lastWeek : 'dddd [dernier à] HH:mm:ss', // la semaine dernière
                    //     sameElse: '[le] DD/MM/YYYY [à] HH:mm:ss' // sinon, affiche la date et l'heure

                    // }),



                });

            }



            this.message = ""; // remet à zéro la zonne de texte
            //    this.user = ""; // remet à zéro la zonne de texte
            this.saveOnLocal();




        },
        editMessage: function (chat) {
            chat.edit = true;
        },
        editInputMessage(chat) {
            chat.edit = false;
        },
        goChats: function () {
            this.salon = "chats";
        },
        goSalon2: function () {

            this.salon = "salon2";
        },
        deleteMessage: function (index) {
            // alert("test")
            if (this.salon == "chats") {
                this.chats.splice(index, 1);
            };
            if (this.salon == "salon2") {
                this.salon2s.splice(index, 1);
            };
            this.saveOnLocal();
        },
        changePseudo: function () {
            this.listUsers.push({
                user: this.user,
            });
            this.editPseudoInput = false;
            this.saveOnLocal();
        },
        // Sauvegarde des nouvelles données locales
        saveOnLocal() {
            const parsed = JSON.stringify(this.listUsers);
            localStorage.setItem('dataLocal', parsed);

            const parsedChats = JSON.stringify(this.chats);
            localStorage.setItem('dataLocalChats', parsedChats);

            const parsedSalon2s = JSON.stringify(this.salon2s);
            localStorage.setItem('dataLocalSalon2s', parsedSalon2s);
        },
        // Lecture des données locales sauvegardés
        

    },



})