const helloComponent = {
	template: '<p>Hello! from local</p>'
}

const app = Vue.createApp({
	data: () => ({
		
	}),
	components: {
		'hello-component': helloComponent
	}
})

app.component('hello', {
	template: '<p>Hello! from global</p>'
});

app.mount('#app');
