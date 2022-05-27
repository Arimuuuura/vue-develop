const app = Vue.createApp({
	data: () => ({
		message1: 'Hello arimura',
		message2: 'Hello arimura2',
		message3: 'Hello <span style="color: red">arimura3</span>',
		message4: 'Hello arimura4',
		message5: 'Hello arimura5',
		message6: 'Hello arimura6',
		number: 100,
		ok: true,
		url: 'https://google.co.jp'
	}),
	methods: {
		clickHandler: function(event) {
			this.message = 'GoodBey arimura'
		}
	}
}).mount('#app')
