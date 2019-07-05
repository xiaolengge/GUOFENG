<template>
	<div>
<el-form :label-position="labelPosition"  label-width="80px" :model="formLabelAlign">
  <el-form-item label="输入店名">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="店面图片">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="配送费">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
   <el-button type="primary" @click="tijiao" id="w-hezuo">立即创建</el-button>
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
	#w-hezuo{
		background: #22d783;
		border-color:#22d783;
		
	}
	.el-form{
		background: #f5f5f6;
	}
</style>
