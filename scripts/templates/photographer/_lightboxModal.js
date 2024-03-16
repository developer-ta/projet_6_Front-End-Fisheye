// lightbox part
export const _lightboxModal = () => {
	const $lightBox_centenaire = document.querySelector('.lightbox')
	const lightBox_template = `  
	<div id="dialog" aria-label="image closeup view">
	  <span class="previous circuit">❮</span>
	  <span class="next circuit">❯</span>
	  <span class="close">×</span>
	  <div class="img-lightbox">
		<img class="modal-contend" src="/assets/Sample Photos/Mimi/Travel_Lonesome.jpg">
	  </div>
	  <h3 id="title_lightbox">Lonesome</h3>
  
	</div>
  `;

	$lightBox_centenaire.innerHTML = lightBox_template;

};
