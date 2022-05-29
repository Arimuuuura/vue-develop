const helloComponent = {
	template: '<p>Hello! from local</p>'
}

const buttonCounter = {
	template: '<div><span>count: </span><button v-on:click="countUp">{{ count }}</button></div>',
	data: () => ({
		count: 0
	}),
	methods: {
		countUp: function(e) {
			this.count++
		}
	}
}

const app = Vue.createApp({
	data: () => ({
		
	}),
	components: {
		'hello-component': helloComponent,
		'button-counter': buttonCounter
	}
})

app.component('hello', {
	template: '<p>Hello! from global</p>'
});

app.mount('#app');
