const app = Vue.createApp({
	data: () => ({
		message: 'Hello arimura',
		basePrice: 100,
	}),
	computed: {
		reversedMessage: function() {
			return this.message.split('').reverse().join('')
		},
		taxIncludedPrice: {
			get: function() {
				return this.basePrice * 1.1;
			},
			set: function(value) {
				this.basePrice = value / 1.1;
			}
		}
	}
}).mount('#app');
