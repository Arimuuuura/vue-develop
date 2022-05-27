const app = Vue.createApp({
	data: () => ({
		newItem: '',
		todos: []
	}),
	methods: {
		addItem: function(event) {
			let todo = {
				item: this.newItem
			}
			if (this.newItem === '') return
			this.todos.push(todo)
			this.newItem = ''
		}
	}
});
app.mount('#app');
