<template>
  <div id="app">
		<vheader></vheader>
		<router-view></router-view>
		<dibu class="w-dibi-a"></dibu>
  </div>
</template>

<script>


export default {
	name: 'app',
	components: {	
	},
	created() {
	//  var _data = {name:'qqq',age:13}
	// this.axios.post('/api',_data).then(function (response) {
	// 	console.log('发送');
	//     console.log(response);
	//   })
	//   .catch(function (error) {
	//     console.log(error);
	//   });
    },
}
</script>

<style>

</style>
