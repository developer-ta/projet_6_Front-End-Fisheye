import { photographerTemplate } from './../accueil/index.js';

//main part
export const _mainSection = (mediasData, phData) => {
	_ProfilePartiale(phData);
	_sortSelectMenuPartiale();
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
//main > partial
const _sortSelectMenuPartiale = () => {
	const $menuSection = document.querySelector('#menu')

	let menu_html = `<div>
	<label for="menu-tri">Trier par</label>
	<select name="menu-tri" id="select_tri">
	  <option value="Popularité" selected>Popularité</option>
	  <option value="Date">Date</option>
	  <option value="Titre">Titre</option>
	</select>
	</div>`
	$menuSection.innerHTML = menu_html;

};

// main > gallery
const _gallerySection = () => {};

//_gallerySection > partial
const _likePartiale = () => {};
const _likeTotalPartiale = () => {};