<template>

	<div class="message__panel" v-if="showTable">
		<div class="color__line"></div>
		<div class="account__wrapper">
			<div class="account">
				<div class="account__img">
					<img src="../assets/avatar.png" alt="avatar">
				</div>
				<div class="account__info">
					<h2 class="account__title">
						Токсикова Ольга
					</h2>
					<p class="account__city" style="text-align:left;">
						Днепропетровск
					</p>
				</div>
				
				
			</div>
			<div class="rating rating2"><!--
				--><a href="#5" title="Give 5 stars">★</a><!--
				--><a href="#4" title="Give 4 stars">★</a><!--
				--><a href="#3" title="Give 3 stars">★</a><!--
				--><a href="#2" title="Give 2 stars">★</a><!--
				--><a href="#1" title="Give 1 star">★</a>
			</div>
			<a href="#" class="close" @click="switchChat">
				
			</a>
			
		</div>
		
		<hr class="separator__line"> 
		<div class="users">
			<div class="user">
				<div class="user__info">
					<div class="user__img">
						<img src="../assets/ava__odd.png" alt="avatar">
					</div>
					<div class="user__msg">
						<p class="msg">
							Где взять на прокат вечернее красивое платье? А еще лучше дизайнерское! Предстоит участие в <a href="#" class="msg__link">мероприятии</a>, где все гости будут наверняка одеты в наряды "от кутюр", а у меня со средствами туговато, да и жалко на один раз такие деньжищи отваливать. Мне 
						</p>  
					</div>
					<p class="user__date">
						вчера в <span class="date__time">17.45</span>
					</p>
				</div>

			</div>
			
			<div class="user">
				<div class="user__info user__even">
					<div class="user__img">
						<img src="../assets/ava__even.png" alt="avatar">
					</div>
					<div class="user__msg">
						<p class="msg">
							Поисковик вам в помощь! Но цена примерно в половину стоимости платья.
						</p>  
					</div>
					<p class="user__date">
						вчера в <span class="date__time">17.45</span>
					</p>
				</div>

			</div>
			
			<div class="user">
				<div class="user__info">
					<div class="user__img">
						<img src="../assets/ava__odd.png" alt="avatar">
					</div>
					<div class="user__msg">
						<p class="msg">
							Где взять на прокат вечернее красивое платье? А еще лучше дизайнерское! Предстоит участие в <a href="#" class="msg__link">мероприятии</a>, где все гости будут наверняка одеты в наряды "от кутюр", а у меня со средствами туговато, да и жалко на один раз такие деньжищи отваливать. Мне 
						</p>  
					</div>
					<p class="user__date">
						вчера в <span class="date__time">17.45</span>
					</p>
				</div>

			</div>
			
			
				<div class="user" v-for="(message , date , key)  in messages"  :class="{light__text: lightMsg}">
				<div class="user__info user__even">
					<div class="user__img ">
						<img src="../assets/ava__even.png" alt="avatar">
					</div>
					<div class="user__msg">
						<p class="msg">
							
							{{message.text}}
						</p>  
					</div>
					<p class="user__date">
						вчера в <span class="date__time">{{ todayDate }}</span>
					</p>
				</div>

			</div>
				
		</div>
		
		<div class="sender">
			<div class="sender__img">
				<img src="../assets/sender__avatar.png" alt="sender">
			</div>
			<div class="sender__send_area">
				<form action="">
					<textarea name="" id="message" v-model="msg" placeholder="Введите сообщение...">
						
					</textarea>
					<input type="button" value="Отправить" class="sender__btn" @click="addMsg($event)">
						
					
				</form>
			</div>
		</div>
	</div>
	

	<button class="opening_chat_btn" v-else="!showTable" @click="switchChat">Open chat</button>

	
 
</template>

<script>
export default {
  name: 'ChatWindow',
  data () {
    return {
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
    }
  },
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
			//method for adding new message to chat
			addMsg (e) {
//				this.showMsg = true;
				console.log(this.messages.push({
				id: this.msg_id++,
				text: this.msg ,
				time_date: this.todayDate,
				backlightMsg: this.lightMsg,
				}))
				//method for adding lighting for message 
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
				//method for adding scrolling for message 
				setTimeout(()=> {
					let users_all = document.querySelector('.users');
					users_all.scrollBy(0, users_all.clientHeight);
				} , 50)
				
			} , 
		
		}
	
}
</script>


