<template>
	<div class="manage">
		<button v-on:click="add" class="addBtn">新增</button>
		<div class="input-area" v-show="showAdd">
			<input type="text" placeholder="请输入人员姓名" v-model="nameValue">
			<button v-on:click="addName">确定</button>
		</div>
		<table class="tcs">
			<tr>
				<th>姓名</th>
				<th>操作</th>
			</tr>
			<tr v-for="(item,index) in peoples">
				<td>{{item.name}}</td>
				<!-- <td>张三</td> -->
				<td v-bind:id="index"><span v-on:click="edit">编辑</span><span v-on:click="del">删除</span></td>
			</tr>
		</table>
		<div class="wrap" v-show="showEdit">
			<div class="content">
				<input type="text" placeholder="请输入新姓名" v-model="newName">
				<button v-on:click="cancel">取消</button>
				<button v-on:click="editName">确定</button>
			</div>
		</div>
		<footer-nav v-bind:class="{'isManage':isNowPage}"></footer-nav>
	</div>
</template>

<script>
	import FooterNav from '../../components/footer.vue'
	export default{
		components:{
			FooterNav
		},
		data(){
			return {
				isNowPage:true,
				showAdd:false,
				showEdit:false,
				peoples:[{"name":'John'},{"name":"Marry"}],
				nameValue:'',
				newName:'',
				editId:0
			}
		},
		methods:{
			add:function(){
				this.showAdd = true
			},
			addName:function(){
				var val = this.nameValue;
				if(val.trim() == ''){
					alert("请输入新增人员姓名");
				}else{
					var data = {};
					data.name = val;
					this.peoples.push(data);
				}
			},
			del:function(e){
				var id = e.target.offsetParent.id;
				this.peoples.splice(id,1);
			},
			edit:function(e){
				var id = e.target.offsetParent.id;
				this.showEdit = true;
				this.editId = id;
				this.newName = this.peoples[id].name;
			},
			cancel:function(){
				this.showEdit = false;
			},
			editName:function(){
				var newval = this.newName;
				if(newval.trim() == ''){
					alert("请输入姓名");
				}else{
					this.peoples[this.editId].name = this.newName;
					this.showEdit = false;
				}
			}
		}
	}
</script>
<!-- 
	v-show:前者一开始就加载,适用于频繁的切换;
	v-if:判断布尔值,为true才加载渲染
 -->

 <style>
 	.addBtn{width:200px;padding:5px 0;background-color: #41b883;font-size:16px;color:white;}
 	.tcs{width:200px;margin:0 auto;}
 	.tcs td span{margin-left:5px;font-size:15px;}
 </style>
