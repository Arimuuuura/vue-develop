const app = Vue.createApp({
	data: () => ({
		counter: 0,
		message: ''
	}),
	methods: {
		clickHandler: function($event, msg) {
			console.log($event);
			console.log(msg);
			this.counter++;
		},
		clickTime: function() {
			this.message = new Date().toLocaleTimeString();
		}
	}
}).mount('#app');
