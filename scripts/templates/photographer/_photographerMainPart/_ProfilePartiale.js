import { displayModal } from "../../../services/utils/contactForm.js";
import { photographerTemplate } from "../../accueil/index.js";

//profile partiale
export const _ProfilePartiale = (data) => {

	// DOM elements
	const $profileHtml = photographerTemplate(data).getUserCardDOM();
	const $div_profile = document.querySelector('#profile');
	$div_profile.appendChild($profileHtml);
	const $btn_contact = $div_profile.querySelector('.contact_button');
	$btn_contact.ariaLevel = 'Contact Me'
	const $img_container = $div_profile.querySelector('.img-container');


	// position in the dom element
	$img_container.insertAdjacentElement('afterend', $btn_contact);
	$div_profile.appendChild($profileHtml).setAttribute('data-pageBuilded', 'true');

	let $name_h1 = document.querySelector('article h1')
	let $detail_div = document.querySelector('article .detail-container')
	$detail_div.insertAdjacentElement('afterbegin', $name_h1) 

	//add event for open modal contact
	$btn_contact.addEventListener('click', displayModal)


};
