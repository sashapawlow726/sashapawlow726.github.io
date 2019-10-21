$(function(){

$('.cross').on('click' , function() {
	$('.mobile_menu-wrapper').fadeOut();
	$('main , header , footer').css('filter' , 'blur(0)');
	
});

$('.burger_menu').on('click' , function() {
	$('.mobile_menu-wrapper').fadeIn();
	$('main , header , footer').css('filter' , 'blur(4px)');
	$('.cross').css("animation" , "cross_active 1s ease-in ");
	
	$('.overlay').on('click' , function() {
		$('.grid__cards').fadeIn();
	});
});

$('.cross').on('click' , function () {
	$('.mobile__container').fadeOut();
})


// 1. событие на функию в момент прокрутки		
// 2. получили хедер	
// 	3. функцию (	
// если текущая прокрутка окна свреху больше чем отступ хедера сверху
	// добавить класс) // иначе удалить класс
	
window.onscroll = function () {
	fixedMenu();
}	
})

let header = document.getElementById('header');

let fixed = header.offsetTop;

function fixedMenu() {
	if(window.pageYOffset > fixed) {
		header.classList.add('fixed');
	}
	else {
		header.classList.remove('fixed');
	}
}

