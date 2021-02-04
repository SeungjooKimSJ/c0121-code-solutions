// const { formatters } = require("stylelint");

var $contactForm = document.querySelector('#contact-form');

function clickedSubmit(event) {
  event.preventDefault();
  var messageData = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log('messageData:', messageData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', clickedSubmit);
