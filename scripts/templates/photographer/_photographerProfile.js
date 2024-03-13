import { photographerTemplate } from './../accueil/index.js';

//header part
export const _ProfilePartiale = (data) => {
  // DOM elements
  debugger;
  const $profileHtml = photographerTemplate(data).getUserCardDOM();
  const $div_profile = document.querySelector('#profile');
  $div_profile.appendChild($profileHtml);
  const $btn_contact = $div_profile.querySelector('.contact_button');
  const $img_container = $div_profile.querySelector('.img-container');
  // position dom element
  //$div_profile.insertAdjacentElement('afterend', $img);
  $img_container.insertAdjacentElement('beforebegin', $btn_contact);
  $div_profile.appendChild($profileHtml).setAttribute('data-pageBuilded', 'true');
};
