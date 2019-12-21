let elem = new Vue({
		el: '#app',
		data: {
			msg: '',
			msg_id: 0,		
			dat:  new Date(),
			showMsg: false,
			showTable: false,
			hours: 0,
			minutes: 0,
			messages: [
				{id: 0 , text: 'Поисковик вам в помощь! Но цена примерно в половину стоимости платья.' , time_date: 1},
				
			],
		} ,
	computed: {
		
		// свойство получает текущее время отправки сообщения
		todayDate(){
		let num =  this.dat.getMinutes();	
			return this.dat.getHours() + ':' + num;
		} ,
			
	} ,
	
		methods: {
			switchChat() {
			this.showTable = !this.showTable;
			
		},	
			// add new message to chat
			addMsg (e) {
				
				console.log(this.messages.push({
				id: this.msg_id++,
				text: this.msg ,
				time_date: this.todayDate,
				
				}))
				 
				setTimeout(()=> {
					let users = document.querySelectorAll(".user__info");
					let count = users.length;
					console.log(count)
					users[count - 1].style.background = "#5097d6";
						setTimeout(()=>{
							for(let i = 0;i < users.length;i++) {
								users[users.length - 1].style.background = "#f7f5f7";
						}
							} , 2000)
							
				} , 0)
				setTimeout(()=> {
					let users = document.querySelector('.users');
					users.scrollBy(0, users.clientHeight);
				}, 10)
			this.msg = '';	
				
			} , 
		
		}
	})	



