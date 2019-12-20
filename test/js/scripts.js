
let elem = new Vue({
		el: '#app',
		data: {
			msg: '',
			msg_id: 0,
			lightMsg: false,
			dat:  new Date(),
			showMsg: false,
			showTable: false,
			hours: 0,
			minutes: 0,
			messages: [
				{id: 0 , text: 'Поисковик вам в помощь! Но цена примерно в половину стоимости платья.' , time_date: 1 , backlightMsg: false},
				
			],
		} ,
	computed: {
		
		// свойство получает текущее время отправки сообщения
		todayDate(){
		let num =  this.dat.getMinutes();
			
		// функция добавляет 0 к минутам которые меньше 9	
			function getZero(num){
				if (num > 0 && num < 10) { 
					return '0' + num;
				} else {
					return num;
				}
			}
			
			return this.dat.getHours() + ':' + num;
		} ,
		
		
		
	} ,
	
	
		methods: {
			switchChat() {
			this.showTable = !this.showTable;
			
		},
			// add new message to chat
			addMsg (e) {
				this.showMsg = true;
				console.log(this.messages.push({
				id: this.msg_id++,
				text: this.msg ,
				time_date: this.todayDate,
				backlightMsg: this.lightMsg,
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
				
			} , 
		
		}
	})	



