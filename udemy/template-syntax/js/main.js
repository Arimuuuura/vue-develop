const app = Vue.createApp({
	data: () => ({
		message1: 'Hello arimura',
		message2: 'Hello arimura2'
	}),
	methods: {
		clickHandler: function(event) {
			this.message = 'GoodBey arimura'
		}
	}
}).mount('#app')
