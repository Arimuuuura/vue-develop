const app = Vue.createApp({
	data: () => ({
		isLarge: true,
		hasError: true,
		largeClass: 'large',
		dangerClass: 'text-danger',
		classObject: {
			large: true,
			'text-danger': true
		},
		largeObject: {
			large: true,
			'bg-gray': true
		},
		dangerObject: {
			'text-danger': true
		},
		color: 'blue',
		fontSize: 36,
		styleObject: {
			color: 'blue',
			fontSize: '48px'
		}
	})
}).mount('#app')
