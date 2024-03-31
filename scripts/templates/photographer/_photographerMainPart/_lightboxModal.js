// lightbox part


export const _lightboxModal = () => {

	//html 
	const lightBox_template = `  
	<div id="dialog" aria-label="image closeup view">
	<span class="previous circuit">❮</span>
	<span class="next circuit">❯</span>
	<span class="close">×</span>
	<div class="img-lightbox">
	<img class="modal-contend" >
	<video  class="video" controls  ><source src=""></video>
	</div>
	<h3 id="title_lightbox">Lonesome</h3>
	</div>`;

	//script js
	//Dom el
	const $lightBox_centenaire = document.querySelector('.lightbox')
	$lightBox_centenaire.innerHTML = lightBox_template;

	const $gallery = document.getElementById('gallery');
	const $close_span = $lightBox_centenaire.querySelector('.close')
	const $previous_span = $lightBox_centenaire.querySelector('.previous')
	const $next_span = $lightBox_centenaire.querySelector('.next')
	const $mediaList = document.querySelectorAll('.galleryImg-container  > img, .galleryImg-container > video')
	console.log('$mediaList : ', $mediaList);


	//interface media info


	//list of src to imgs
	const _srcList = []
	//set src img in element Dom
	for (let i = 0; i < $mediaList.length; i++) {

		const mediaInfo = {
			src: '',
			tagName: '',
			imgIndex: 0,
			photographName: '',
		}
		const $mediaTag = $mediaList[i];
		debugger
		if ($mediaTag.tagName === 'VIDEO') {

			mediaInfo.src = $mediaTag.firstChild.src
			mediaInfo.imgIndex = i
			$mediaTag.imgIndex = i
			mediaInfo.tagName = 'video';
			//mediaInfo.photographName = $mediaTag.photographName;
			_srcList.push(mediaInfo)


		} else {

			mediaInfo.src = $mediaTag.src
			mediaInfo.tagName = 'img';
			mediaInfo.imgIndex = i
			$mediaTag.imgIndex = i
			//mediaInfo.photographName = $mediaTag.photographName;
			_srcList.push(mediaInfo)
		}

		//$lightboxContent.srcList = _srcList

		//action for open lightbox modal
		$mediaTag.addEventListener("click", lightboxHandler)

	}

	$gallery.srcList = _srcList;
	console.log('$gallery.srcList : ', $gallery.srcList);

	//action for close lightbox modal
	$close_span.addEventListener("click", lightboxHandler);
	//Carousel img
	$previous_span.addEventListener("click", carouselImg);
	$next_span.addEventListener("click", carouselImg);


};


const carouselImg = (ev) => {
	debugger;
	const $currentModalImg = document.querySelector('.modal-contend')

	const $lightboxContent = document.querySelector('.img-lightbox')
	const $video = document.querySelector('.video')
	const $gallery = document.getElementById('gallery');
	const mediaList = $gallery.srcList;
	const getIndex = () => {
		let imgIndex = 0;
		//video
		if ($lightboxContent.lastElementChild.style.display == 'block') {
			imgIndex = $lightboxContent.lastElementChild.index
		} //img
		else if ($lightboxContent.firstElementChild.style.display == 'block') {
			imgIndex = $lightboxContent.firstElementChild.index
		}
		// 	//check max length 
		// 	if ((imgIndex - 1) < 0) { 
		// 		imgIndex = mediaList.length - 1
		// 	} else if ((imgIndex + 1) >= mediaList.length) {
		// 	imgIndex = 0
		// }

		return imgIndex
	};
	let index = getIndex();


	if (ev.target.classList[0] == 'previous') {
		debugger
		if ((index - 1) < 0) {
			index = mediaList.length
		} 
		checkMedia(index - 1, mediaList)

		// if ($lightboxContent.lastElementChild.style.display == 'block') {
		// 	$lightboxContent.lastElementChild.imgIndex
		// 	$lightboxContent.children.src = mediaList[index - 1]

		// } else if ($currentModalImg.typeTag !== 'img') {
		// 	//$lightboxContent.innerHTML = `<img class="modal-contend">`
		// 	$lightboxContent.children.src = mediaList[index - 1]
		// }

		// $lightboxContent.index = index - 1

	} else if (ev.target.classList[0] == 'next') {
		if ((index + 1) >= mediaList.length) {
			index = 0
		}
		checkMedia(index + 1, mediaList)

		// $currentModalImg.src = mediaList[index + 1]
		// $currentModalImg.index = index + 1
	}

}


export const lightboxHandler = (ev) => {

	ev.preventDefault();

	//Dom el
	const $lightBox_centenaire = document.querySelector('.lightbox')

	const $modalImg = document.querySelector('.modal-contend')

	const $gallery = document.getElementById('gallery');
	const mediaList = $gallery.srcList;
	
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
	debugger
	checkMedia(ev.target.imgIndex, mediaList)


	// const mediaSrc = ev.target.src;
	// $modalImg.index = ev.target.imgIndex
	// $modalImg.src = mediaSrc;


}

function checkMedia(imgIndex, mediaList) {
	debugger


	const $lightboxContent = document.querySelector('.img-lightbox')

	let elInfo = mediaList.find(x => x.imgIndex == imgIndex);
	if (elInfo.tagName === 'video') {
		$lightboxContent.firstElementChild.style.display = 'none';
		$lightboxContent.lastElementChild.style.display = 'block';
		$lightboxContent.lastElementChild.src = elInfo.src
		$lightboxContent.lastElementChild.index = elInfo.imgIndex
		return $lightboxContent.lastElementChild

	}
	$lightboxContent.firstElementChild.style.display = 'block'
	$lightboxContent.lastElementChild.style.display = 'none';
	$lightboxContent.firstElementChild.src = elInfo.src
	$lightboxContent.firstElementChild.index = elInfo.imgIndex
	return $lightboxContent.firstElementChild 


}
