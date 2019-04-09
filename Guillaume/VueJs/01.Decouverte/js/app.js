new Vue({
    el: '#app',

    data: {
        message: 'Salut les gens',
        link: 'http://grafikart.fr',
        success: true,
        persons: ['Jonathan', 'Marion', 'Marine', 'Jean', 'Patrick']
    },
    methods: {
        close: function(){
            this.message = "Fermé"
            this.success = false
        }
    }
})