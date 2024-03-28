export const _likeTotalPartiale = (mediaListData, phData) => {
	let sumLikes = 0;
	mediaListData.forEach((media) => { sumLikes += media.likes })
	const $mainSection = document.getElementById("main");
	localStorage.setItem("totalLikes", sumLikes);


	let likeTotal_html = `
	<div class="like-total">
	<p id="sum_likes">${sumLikes}  </p>
	<span class="total-like"><i class="fa-solid fa-heart"></i></span>
	<p id="Price">${phData.price}€/jour</p>
	</div>`

	$mainSection.insertAdjacentHTML('afterend', likeTotal_html)

};