const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)




{/* <script>
			const scriptURL = ''
			const form = document.forms['formName']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! your form is submitted successfully." ))
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			})
		  </script> */}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzAczLMB0tyZPhY1bD-v4SInr9qRtaQSIMh9Z_pv_krvEPxBIHf06_-aCyaDBrvQ6Rz/exec'
const form = document.forms['contactform']
		  
form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => alert("Thank you! your form is submitted successfully." ))
		.then(() => {  window.location.reload(); })
		.catch(error => console.error('Error!', error.message))
	})
