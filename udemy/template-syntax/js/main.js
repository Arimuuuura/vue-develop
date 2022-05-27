const app = Vue.createApp({
	data: () => ({
		message: 'Hello arimura'
	}),
	methods: {
		clickHandler: function(event) {
			this.message = 'GoodBey arimura'
		}
	}
}).mount('#app')
