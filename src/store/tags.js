export default ({
	state: {
		tags: [
        {
          title: 'Comedy',
          use: false
        },
        {
          title: 'Western',
          use: false
        },
        {
          title: 'Adventure',
          use: false
        },

      ]
	},
	getters: {
		tags(state) {
			return state.tags;
		}
	},
	mutations: {
	  newTag(state, payload) {
	  	state.tags.push(payload)
	  }
	},
	actions: {
		newTag({commit}, payload) {
		  commit('newTag', payload);
		}
	}
})