const app = Vue.createApp({
	data: () => ({
		message: 'Hello arimura',
		colors: [
			{ name: 'Red' },
			{ name: 'Green' },
			{ name: 'Blue' },
		]
	}),
	watch: {
		colors: {
			handler: function(newValue, oldValue) {
				console.log('Update!');
			},
			deep: true
		}
	},
	methods: {
		onClick: function() {
			this.colors[1].name = 'White'
		}
	}
}).mount('#app')