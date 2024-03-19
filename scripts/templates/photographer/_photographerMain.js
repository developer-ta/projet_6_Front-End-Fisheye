// import { photographerTemplate } from './../accueil/index.js';
import { _lightboxModal } from './_photographerMainPart/_lightboxModal.js';
import { _ProfilePartiale } from './_photographerMainPart/_ProfilePartiale.js';
import { _likeTotalPartiale } from './_photographerMainPart/_likeTotalPartiale.js';
import { _sortSelectGalleryPartiale } from './_photographerMainPart/_sortSelectGalleryPartiale.js';

//main part
export const _mainSection = (mediasData, phData) => {
	//part 1
	_ProfilePartiale(phData);

	//part 2
	_sortSelectGalleryPartiale(mediasData, phData);

	//part 3
	_likeTotalPartiale(mediasData, phData)



};

//profile partiale
// const _ProfilePartiale = (data) => {
// 	// DOM elements

// 	const $profileHtml = photographerTemplate(data).getUserCardDOM();
// 	const $div_profile = document.querySelector('#profile');
// 	$div_profile.appendChild($profileHtml);
// 	const $btn_contact = $div_profile.querySelector('.contact_button');
// 	const $img_container = $div_profile.querySelector('.img-container');
// 	// position dom element
// 	//$div_profile.insertAdjacentElement('afterend', $img);
// 	$img_container.insertAdjacentElement('afterend', $btn_contact);
// 	$div_profile.appendChild($profileHtml).setAttribute('data-pageBuilded', 'true');
// };

//main > select Menu and gallery partial
// const _sortSelectGalleryPartiale = (mediasData, phData) => {

// 	let menu_html = `<div>
// 	<label for="menu-tri">Trier par</label>
// 	<select name="menu-tri" id="select_tri">
// 	<option value="Popularité" selected>Popularité</option>
// 	<option value="Date">Date</option>
// 	<option value="Titre">Titre</option>
// 	</select>
// 	</div>`

// 	let sortList;
// 	const $menuSection = document.querySelector('#menu')
// 	$menuSection.innerHTML = menu_html;

// 	// Dom elements in $menuSection
// 	const $select_tri = $menuSection.querySelector('#select_tri')


// 	//check onchange
// 	$select_tri.addEventListener('change', ev => {
// 		ev.preventDefault();

// 		if ($select_tri.value == 'Popularité') {
// 			sortList = mediasData.sort(function (a, b) { return b.likes - a.likes });

// 			//by default popularité select
// 			_gallerySection(sortList, phData)
// 		}

// 		else if ($select_tri.value == "Date") {

// 			sortList = mediasData.sort(function (a, b) {
// 				return new Date(a.date) - new Date(b.date)
// 			});

// 			_gallerySection(sortList, phData)
// 		}

// 		else if ($select_tri.value == "Titre") {
// 			sortList = mediasData.sort((a, b) => a.title.localeCompare(b.title));

// 			_gallerySection(sortList, phData)
// 		}

// 	});

// 	// call by default first time
// 	$select_tri.dispatchEvent(new Event('change'));

// };

// main > gallery
// const _gallerySection = (sortedMediasData, phData) => {

// 	const $gallery = document.querySelector('#gallery')
// 	const $modalImg = document.querySelector('.modal-contend')
// 	$gallery.innerHTML = ''

// 	console.table(sortedMediasData);
// 	sortedMediasData.forEach(el => {
// 		let mediaUrl = `${phData.name.split(' ')[0].includes('-')
// 			? phData.name.split(' ')[0].split('-').join(' ')
// 			: phData.name.split(' ')[0]}/`;

// 		//addresses file img
// 		let picture = `/assets/Sample Photos/`;
// 		let video = picture;
// 		let $media_html = `<div class="galleryImg-container">`

// 		//  verifiers que type image ou vidions
// 		if (el.image) {
// 			mediaUrl += `${el.image}`
// 			picture += mediaUrl
// 			$media_html += `<img src="${picture}">`
// 		} else if (el.video) {
// 			mediaUrl += `${el.video}`
// 			video += mediaUrl
// 			$media_html += `<video  controls ><source src="${video}"></video>`
// 		}

// 		//add like partiale view
// 		$media_html += _likePartialeTemplate(el);

// 		//partial view of gallery section
// 		$gallery.innerHTML += $media_html;

// 		_likePartialeScript(el.likes);

// 	});
// 	$modalImg.forEach($imgTag.addEventListener("click", lightboxHandler))
// };

//_gallerySection > partial
// const _likePartialeTemplate = (mediaData) => {
// 	debugger
// 	const $like_html =
// 	`<div class="like-container">
// 	<p id="title">${mediaData.title}</p>
// 	<p id="like">
// 	<span class="like-amount">${mediaData.likes}</span>
// 	<span class="hart-like">&#x2665;</span>
// 	</p>
// 	</div></div>`

// 	return $like_html;



// };

// //script of _likePartialeTemplate
// const _likePartialeScript = () => {

// 	const $hartLikes = document.getElementsByClassName('hart-like');

// 	const counterLike = (ev) => {

// 		ev.preventDefault();

// 		// find before node span
// 		const $elBefore = ev.target.previousElementSibling;

// 		let subjoinLikes = Number($elBefore.innerText) + 1;
// 		$elBefore.innerText = subjoinLikes;

// 		// call calcul total likes
// 		calculLikes();

// 		//remove event linked to counterLike
// 		ev.target.removeEventListener("click", counterLike)


// 	}

// 	for (const $hart of $hartLikes) {
// 		$hart.addEventListener('click', counterLike)
// 	}

// }

// const _likeTotalPartiale = (mediaListData, phData) => {
// 	let sumLikes = 0;
// 	mediaListData.forEach((media) => { sumLikes += media.likes })
// 	const $mainSection = document.getElementById("main");
// 	localStorage.setItem("totalLikes", sumLikes);


// 	let likeTotal_html = `
// 	<div class="like-total">
// 	<p id="sum_likes">${sumLikes}  </p>
// 	<span class="total-like">&#x2665;</span>
// 	<p id="Price">${phData.price}€/jour</p>
// 	</div>`

// 	$mainSection.insertAdjacentHTML('afterend', likeTotal_html)

// };

// const calculLikes = () => {

// 	let existeLikes = localStorage.getItem("totalLikes")
// 	const $sum_likes = document.getElementById('sum_likes');
// 	if ($sum_likes && existeLikes) {
// 		existeLikes++;
// 		//update localStorage
// 		localStorage.setItem("totalLikes", existeLikes)
// 		$sum_likes.textContent = existeLikes;
// 	}

// }