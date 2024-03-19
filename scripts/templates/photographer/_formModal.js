import { closeModal } from "../../services/utils/contactForm.js";

//form modal
export const _formModal = () => {
	debugger;

	const $submit_btn = document.querySelector('form .contact_button')


	$submit_btn.addEventListener('click', (ev) => {
		ev.preventDefault();
		debugger

		let formValidator = new FormValidator()
		const { ok, canSandData } = formValidator.initForm();

		//el Dom
		const $form = document.querySelector('form')
		const $succeed_el = document.querySelector('form .succeed')

		if ($succeed_el) {
			formDefault($submit_btn, $form);
		}
		else if (ok) {
			$form.childNodes.forEach(el => el.style.display = 'none')
			$form.insertAdjacentHTML('beforebegin', `<h3 class='succeed'>Merci de votre suggestion</h3>`)
			$submit_btn.textContent = 'fermé'

			console.log('canSandData: ', canSandData);

		}
	})

};
// init form default state
function formDefault(submit_btn, form) {
	debugger
	form.childNodes.forEach(el => el.style.display = 'block')
	form.removeChild($succeed_el)
	submit_btn.textContent = 'Envoyer'
	//closeModal();
}

class FormValidator {
	constructor () {
		//this.firstNameValidate = this.beValidateObj;
		this.formData = {};

	}
	//interface obj
	get beValidateObj() {
		const validateObj = {
			elValue: '',
			errorMg: {
				empty: '',
				invalide: ''
			},
			regexpStr: '',
			isValide: false,

		}
		return new Object(validateObj);
	}

	// prénom
	get name() {
		debugger
		const $name_in = document.querySelector('#contact_modal #name');
		const beValidateName = this.beValidateObj
		beValidateName.elValue = $name_in.value;
		beValidateName.regexpStr = '^[a-zA-Z._-]+$';
		beValidateName.errorMg = {
			empty: 'Veuillez entrer votre nom.',
			invalid: 'Le nom que vous avez saisi est invalide. Veuillez réessayer.',
		}

		const validatedObj = this.validator(beValidateName, $name_in, 'name')

		return validatedObj.isValide;

	}
	get firstName() {
		debugger
		const $firstName_in = document.querySelector('#contact_modal #firstName');
		const beValidateFirstName = this.beValidateObj
		beValidateFirstName.elValue = $firstName_in.value;
		beValidateFirstName.regexpStr = '^[a-zA-Z._-]+$';
		beValidateFirstName.errorMg = {
			empty: 'Veuillez entrer votre prénom.',
			invalid: 'Le prénom que vous avez saisi est invalide. Veuillez réessayer.',
		}
		const validatedObj = this.validator(beValidateFirstName, $firstName_in, 'firstName')
		return validatedObj.isValide;

	}
	get email() {
		debugger
		const $email_in = document.querySelector('#contact_modal #email');
		const beValidateEmail = this.beValidateObj
		beValidateEmail.elValue = $email_in.value;
		beValidateEmail.regexpStr = '[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+';
		beValidateEmail.errorMg = {
			empty: 'Veuillez entrer une adresse email valide.',
			invalid: "L'adresse email que vous avez saisie est invalide. Veuillez réessayer.",
		}

		const validatedObj = this.validator(beValidateEmail, $email_in, 'email')
		return validatedObj.isValide;
	}
	get MessageUser() {

		const $message_in = document.querySelector('#contact_modal #message');
		this.formData[`MessageUser`] = $message_in.value;


	}
	validator = (objValidate, $formEl, typeInput) => {
		$formEl.dataset.isError = false;
		if (objValidate.elValue && new RegExp(objValidate.regexpStr).test(objValidate.elValue.trim())) {
			this.formData[`${typeInput}`] = objValidate.elValue;
			objValidate.isValide = true;
			$formEl.value = '';
			//if after error input is correct 
			if ($formEl.dataset.isError) {
				$formEl.nextSibling.display = 'none'
				$formEl.dataset.isError = false;
			}
			return objValidate;
		}

		let errorMg = objValidate.elValue ? objValidate.errorMg.invalid : objValidate.errorMg.empty;

		if (!$formEl.dataset.isError) {
			let $error_span = `<span class="error" ${errorMg}</span>`
			$formEl.insertAdjacentHTML('afterend', $error_span)
			return objValidate
		}
		//if error span existe display error Mg
		$formEl.nextSibling.textContent = errorMg;
		return objValidate;
	}

	initForm() {
		debugger;
		if (this.name & this.firstName & this.email) {
			return { ok: true, canSandData: this.formData }
		}
		return { ok: false, canSandData: {} }
	}

	formClose() {

	}



}





