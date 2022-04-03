function validation() {
  let form = document.getElementById('form');
  let email = document.getElementById('email-input').value;
  let text = document.getElementById('error-msg');
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.match(pattern)) {
    emailInput.classList.remove('invalid');
    text.innerHTML = '';
  } else {
    emailInput.classList.add('invalid');
    text.innerHTML = 'Please provide a valid email address';
  }
}

const emailInput = document.getElementById('email-input');
emailInput.addEventListener('keydown', validation);
// tt
