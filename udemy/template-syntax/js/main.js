const app = Vue.createApp({
	data: () => ({
		message1: 'Hello arimura',
		message2: 'Hello arimura2',
		message3: 'Hello <span style="color: red">arimura3</span>'
	}),
	methods: {
		clickHandler: function(event) {
			this.message = 'GoodBey arimura'
		}
	}
}).mount('#app')
