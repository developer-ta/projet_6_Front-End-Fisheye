import { _gallerySection } from "./_gallerySection.js";

export const _sortSelectGalleryPartiale = (mediasData, phData) => {

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

		if ($select_tri.value == 'Popularité') {
			sortList = mediasData.sort(function (a, b) { return b.likes - a.likes });

			//by default popularité select
			_gallerySection(sortList, phData)
		}

		else if ($select_tri.value == "Date") {

			sortList = mediasData.sort(function (a, b) {
				return new Date(a.date) - new Date(b.date)
			});

			_gallerySection(sortList, phData)
		}

		else if ($select_tri.value == "Titre") {
			//trier par Alphabet
			sortList = mediasData.sort((a, b) => a.title.localeCompare(b.title));

			_gallerySection(sortList, phData)
		}

	});

	// call by default first time
	$select_tri.dispatchEvent(new Event('change'));

};