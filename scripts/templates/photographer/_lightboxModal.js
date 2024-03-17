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
	const $imgContainerList = document.getElementsByClassName("galleryImg-container");
	const $modalImg = document.querySelector('.modal-contend')
	const $gallery = document.getElementById('gallery');
	const $close_span = $lightBox_centenaire.querySelector('.close')

	//function for open or close lightbox
	const lightboxHandler = (ev) => {
		debugger
		ev.preventDefault();


		if ($gallery.style.display !== 'none') {

			$gallery.style.display = 'none'
		} else {
			$gallery.style.display = 'flex'

		}
		if ($lightBox_centenaire.style.display !== 'none') {
			$lightBox_centenaire.style.display = 'block'
		} else {

			$lightBox_centenaire.style.display = 'none'
		}
		//img display in modal 
		const imgUrl = ev.target.src;
		$modalImg.src = imgUrl;


	}
	//list of src to imgs
	const _srcList = []
	//set src img in element Dom
	for (let i = 0; i < $imgContainerList.length; i++) {

		const $element = $imgContainerList[i];

		if ($element.tagName !== 'VIDEO' && $element.firstChild.src) {

			$element.firstChild.srcByIndex = $element.firstChild.src
			_srcList.push($element.firstChild.src)
			//$element.firstChild.srcList = _srcList

		} else if ($element.firstChild.firstChild.src) {

			$element.firstChild.srcByIndex = $element.firstChild.firstChild.src
			_srcList.push($element.firstChild.firstChild.src)
			//$element.firstChild.srcList = _srcList
		}
		console.log('$element.firstChild.srcByIndex: ', $element.firstChild.srcByIndex);
		console.log('$element.firstChild.srcList: ', $element.firstChild.srcList);
		//action for open lightbox modal
		$gallery.srcList = _srcList;
		$element.firstChild.addEventListener("click", lightboxHandler)


	}
	//action for close lightbox modal
	$close_span.addEventListener("click", lightboxHandler);

	//console.log('$imgContainerList: ', $imgContainerList[0].firstChild.srcByIndex);

};
