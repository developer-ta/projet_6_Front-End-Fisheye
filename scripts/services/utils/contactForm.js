function displayModal(ev) {
    debugger
    ev.preventDefault();
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    debugger;

    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";

}


export { displayModal, closeModal }