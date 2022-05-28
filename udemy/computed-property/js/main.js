const app = Vue.createApp({
	data: () => ({
		message: 'Hello arimura'
	}),
	computed: {
		reversedMessage: function() {
			return this.message.split('').reverse().join('')
		}
	}
}).mount('#app');
