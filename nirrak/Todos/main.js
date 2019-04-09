Vue.component('todo-item', {
	template: '\
	  <li>\
		{{ title }}\
		<button class="btn" v-on:click="$emit(\'remove\')">x</button>\
	  </li>\
	',
	props: ['title']
})
  
new Vue({							// initialisation d'une vue
	el: '#listedetaches',			// on greffe à vue.js sur l'élément (el:) #listedestaches
	data: {							// data est un tableau qui va contenir toutes les variables qu'on va injecter à la vue
	  newTodoText: '',
	  todos: [
		'Numéro 1 de la liste',
		'Numéro 2 de la liste',
		'Numéro 3 de la liste'
	  ]
	},
	methods: {									// création d'une nouvelle méthode
	  addNewTodo: function () {					// déclaration d'une nouvelle fonction
		this.todos.push(this.newTodoText)		// important le push pour ajouter un nouvel élément dans la liste todos
		this.newTodoText = ''					// newTodoText c'est le contenu du champ de saisie de la nouvelle tache
	  }
	}
})