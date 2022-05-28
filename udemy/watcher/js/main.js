const app = Vue.createApp({
	data: () => ({
		message: 'Hello arimura',
		km: 0,
		m: 0,
		firstName: '',
		lastName: '',
		watchedFullName: ''
	}),
	// watch よりシンプルに実装できる
	computed: {
		computedFullName: function (params) {
			return `${this.firstName} ${this.lastName}`
		}
	},
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
		},
		firstName: function(value) {
			this.watchedFullName = `${value} ${this.lastName}`;
		},
		lastName: function(value) {
			this.watchedFullName = `${this.firstName} ${value}`;
		}
	}
}).mount('#app')