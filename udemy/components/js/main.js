const app = Vue.createApp({
	data: () => ({
		
	})
})

app.component('hello', {
	template: '<p>Hello! from component</p>'
});

app.mount('#app');
