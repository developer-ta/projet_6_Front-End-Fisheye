import { closeModal } from "./contactForm.js"

function keyDownHandler(event) {

	debugger
	const $lightBox_centenaire = document.querySelector('.lightbox')

	const $previous_span = $lightBox_centenaire.querySelector('.previous')
	const $next_span = $lightBox_centenaire.querySelector('.next')
	const $close_span = $lightBox_centenaire.querySelector('.close')

	const modal = document.getElementById("contact_modal");

	const eventClick = new Event("click");
	if (modal.style.display === "block" && event.key == 'Escape') {
		closeModal()
		//$closeModal.dispatchEvent(eventClick)
	}
	else if ($lightBox_centenaire.style.display === 'flex') {
		if (event.key == 'ArrowLeft') {
			$previous_span.dispatchEvent(eventClick)
		}
		else if (event.key == 'ArrowRight') {
			$next_span.dispatchEvent(eventClick)
		}
		else if (event.key == 'Escape') {

			$close_span.dispatchEvent(eventClick)

		}

	}


}

export { keyDownHandler }