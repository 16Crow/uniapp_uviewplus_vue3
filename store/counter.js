import {defineStore} from 'pinia'

export const counterStore = defineStore('counter', {
	state: () =>({
		count: 0
	}),
	getters: {},
	actions: {
		increment() {
			this.count ++
		}
	}
})