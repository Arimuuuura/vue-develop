const app = Vue.createApp({
	data: () => ({
		newItem: ''
	}),
	methods: {
		addItem: () => console.log("clicked!!")
	}
});
app.mount('#app');
