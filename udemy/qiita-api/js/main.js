const app = Vue.createApp({
	data: () => ({
		items: null,
		keyword: '',
		message: ''
	}),
	watch: {
		keyword: function(newKeyword, oldKeyword) {
			console.log(newKeyword, oldKeyword);
			this.message = 'Waiting for your typing..'
			this.debouncedGetAnswer()
		}
	},
	mounted: function() {
		// this.keyword = 'JavaScript';
		// this.getAnswer();
		this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
	},
	methods: {
		getAnswer: function() {
			if(this.keyword === '') {
				console.log('空文字');
				this.items = null;
				return
			}

			this.message = 'Loading..';
			const vm = this;
			const params = {
				page: 1,
				per_page: 20,
				query: this.keyword
			}
			axios.get('https://qiita.com/api/v2/items', { params })
			.then((res) => {
				vm.items = res.data;
			}).catch((err) => {
				vm.message = `Error ${err}`;
			}).finally(() => {
				vm.message = '';
			});
		}
	}
}).mount('#app')
