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
	const $titleList = $gallery.querySelectorAll('#title')
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
			photoName: '',
		}
		const $mediaTag = $mediaList[i];
		debugger
		if ($mediaTag.tagName === 'VIDEO') {

			mediaInfo.src = $mediaTag.firstChild.src
			mediaInfo.imgIndex = i
			$mediaTag.imgIndex = i
			mediaInfo.tagName = 'video';
			mediaInfo.photoName = $titleList[i].textContent;
			_srcList.push(mediaInfo)


		} else {

			mediaInfo.src = $mediaTag.src
			mediaInfo.tagName = 'img';
			mediaInfo.imgIndex = i
			$mediaTag.imgIndex = i
			mediaInfo.photoName = $titleList[i].textContent;
			_srcList.push(mediaInfo)
		}



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


	const $lightboxContent = document.querySelector('.img-lightbox')

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


		return imgIndex
	};
	let index = getIndex();


	if (ev.target.classList[0] == 'previous') {
		debugger
		if ((index - 1) < 0) {
			index = mediaList.length
		} 
		checkMedia(index - 1, mediaList)


	} else if (ev.target.classList[0] == 'next') {
		if ((index + 1) >= mediaList.length) {
			index = 0
		}
		checkMedia(index + 1, mediaList)

	}

}


export const lightboxHandler = (ev) => {

	ev.preventDefault();

	//Dom el
	const $lightBox_centenaire = document.querySelector('.lightbox')



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



}

function checkMedia(imgIndex, mediaList) {
	debugger


	const $lightboxContent = document.querySelector('.img-lightbox')
	const $title_lightbox = document.querySelector('#title_lightbox')


	let elInfo = mediaList.find(x => x.imgIndex == imgIndex);
	if (elInfo.tagName === 'video') {
		$lightboxContent.firstElementChild.style.display = 'none';
		$lightboxContent.lastElementChild.style.display = 'block';
		$lightboxContent.lastElementChild.src = elInfo.src
		debugger
		$lightboxContent.lastElementChild.index = elInfo.imgIndex
		$title_lightbox.textContent = elInfo.photoName
		return $lightboxContent.lastElementChild

	}
	$lightboxContent.firstElementChild.style.display = 'block'
	$lightboxContent.lastElementChild.style.display = 'none';
	$lightboxContent.firstElementChild.src = elInfo.src
	$lightboxContent.firstElementChild.index = elInfo.imgIndex
	$title_lightbox.textContent = elInfo.photoName
	return $lightboxContent.firstElementChild 


}
