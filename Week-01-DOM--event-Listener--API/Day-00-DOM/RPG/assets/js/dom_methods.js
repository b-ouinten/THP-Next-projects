const getElementById = (id) => document.getElementById(id);
const hideElement = (el) => elementStyle(el, 'display', 'none');
const showElement = (el) => elementStyle(el, 'display', 'block');
const elementStyle = (el, prop, val) => el.style.setProperty(prop, val);
const getElementByTagName = (el) => document.getElementsByTagName(el)[0];