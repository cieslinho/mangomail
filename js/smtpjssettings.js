const btn = document.querySelector('contact__btn')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {
	const name = inputs.elements['contact-name'].value.trim()
	const email = inputs.elements['contact-email'].value.trim()
	const msg = inputs.elements['contact-msg'].value.trim()
	if (!name.length > 0 || !email.length > 0 || !msg.length > 0) {
		alert('All fields are mandatory')
		return
	}
	Email.send({
		Host: 'smtp.gmail.com',
		Username: 'bambobjj@gmail.com',
		Password: 'Forcabrava321',
		To: 'bambobjj@gmail.com',
		From: email,
		Subject: 'Contact Us Query By the Customer',
		Body: msg + '<br>' + name + '<br>',
	}).then(msg => alert('The email successfully sent'))
})
