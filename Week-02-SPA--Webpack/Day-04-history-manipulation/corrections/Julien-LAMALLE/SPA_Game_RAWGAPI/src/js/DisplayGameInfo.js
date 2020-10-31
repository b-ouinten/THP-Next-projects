const showInfo = (e) => {
  e.target.classList.add("not-visible");
  e.target.nextElementSibling.classList.remove("not-visible");
};

const hideInfo = (e) => {
  e.target.classList.add("not-visible");
  e.target.previousElementSibling.classList.remove("not-visible");
};

export {showInfo, hideInfo};