<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Sans&display=swap')


h1 , h2 , h3 , h4 , h5 , p , small
 margin 0
 padding 0

 

body , html
    font-family Arial , sans-serif
    font-size 16px
    margin auto
	


.color__line
    width 100%
    height 10px
    background url('../assets/line.png') no-repeat top center

.fade-enter-active, .fade-leave-active
    transition opacity .5s

.fade-enter, .fade-leave-to
    opacity 0

.message__panel
    width 600px
    height 550px
    margin auto
    box-shadow: 0 0px 10px 3px rgba(0,0,0,.3)
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    border-radius 7px
    overflow-y hidden
    background #fff
	


.account__wrapper
    display -webkit-flex
    display -moz-flex
    display -ms-flex
    display -o-flex
    display flex
    align-items center
    justify-content space-between

.close
    position absolute
    right 10px
    top 32px
    width 22px
    height 22px
    border 2px solid #6a6a6a
    border-radius 50%
    &:before
        transform rotate(45deg)
    &:after
        transform rotate(-45deg)

.close:before, .close:after
    position absolute
    left 10px
    content ' '
    height 16px
    width 2px
    background-color #6a6a6a
    top 4px

.account
    display -webkit-flex
    display -moz-flex
    display -ms-flex
    display -o-flex
    display flex
    justify-content flex-start
    align-items center
    padding 17px 0 0 5%

.account__img
    transform translateY(5px)

.account__info
    margin-left 15px
	text-align left


.account__title
    font-size 24px
    font-family 'PT Sans', sans-serif

.account__city
    font-size 16px
    color #7f7f7f
	text-align left
	float left
    

.separator__line
    color rgba(235,235,235,.4)
    margin 15px auto 5px auto

.users
    height 312px
    overflow-x auto



.user
    display -webkit-flex
    display -moz-flex
    display -ms-flex
    display -o-flex
    display flex
    justify-content space-between
    margin 5px auto

.user__info
    display -webkit-flex
    display -moz-flex
    display -ms-flex
    display -o-flex
    display flex
    align-items flex-start
    margin-left 35px
    padding 7px 10px 7px 10px
    border-radius 5px

.user__even
    background #f7f5f7



.msg
 text-align left
 word-wrap break-word



.user__msg
    width 370px
    font 14px/14px  Arial , sans-serif
    color #3e3e3e
    margin-left 15px

.user__date
    color #7f7f7f
    font-size 12px
    max-width 100px
    margin-left 30px

.sender__send_area
    padding-left 15px

#message
    width 480px
    height 80px
    resize none
    border 1px solid #b1b6bb
    border-radius 3px
    padding 10px
    box-sizing border-box


.sender
    display -webkit-flex
    display -moz-flex
    display -ms-flex
    display -o-flex
    display flex
    justify-content space-between
    background #e9f2fa
    padding 11px 5%
	


.sender__btn
    margin-top 5px
    padding 4px 22px
    float left


.light__text
    background orange

.rating
    font-size 25px
    overflow hidden
    input
        float right
        opacity 0
        position absolute

.rating a,
.rating label
    float right
    color #aaa
    text-decoration none
    -webkit-transition color .4s
    -moz-transition color .4s
    -o-transition color .4s
    transition color .4s

.rating label:hover ~ label,
.rating input:focus ~ label,
.rating label:hover,
.rating a:hover,
.rating a:hover ~ a,
.rating a:focus,
.rating a:focus ~ a
    color orange
    cursor pointer

.rating2
    direction rtl
    margin-right 50px
    a
        float none

.opening_chat_btn
    position absolute
    margin auto
    top 0
    bottom 0
    right 0
    left 0
    z-index 10
    height 40px
    width 150px
    background #87b7e1
    color #fff
    border none
    cursor pointer
    border-radius 5px
    transition .5s
    opacity 0.9
    &:hover
        opacity 1

@media screen and (max-height: 700px)
    .message__panel
        height 250px
    .users
        height 47px
    #message
        height 50px
</style>