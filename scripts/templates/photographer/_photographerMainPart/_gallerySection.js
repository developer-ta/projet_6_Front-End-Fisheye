import { _likePartialeScript, _likePartialeTemplate } from "./_likePartiale.js";

export const _gallerySection = (sortedMediasData, phData) => {

	const $gallery = document.querySelector('#gallery')
	const $modalImg = document.querySelector('.modal-contend')
	$gallery.innerHTML = ''

	console.table(sortedMediasData);
	sortedMediasData.forEach(el => {
		let mediaUrl = `${phData.name.split(' ')[0].includes('-')
			? phData.name.split(' ')[0].split('-').join(' ')
			: phData.name.split(' ')[0]}/`;

		//addresses file img
		let picture = `/assets/Sample Photos/`;
		let video = picture;
		let $media_html = `<div class="galleryImg-container">`

		//  verifiers que type image ou vidions
		if (el.image) {
			mediaUrl += `${el.image}`
			picture += mediaUrl
			$media_html += `<img src="${picture}">`
		} else if (el.video) {
			mediaUrl += `${el.video}`
			video += mediaUrl
			$media_html += `<video  controls ><source src="${video}"></video>`
		}

		//add like partiale view
		$media_html += _likePartialeTemplate(el);

		//partial view of gallery section
		$gallery.innerHTML += $media_html;

		_likePartialeScript(el.likes);

	});
	$modalImg.forEach($imgTag.addEventListener("click", lightboxHandler))
};

