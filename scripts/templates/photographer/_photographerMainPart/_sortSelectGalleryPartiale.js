import { _gallerySection } from "./_gallerySection.js";

export const _sortSelectGalleryPartiale = (mediasData, phData) => {


	// <span id="open-options" role="button" aria-expanded="false" aria-haspopup="listbox" tabindex="0">
	// <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
	let menu_html = `  <div>
	<label for="menu-tri">Trier par</label>
	<div name="menu-tri" id="select_tri" aria-label="Order by" aria-describedby="menu">
	<div class="popularity" id="select" role="option" aria-selected="true">Popularité<span id='open-options' role="button" aria-haspopup="listbox" aria-expanded="false" ><i class="fa-solid fa-chevron-down" ></i></span></div>
	  <div class="date" role="option" aria-selected='false'>Date</div>
	  <div class="title" role="option" aria-selected="false">Titre</div>
	</div> 
  </div>`

	let sortList;
	const $menuSection = document.querySelector('#menu')
	$menuSection.innerHTML = menu_html;

	// Dom elements in $menuSection
	const $select = $menuSection.querySelector('#select')
	const $select_tri = $menuSection.querySelector('#select_tri')
	const $open_options = $select.querySelector('#open-options')
	const $i = $select.querySelector('#open-options>i')
	const $date = $menuSection.querySelector('.date')
	$date.style.display = 'none'
	const $title = $menuSection.querySelector('.title')
	$title.style.display = 'none'
	$select.selectedVal = $select.textContent;


	//bine event click
	$open_options.addEventListener('click', ev => {
		ev.stopPropagation();
		ev.preventDefault();
		debugger

		$title.style.display = $title.style.display == 'block' ? 'none' : 'block'
		$date.style.display = $date.style.display == 'block' ? 'none' : 'block'
		$select_tri.style.backgroundColor = $select_tri.style.backgroundColor === '' ? '#901C1C' : '';
		$i.className = $i.className === 'fa-solid fa-chevron-up' ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'


	});
	$date.addEventListener('click', ev => {
		ev.preventDefault();
		debugger
		$select.selectedVal = $date.textContent;
		$select.dispatchEvent(new Event('click'));

	});
	$title.addEventListener('click', ev => {
		ev.preventDefault();
		$select.selectedVal = $title.textContent;
		$select.dispatchEvent(new Event('click'));

	});
	$select.addEventListener('click', ev => {
		ev.preventDefault();
		debugger
		if ($select.selectedVal == 'Popularité') {
			sortList = mediasData.sort(function (a, b) { return b.likes - a.likes });

			//by default Popularité  select
			_gallerySection(sortList, phData)
		}

		else if ($select.selectedVal == "Date") {

			sortList = mediasData.sort(function (a, b) {
				return new Date(a.date) - new Date(b.date)
			});

			_gallerySection(sortList, phData)
		}

		else if ($select.selectedVal == "Titre") {
			//trier par Alphabet
			sortList = mediasData.sort((a, b) => a.title.localeCompare(b.title));

			_gallerySection(sortList, phData)
		}

	});
	debugger;
	// call by default first time
	$select.dispatchEvent(new Event('click'));

};