// lightbox part


export const _lightboxModal = () => {

	//html 
	const lightBox_template = `  
	<div id="dialog" aria-label="image closeup view">
	<span class="previous circuit">❮</span>
	<span class="next circuit">❯</span>
	<span class="close">×</span>
	<div class="img-lightbox">
	<img class="modal-contend">
	</div>
	<h3 id="title_lightbox">Lonesome</h3>
	</div>`;


	//script js
	//Dom el
	const $lightBox_centenaire = document.querySelector('.lightbox')
	$lightBox_centenaire.innerHTML = lightBox_template;
	const $modalImg = document.querySelector('.modal-contend')
	const $gallery = document.getElementById('gallery');
	const $close_span = $lightBox_centenaire.querySelector('.close')
	const $previous_span = $lightBox_centenaire.querySelector('.previous')
	const $next_span = $lightBox_centenaire.querySelector('.next')
	const $imgList = document.querySelectorAll("#gallery img");



	//function for open or close lightbox
	// const lightboxHandler = (ev) => {
	// 	debugger
	// 	ev.preventDefault();


	// 	if ($gallery.style.display !== 'none') {
	// 		$gallery.style.display = 'none'

	// 	} else {
	// 		$gallery.style.display = 'flex'
	// 	}
	// 	if ($lightBox_centenaire.style.display !== 'flex') {
	// 		$lightBox_centenaire.style.display = 'flex'
	// 	} else {

	// 		$lightBox_centenaire.style.display = 'none'
	// 	}
	// 	//img display in modal 
	// 	const imgUrl = ev.target.src;
	// 	$modalImg.index = ev.target.imgIndex
	// 	$modalImg.src = imgUrl;


	// }
	//console.log('$imgList: ', $imgList);
	//list of src to imgs
	const _srcList = []
	//set src img in element Dom
	for (let i = 0; i < $imgList.length; i++) {

		const $imgTag = $imgList[i];

		if ($imgTag.tagName !== 'VIDEO' && $imgTag.src) {

			$imgTag.srcByIndex = $imgTag.src
			$imgTag.imgIndex = i
			_srcList.push($imgTag.src)
			//$imgTag.srcList = _srcList

		} else if ($imgTag.firstChild.src) {

			$imgTag.srcByIndex = $imgTag.firstChild.src
			$imgTag.imgIndex = i
			_srcList.push($imgTag.firstChild.src)

		}

		//action for open lightbox modal
		$imgTag.addEventListener("click", lightboxHandler)


	}
	$gallery.srcList = _srcList;
	//action for close lightbox modal
	$close_span.addEventListener("click", lightboxHandler);
	//Carousel img
	$previous_span.addEventListener("click", carouselImg);
	$next_span.addEventListener("click", carouselImg);


	//console.log('$imgList: ', $imgList[0].firstChild.srcByIndex);

};


const carouselImg = (ev) => {

	const $currentModalImg = document.querySelector('.modal-contend')

	const $gallery = document.getElementById('gallery');
	const imgList = $gallery.srcList;
	let imgIndex = $currentModalImg.index;
	if ((imgIndex - 1) < 0) {
		imgIndex = imgList.length - 1
	} else if ((imgIndex + 1) >= imgList.length) {
		imgIndex = 0
	}

	if (ev.target.classList[0] == 'previous') {

		$currentModalImg.src = imgList[imgIndex - 1]
		$currentModalImg.index = imgIndex - 1
		console.log('imgIndex: ', imgIndex);
		console.log('$currentModalImg.src: ', $currentModalImg.src);
	} else if (ev.target.classList[0] == 'next') {

		$currentModalImg.src = imgList[imgIndex + 1]
		$currentModalImg.index = imgIndex + 1
	}
	debugger;



}



export const lightboxHandler = (ev) => {
	debugger
	ev.preventDefault();

	//Dom el
	const $lightBox_centenaire = document.querySelector('.lightbox')

	const $modalImg = document.querySelector('.modal-contend')
	const $gallery = document.getElementById('gallery');
	
	
	if ($gallery.style.display !== 'none') {
		$gallery.style.display = 'none'

	} else {
		$gallery.style.display = 'flex'
	}
	if ($lightBox_centenaire.style.display !== 'flex') {
		$lightBox_centenaire.style.display = 'flex'
	} else {

		$lightBox_centenaire.style.display = 'none'
	}
	//img display in modal 
	const imgUrl = ev.target.src;
	$modalImg.index = ev.target.imgIndex
	$modalImg.src = imgUrl;


}
