


Vue.component('todo-item', {
  template: '\
    <li>\
    <input type="checkbox" >{{ title }}\
      <button v-on:click="$emit(\'remove\')"><i class="far fa-trash-alt"></i></button>\
      <button class="button" @click="todo.edit = true"><i class="fas fa-pencil-alt modif"></i></button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'prendre un goûter',
        
      },
      {
        id: 2,
        title: 'jouer à LOL',
      },
      {
        id: 3,
        title: 'jouer a GTA'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})

