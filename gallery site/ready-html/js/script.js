const fiperMain = new Swiper('.fiper_main', {
	freeMode: true,
	centeredSlides: true,
	mousewheel: true,
	parallax: true,
	breakpoints: {
		0: {
			slidesPerView: 2.5,
			spaceBetween: 20
		},
		680: {
			slidesPerView: 3.5,
			spaceBetween: 60
		}
	}
})
const fiperBg = new Swiper('.fiper_bg', {
	centeredSlides: true,
	parallax: true,
	spaceBetween: 60,
	slidesPerView: 3.5
})
fiperMain.controller.control = fiperBg

document.querySelectorAll('.fiper__item').forEach(item => {
	item.addEventListener('click', event => {
		item.classList.toggle('opened')
	})
})

let desc = document.querySelector('.description')
fiperMain.on('fipeChange', e => {
	fiperMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})
