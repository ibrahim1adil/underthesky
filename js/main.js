/* main.js — small interactivity for Under the Sky
   Shows a thank-you message when the suggestion form is submitted,
   without leaving the page. */
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('suggest-form');
  var thanks = document.getElementById('form-thanks');
  if (!form || !thanks) { return; }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value.trim();
    thanks.textContent = name
      ? 'Thanks, ' + name + ' — your spot has been added to my list. Clear skies!'
      : 'Thanks — your suggestion has been received. Clear skies!';
    thanks.hidden = false;
    form.reset();
    thanks.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
