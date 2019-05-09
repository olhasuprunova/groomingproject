document.querySelector('.yourinfo input[type=submit]').addEventListener('click',
  submitForm);

function submitForm(e) {
  document.forms["yourinfo"].submit();
  e.preventDefault();
}
