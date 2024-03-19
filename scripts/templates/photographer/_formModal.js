//form modal
const _formModal = () => {


};

class formValidator {
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
		const $name_in = document.querySelector('#contact_modal #name');
		beValidateName = this.beValidateObj
		this.beValidateName.elValue = $name_in.value;
		this.beValidateName.regexpStr = '^[a-zA-Z._-]+$';
		this.beValidateName.errorMg = {
			empty: 'Veuillez entrer votre nom.',
			invalid: 'Le nom que vous avez saisi est invalide. Veuillez réessayer.',
		}

		const validatedObj = this.validator(beValidateName, $name_in, 'name')

		return validatedObj.isValide;

	}
	get firstName() {

		const $firstName_in = document.querySelector('#contact_modal #firstName');
		beValidateFirstName = this.beValidateObj
		this.beValidateFirstName.elValue = $firstName_in.value;
		this.beValidateFirstName.regexpStr = '^[a-zA-Z._-]+$';
		this.beValidateFirstName.errorMg = {
			empty: 'Veuillez entrer votre prénom.',
			invalid: 'Le prénom que vous avez saisi est invalide. Veuillez réessayer.',
		}
		const validatedObj = this.validator(beValidateFirstName, $firstName_in)
		return validatedObj.isValide;

	}
	get email() {

		const $email_in = document.querySelector('#contact_modal #email');
		beValidateEmail = this.beValidateObj
		this.beValidateEmail.elValue = $email_in.value;
		this.beValidateEmail.regexpStr = '[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+';
		this.beValidateEmail.errorMg = {
			empty: 'Veuillez entrer une adresse email valide.',
			invalid: "L'adresse email que vous avez saisie est invalide. Veuillez réessayer.",
		}

		const validatedObj = this.validator(beValidateEmail, $email_in)
		return validatedObj.isValide;
	}
	get MessageUser() {

		const $message_in = document.querySelector('#contact_modal #message');
		this.beValidateObj.elValue = $message_in.value;


	}
	validator = (objValidate, $formEl, typeInput) => {

		if (objValidate.elValue && new RegExp(objValidate.regexpStr).test(objValidate.elValue.trim())) {
			this.formData['typeInput'] = elValue;
			objValidate.isValide = true;
			$formEl.value = '';
			return objValidate;
		}
		let errorMg = objValidate.elValue ? objValidate.errorMg.invalid : objValidate.errorMg.empty;
		$error_span = `<span class="error">${errorMg}</span>`
		$formEl.insertAdjacentHtml('afterend', $error_span)
		return objValidate;
	}

	initForm() {
		if (this.name && this.firstName && this.email) {

		}
	}

}





