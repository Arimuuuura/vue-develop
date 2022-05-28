const app = Vue.createApp({
	data: () => ({
		message: 'Hello arimura',
		km: 0,
		m: 0
	}),
	watch: {
		message: function(newValue, oldValue) {
			console.log('new: %s, old: %s', newValue, oldValue);
		},
		km: function(value) {
			this.km = value;
			this.m = value * 1000;
		},
		m: function(value) {
			this.m = value;
			this.km = value / 1000;
		}
	}
}).mount('#app')