export default {
	alpha: {
		message: 'Must contain only letters',
		regex: /^[a-zA-Z]+$/
	},
	alphaNumeric: {
		message: 'Must contain only letters and numbers',
		regex: /^[a-zA-Z0-9]+$/
	},
	email: {
		message: 'Invalid email address',
		regex: /^\S+@\S+$/
	},
	password: {
		message: 'Must contain at least 8 characters. Include both uppercase letter and a number',
		regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
	},
	phone: {
		message: 'Invalid phone number',
		regex: /^\+(?:[0-9] ?){6,14}[0-9]$/
	}
}