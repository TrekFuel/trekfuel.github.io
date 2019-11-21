const form = document.getElementById('feedbackForm');
const userInput = {};
form.addEventListener('submit', (event) => {
  userInput.inputEmail = form[0].value;
  userInput.inputNickname = form[1].value;
  userInput.inputName = form[2].value;
  userInput.inputCountry = form[3].value;
  userInput.inputQuestion = form[4].value;
  userInput.gridCheck = form[5].checked;
  let formArr = [form[0].value, ' ' + form[1].value, ' ' + form[2].value, ' ' + form[3].value, ' ' + form[4].value, ' ' + form[5].checked];
  alert(formArr);
  form.reset();
  addSuccessMsg();
  event.preventDefault();
});

function addSuccessMsg() {
  let msg = document.createElement('div');
  msg.innerHTML = 'Ваши данные были успешно отправлены. Спасибо!';
  msg.className = 'alert alert-success mt-5 font-italic text-monospace style-msg';
  form.after(msg);
  removeElement(msg, 5000)
}

function removeElement(msg, timeout = 5000) {
  setTimeout(() => {
    msg.remove();
  }, timeout)
}
