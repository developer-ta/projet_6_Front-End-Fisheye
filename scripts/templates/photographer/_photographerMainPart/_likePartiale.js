export const _likePartialeTemplate = (mediaData) => {
	
	const $like_html =
		`<div class="like-container">
	<p id="title">${mediaData.title}</p>
	<p id="like">
	<span class="like-amount">${mediaData.likes}</span>
	<i class="fa-solid fa-heart hart-like" aria-label="likes"></i>
	</p>
	</div></div>`

	return $like_html;

};

//script of _likePartialeTemplate
export const _likePartialeScript = () => {

	const $hartLikes = document.getElementsByClassName('hart-like');

	const counterLike = (ev) => {

		ev.preventDefault();

		// find before node span 
		const $elBefore = ev.target.previousElementSibling;
		
		let subjoinLikes = Number($elBefore.innerText) + 1;
		$elBefore.innerText = subjoinLikes;

		// call calcul total likes
		calculLikes();

		//remove event linked to counterLike
		ev.target.removeEventListener("click", counterLike)

	}

	for (const $hart of $hartLikes) {
		$hart.addEventListener('click', counterLike)
	}

}

const calculLikes = () => {

	let existeLikes = localStorage.getItem("totalLikes")
	const $sum_likes = document.getElementById('sum_likes');
	if ($sum_likes && existeLikes) {
		existeLikes++;

		//update localStorage
		localStorage.setItem("totalLikes", existeLikes)
		$sum_likes.textContent = existeLikes;
	}

}