export const getElementById = (id) => document.getElementById(id);
export const hideElement = (el) => elementStyle(el, 'display', 'none');
export const showElement = (el) => elementStyle(el, 'display', 'block');
export const elementStyle = (el, prop, val) => el.style.setProperty(prop, val);
export const getElementByTagName = (el) => document.getElementsByTagName(el)[0];