<template>
	<div>
<el-form :label-position="labelPosition"  label-width="80px" :model="formLabelAlign">
  <el-form-item label="名称">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
   <el-button type="primary" @click="tijiao">立即创建</el-button>
</el-form>
	</div>
</template>

<script>
	  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    },
	 methods:{
		tijiao(e){
        let params = new URLSearchParams();
		params.append('dmin', this.formLabelAlign.name);
		params.append('dmian', this.formLabelAlign.region);
		params.append('fyong', this.formLabelAlign.type);
		axios.post('/api',params).then(function (response) {
				alert(response.data)
			})
			.catch(function (error) {
			console.log(error);
			});

    }
	 }
  }
  
</script>

<style>
</style>
