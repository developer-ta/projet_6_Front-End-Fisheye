
import { _lightboxModal } from "./_lightboxModal.js";
import { _likePartialeScript, _likePartialeTemplate } from "./_likePartiale.js";

export const _gallerySection = (sortedMediasData, phData) => {

	const $gallery = document.querySelector('#gallery')
	$gallery.innerHTML = ''


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
			$media_html += `<img src="${picture}" aria-label="Lilac breasted roller, closeup view">`

		} else if (el.video) {

			mediaUrl += `${el.video}`
			video += mediaUrl
			$media_html += `<video><source src="${video}" aria-label="Lilac breasted roller, closeup view"></video>`
		}

		//add like partiale view
		$media_html += _likePartialeTemplate(el);

		//partial view of gallery section
		$gallery.innerHTML += $media_html;

		_likePartialeScript(el.likes);

	});
	//add event for open and close modal lightbox
	const $modalImgs = document.querySelectorAll('.galleryImg-container > img, video')
	$modalImgs.forEach($imgTag => $imgTag.addEventListener("click", () => _lightboxModal()))
};

