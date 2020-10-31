let userInfoForm = getById('user-info-form');
let lotoForm = getById('loto-form');
let firstNameInput = getById('firstNameInput');
let firstNameAlert = getById('firstNameAlert');
let lastNameInput = getById('lastNameInput');
let lastNameAlert = getById('lastNameAlert');
let emailInput = getById('emailInput');
let emailAlert = getById('emailAlert');
let lotoNumberInput = getById('lotoNumberInput');
let lotoNumberAlert = getById('loto-number-alert');
let sendUserInfoBtn = getById('send-user-info-btn');
let sendLotoNumberBtn = getById('send-loto-number-btn');
let alertMessage = getById('alert-message');

const getUserInfo = () => {
  return {
    firstName: firstNameInput.value, 
    lastName: lastNameInput.value,
    email: emailInput.value,
    lotoNumber: lotoNumberInput.value
  }
};

const checkUserInfo = () => {
  let userInfo = getUserInfo();
  if (isUserInfoCompliant(userInfo)) {
    userInfoForm.style.display = 'none';
    lotoForm.style.display = 'block';
  }
}

const checkLoto = () => {
  let lotoNumber = lotoNumberInput.value;
  if (lotoNumber == '')
    lotoNumberAlert.style.display = 'block';
  else {
    let generatedLotoNumber = generateLotoNumber();
    checkLotoNumber(generatedLotoNumber, lotoNumber);
  }
}

const isUserInfoCompliant = (userInfo) => {
  let { firstName, lastName, email } = userInfo;
  if (firstName == '')
    firstNameAlert.style.display = 'block';
  else
    firstNameAlert.style.display = 'none';
  if (lastName == '')
    lastNameAlert.style.display = 'block';
  else
    lastNameAlert.style.display = 'none';
  if (!isValid(email))
    emailAlert.style.display = 'block';
  else
    emailAlert.style.display = 'none';

  return !(firstName == '' || lastName == '' || !isValid(email));
}

const isValid = (email) => {
  return (email.length > 8 && email.length <= 30 && hasCorrectFormat(email) && email != '');
}

const hasCorrectFormat = (email) => /[^@\s]+@([^@\s]+\.)+[^@\s]+/.test(email); 

const generateLotoNumber = () => {
  let counter = 0;
  let lotoNumber = [];

  while (counter < 6) {
    lotoNumber.push(`${random()}`);
    counter++;
  }

  return lotoNumber;
}

const random = () => Math.floor(10 * Math.random());

const check = (acc, item, index, ary, generatedLotoNumber) => {
  acc = acc && generatedLotoNumber.includes(item)
  generatedLotoNumber.splice(generatedLotoNumber.indexOf(item), 1);

  return acc;
}

const checkLotoNumber = (generatedLotoNumber, lotoNumber) => {
  let lotoNumberToArray = lotoNumber.split('-');
  let generatedLotoNumberCopy = generatedLotoNumber;
  let isWinningNumber = lotoNumberToArray.reduce((acc, item, index, ary) => check(acc, item, index, ary, generatedLotoNumberCopy), true);

  if (isWinningNumber) {
    lotoForm.style.display = 'none';
    alertMessage.innerHTML = 'Congralutations !';
    alertMessage.classList.add('alert', 'alert-success');
  }
  else {
    lotoForm.style.display = 'none';
    alertMessage.innerHTML = 'Sorry ! Didn\'t match !';
    alertMessage.classList.add('alert', 'alert-danger');
  }
}

const autoCompleteNumber = (e) => {
  // let split = 1;
  let chunk = [];
  let input = e.target.value;
  input = input.replace(/[\W\s\._\-]+/g, '');

  // for (let i = 0, len = input.length; i < len; i += split) {
  //   chunk.push(input.substr(i, split));
  // }

  chunk = input.split('')
  e.target.value = chunk.join("-");
}

const run = () => {
  sendUserInfoBtn.addEventListener('click', checkUserInfo);
  sendLotoNumberBtn.addEventListener('click', checkLoto);
  lotoNumberInput.addEventListener('keyup', autoCompleteNumber);
}

// Run code once document is loaded
// In case the document is already rendered
if (document.readyState != 'loading') run();
// Modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else 
document.attachEvent('onreadystatechange', () => { 
  if (document.readyState == 'complete') run(); 
});