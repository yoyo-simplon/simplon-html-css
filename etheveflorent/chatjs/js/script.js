var userstab = ["paul","jean"];
function adduser(user) {
  if (userstab.indexOf(user) == -1) {
    userstab.push(user);
    console.log("User add : " + user);

  }

}

var myli = new Vue({
  el: '#chat',
  data: {
    author: "",
    time: "",
    text: "",
    pseudo: "",
    visible: true,
    isEdit: false,
    userstab: userstab,
    tabs: ["general", "aide"],
    currentTab: "general",
    listmsg: [

    ]

  }, // Lecture des données locales sauvegardés
  mounted() {

    // Met le focus sur input ajout de tâche
    let input = document.querySelector('[autofocus]');
    if (input) {
      input.focus();
    };

    // Si il y a des données locales, elles seront chargées
    if (localStorage.getItem('dataLocal')) {
      try {
        this.listmsg = JSON.parse(localStorage.getItem('dataLocal'));
      } catch (e) {
        localStorage.removeItem('dataLocal');
      }
    }
  },
  methods: {
    addmsg: function () {
      var d = new Date();
      var time = d.getHours() + ":" + d.getMinutes();

      myli.listmsg.push({
        author: this.pseudo,
        time: time,
        text: this.text,
        isEdit: false,
        salon: this.currentTab
      });
      this.text = "";
      this.saveOnLocal();

    },
    setNom: function () {
      myli.pseudo = this.pseudo;
      myli.visible = !this.visible;
      adduser(this.pseudo);
    },
    autoscroll:function(){

      var element = document.getElementById('messages');
      element.scrollTop = element.scrollHeight;
    },
    saveOnLocal() {
      const parsed = JSON.stringify(this.listmsg);
      localStorage.setItem('dataLocal', parsed);
    }
  }
})
