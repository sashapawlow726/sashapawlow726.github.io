<template lang="pug">
	.home
  	p(v-if="loading")
  		| loading...
  	ul(v-else)
  		li(v-for="img in images" :key="img.id")
  			img(
  			  :src="img.url_n"
  			)
  			div
  				p(v-if="img.ownername") {{ img.title }}
  				p(v-else) title not found
  				p By {{ img.ownername }}
  				section
  					p {{ img.datetaken}}
  					p {{ img.views}}
</template>

<script>

import '../../config.js'
import axios from 'axios'

export default {
  name: 'ImageCard',
  data() {
  	return {
  	
  	}
  }
}
</script>