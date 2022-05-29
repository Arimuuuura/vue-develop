const app = Vue.createApp({
	data: () => ({
		message: 'Hello arimura',
		checked: false,
		colors: [],
		color: '',
		selected: '',
		arraySelected: '',
		messageLazy: '',
		messageTrim: '',
		messageNumber: ''
	})
}).mount('#app');
