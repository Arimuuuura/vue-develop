const app = Vue.createApp({
	data: () => ({
		message: 'Hello arimura'
	}),
	watch: {
		message: function(newValue, oldValue) {
			console.log('new: %s, old: %s', newValue, oldValue);
		}
	}
}).mount('#app')