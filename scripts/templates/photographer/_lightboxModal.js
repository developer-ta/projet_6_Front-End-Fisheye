// lightbox part


export const _lightboxModal = () => {
	const $lightBox_centenaire = document.querySelector('.lightbox')
	const lightBox_template = `  
	<div id="dialog" aria-label="image closeup view">
	  <span class="previous circuit">❮</span>
	  <span class="next circuit">❯</span>
	  <span class="close">×</span>
	  <div class="img-lightbox">
		<img class="modal-contend" src="/assets/Sample Photos/Mimi/Travel_Lonesome.jpg">
	  </div>
	  <h3 id="title_lightbox">Lonesome</h3>
  	</div>`;

	$lightBox_centenaire.innerHTML = lightBox_template;
	const $imgList = document.getElementsByClassName("galleryImg-container");
	const $gallery = document.getElementById('gallery');
	const $close_span = $lightBox_centenaire.querySelector('.close')
	// lightbox Handler function 
	const lightboxHandler = () => {
		debugger
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

	}

	for (let i = 0; i < $imgList.length; i++) {

		const $element = $imgList[i];
		if ($element.tagName !== 'VIDEO') {
			$element.firstChild.identity = { index: i, src: $element.firstChild.src }
		} else {
			$element.firstChild.identity = { index: i, src: $element.firstChild.firstChild.src }
		}

		$element.firstChild.addEventListener("click", lightboxHandler)

	}
	$close_span.addEventListener("click", lightboxHandler);


};
