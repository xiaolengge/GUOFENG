<template>
  <div id="app">
		<vheader></vheader>
		<router-view></router-view>
		<dibu></dibu>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  },
	created() {
     var url="http://localhost:3000"
	axios.get(url+'/product')
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
    },
}
</script>

<style>

</style>
