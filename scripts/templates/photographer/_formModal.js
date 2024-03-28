import { closeModal } from "../../services/utils/contactForm.js";

//form modal
export const _formModal = () => {
	debugger;
	const formValidator = new FormValidator()
	formValidator.initForm();
};

class FormValidator {
	constructor () {

		this.formData = {};

	}
	// make interface obj validate
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
	//nom
	get firstName() {

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
		beValidateEmail.regexpStr = '[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+';//const regExEmail = '[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+';
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

		if (new RegExp(objValidate.regexpStr).test(objValidate.elValue.trim())) {
			this.formData[`${typeInput}`] = objValidate.elValue;
			objValidate.isValide = true;

			//if after error input is correct 
			if ($formEl.dataset.isError) {


				$formEl.nextSibling.textContent = ''
				$formEl.dataset.isError = false;
			}
			return objValidate;
		}

		let errorMg = objValidate.elValue ? objValidate.errorMg.invalid : objValidate.errorMg.empty;

		if (!$formEl.dataset.isError) {
			let $error_span = `<span class="error">${errorMg}</span>`
			$formEl.insertAdjacentHTML('afterend', $error_span)
			$formEl.dataset.isError = true;
			return objValidate
		}
		//if error span existe display error Mg
		$formEl.nextSibling.textContent = errorMg;
		return objValidate;
	}

	checkValidated() {

		if (this.name & this.firstName & this.email) {
			return { ok: true, canSandData: this.formData }
		}
		return { ok: false, canSandData: {} }
	}

	formDefault(submit_btn, formDiv, succeed_el, form, header_el) {
		debugger

		formDiv.style.display = 'flex'
		header_el.style.display = 'block'
		form.removeChild(succeed_el)
		submit_btn.textContent = 'Envoyer'

		document.querySelector('#contact_modal #name').value = '';
		document.querySelector('#contact_modal #firstName').value = '';
		document.querySelector('#contact_modal #email').value = '';
		document.querySelector('#contact_modal #message').value = '';

		closeModal();
	}

	formClose() {
		const $closeModal = document.querySelector('#contact_modal .closeModal');
		$closeModal.addEventListener('click', closeModal)

	}

	initForm() {
		//el Dom
		const $submit_btn = document.querySelector('form .contact_button')

		$submit_btn.addEventListener('click', (ev) => {
			ev.preventDefault();
			debugger
			const $form = document.querySelector('form')
			const $div = document.querySelector('form div')
			const $succeed_el = document.querySelector('form .succeed')
			const $header_el = document.querySelector('.modal > header:nth-child(1)')

			if ($succeed_el) {
				this.formDefault($submit_btn, $div, $succeed_el, $form, $header_el);
				return

			}

			const { ok, canSandData } = this.checkValidated();

			if (ok) {


				$div.style.display = 'none'
				$header_el.style.display = 'none'
				$form.insertAdjacentHTML('afterbegin', `<h3 class='succeed'>Merci de votre suggestion</h3>`)
				$submit_btn.textContent = 'fermé'

				console.log('canSandData: ', canSandData);

			}
		})

		this.formClose();
	}

}





