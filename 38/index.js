var app = new Vue({
	el:'#app',
	data:{
		list:[
		{id:1,name:'iPhone 7',price:6188,count:1},
		{id:2,name:'iPad Pro',price:5888,count:1},
		{id:3,name:'MacBook Pro',price:6188,count:1},
		]
	},
	computed:{
		totalPrice:function () {
			var total = 0;
			for(let i = 0; i< this.list.length; i++){
				var item = this.list[i];
				total += item.price * item.count;
			}

			// 用正则对数进行“千位分割符” replace(/(?<=\d)(?=(\d{3})+(\.\d+)?$)/g,',')
			return total.toString().replace(/(?<=\d)(?=(\d{3})+(\.\d+)?$)/g,',')
		}
	},
	methods:{
		handleReduce:function (index) {
			if(this.list[index].count === 1) return;
			this.list[index].count--;
		},
		handleAdd:function (index) {
			this.list[index].count++
		},
		handleRemove:function (index) {
			this.list.splice(index, 1)
		},
		selectAll:function (e) {
			console.log(e)
		},
		selectGoods:function (e) {
			console.log(e)
		}
	}
})