import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	adminInfo: {
		avatar: 'default.jpg'
	},
}
const actions = {
	async getAdminData() {
	}
}
export default new Vuex.Store({
	state,
	actions
})