const changeImg  = () => {
  document.querySelector('img').src = 'assets/images/bear-warrior.jpg'
}

const handleClick = (e) => {
  console.log(e);
}

document.querySelector('h4').addEventListener('click', changeImg);
window.addEventListener('click', handleClick);