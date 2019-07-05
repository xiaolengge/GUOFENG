<template>
  <div id="app">
		<vheader></vheader>
		<router-view  v-if="isRouterAlive"></router-view>
		<dibu class="w-dibi-a"></dibu>
  </div>
</template>

<script>


export default {
	name: 'app',
	components: {	
	},
	provide(){
		return{
			reload:this.reload
		}
	},
	data(){
		return{
			isRouterAlive:true
		}
	},
	methods:{
		reload(){
			this.isRouterAlive=false
			this.$nextTick(function(){
				this.isRouterAlive = true
			})
		}
	},
	created() {

    },
}
</script>

<style>

</style>
