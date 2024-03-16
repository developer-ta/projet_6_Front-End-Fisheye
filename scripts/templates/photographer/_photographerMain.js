import { photographerTemplate } from './../accueil/index.js';

//main part
export const _mainSection = (mediasData, phData) => {
	//part 1
	_ProfilePartiale(phData);

	//part 2
	_sortSelectGalleryPartiale(mediasData, phData);

};
//profile partiale
const _ProfilePartiale = (data) => {
	// DOM elements
	debugger;
	const $profileHtml = photographerTemplate(data).getUserCardDOM();
	const $div_profile = document.querySelector('#profile');
	$div_profile.appendChild($profileHtml);
	const $btn_contact = $div_profile.querySelector('.contact_button');
	const $img_container = $div_profile.querySelector('.img-container');
	// position dom element
	//$div_profile.insertAdjacentElement('afterend', $img);
	$img_container.insertAdjacentElement('afterend', $btn_contact);
	$div_profile.appendChild($profileHtml).setAttribute('data-pageBuilded', 'true');
};
//main > select Menu and gallery partial
const _sortSelectGalleryPartiale = (mediasData, phData) => {
	debugger;
	let menu_html = `<div>
	<label for="menu-tri">Trier par</label>
	<select name="menu-tri" id="select_tri">
	<option value="Popularité" selected>Popularité</option>
	<option value="Date">Date</option>
	<option value="Titre">Titre</option>
	</select>
	</div>`


	let sortList;
	const $menuSection = document.querySelector('#menu')
	$menuSection.innerHTML = menu_html;

	// Dom elements in $menuSection
	const $select_tri = $menuSection.querySelector('#select_tri')


	//check onchange
	$select_tri.addEventListener('change', ev => {
		ev.preventDefault();
		debugger;
		if ($select_tri.value == 'Popularité') {
			sortList = mediasData.sort(function (a, b) { return b.likes - a.likes });

			//by default popularité select
			_gallerySection(sortList, phData)
		}
		//a.date.toLocaleDateString('fr-FR') - b.date.toLocaleDateString('fr-FR')
		else if ($select_tri.value == "Date") {

			sortList = mediasData.sort(function (a, b) {
				return new Date(a.date) - new Date(b.date)
			});

			_gallerySection(sortList, phData)
		}

		else if ($select_tri.value == "Titre") {
			sortList = mediasData.sort((a, b) => a.title.localeCompare(b.title));

			_gallerySection(sortList, phData)
		}

	});
	// call by default event change first
	$select_tri.dispatchEvent(new Event('change'));



};

// main > gallery
const _gallerySection = (sortedMediasData, phData) => {
	// {
	// 	"id": 7324238,
	// 	"photographerId": 82,
	// 	"title": "18th Anniversary",
	// 	"image": "Event_18thAnniversary.jpg",
	// 	"likes": 33,
	// 	"date": "2019-06-12",
	// 	"price": 55
	// },
	// {
	// 	"id": 8328953,
	// 	"photographerId": 82,
	// 	"title": "Wooden sculpture of a horse",
	// 	"video": "Art_Wooden_Horse_Sculpture.mp4",
	// 	"likes": 24,
	// 	"date": "2011-12-08",
	// 	"price": 100
	//   },
	debugger;
	const $gallery = document.querySelector('#gallery')
	$gallery.innerHTML = ''
	//let $div_galleryImgContainer=document.querySelector('.galleryImg-container');
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
};

//_gallerySection > partial
const _likePartialeTemplate = (mediaData) => {
	debugger
	const $like_html =
	`<div class="like-container">
	<p id="title">${mediaData.title}</p>
	<p id="like">
	<span class="like-amount">${mediaData.likes}</span>
	<span class="hart-like">&#9825</span>
	</p>
	</div></div>`

	return $like_html;



};
//script of _likePartialeTemplate
const _likePartialeScript = () => {
	debugger;
	const $hartLikes = document.getElementsByClassName('hart-like');

	const counterLike = (ev) => {
		debugger;
		ev.preventDefault();

		// find before node span 
		const $elBefore = ev.target.previousElementSibling;

		let subjoinLikes = Number($elBefore.innerText) + 1;
		$elBefore.innerText = subjoinLikes;

		// call to  _likeTotalPartiale()
		ev.target.removeEventListener("click", counterLike)
	}


	for (const hart of $hartLikes) {

		hart.addEventListener('click', counterLike)
	}

}
const _likeTotalPartiale = () => { };