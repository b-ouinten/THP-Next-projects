let goBtn = getElementById('go-btn');
let cursor = getElementById('cursor');
let circle = getElementById('circle');
let img = document.getElementsByTagName('img')[0];
let xCursor1 = 0, yCursor1 = 0, xCursor2 = 0, yCursor2 = 0;
let xp1 = 0, yp1 = 0, xp2 = 0, yp2 = 0;
let game = new Game();

const run = () => {
  getElementById('go-btn').addEventListener('click', () => game.showCreateUserCharacterForm());
  getElementById('play-btn').addEventListener('click', (e) => {
    e.preventDefault();
    game.checkUserCharacterPropertiesAndPlay();
  });
  getElementById('start-another-turn-btn').addEventListener('click', () => game.startAnotherTurn());
  document.addEventListener('mousemove', (e) => {
    let {clientX, clientY} = e;
    let goBtnClientWidth = goBtn.clientWidth;
    let goBtnClientHeight = goBtn.clientHeight;
    let imgClientWidth = img.clientWidth;
    let imgClientHeight = img.clientHeight;
    let goBtnLeft = goBtn.getBoundingClientRect().left; 
    let goBtnTop = goBtn.getBoundingClientRect().top; 
    let imgLeft = img.getBoundingClientRect().left; 
    let imgTop = img.getBoundingClientRect().top; 
    xCursor1 = clientX - (cursor.clientWidth / 2);
    yCursor1 = clientY - (cursor.clientHeight / 2);
    xCursor2 = clientX - (circle.clientWidth / 2);
    yCursor2 = clientY - (circle.clientHeight / 2);

    let cursorIsMovedOntoGoBtn = (xCursor1 >= goBtnLeft && xCursor1 <= goBtnLeft + goBtnClientWidth && yCursor1 >= goBtnTop && yCursor1 <= goBtnTop + goBtnClientHeight);
    let cursorIsMovedOntoImg = (xCursor1 >= imgLeft && xCursor1 <= imgLeft + imgClientWidth && yCursor1 >= imgTop && yCursor1 <= imgTop + imgClientHeight);
    
    if (cursorIsMovedOntoGoBtn || cursorIsMovedOntoImg) {
      hideElement(cursor);
      hideElement(circle);
    }
    else {
      showElement(cursor);
      showElement(circle);
    }
  });

  setInterval(() => {
    xp1 += ((xCursor1 - xp1)/8);
    yp1 += ((yCursor1 - yp1)/8);
    xp2 += ((xCursor2 - xp2)/10);
    yp2 += ((yCursor2 - yp2)/10);
    elementStyle(cursor, 'left', `${xp1}px`);
    elementStyle(cursor, 'top', `${yp1}px`);
    elementStyle(circle, 'left', `${xp2}px`);
    elementStyle(circle, 'top', `${yp2}px`);
  }, 40);

  img.addEventListener(('mousedown'), function(e) {
    e.preventDefault();
    elementStyle(img, 'cursor', 'grabbing');
    
    let { clientX, clientY } = e;
    let { left, top } = img.getBoundingClientRect();
    let shiftX = clientX - left;
    let shiftY = clientY - top;
      
    const moveAt = (pageX, pageY) => {
      img.style.left = pageX - shiftX + 'px';
      img.style.top = pageY - shiftY + 'px';
    }
  
    const onMouseMove = (e) => {
      moveAt(e.pageX, e.pageY);
    }
  
    document.addEventListener('mousemove', onMouseMove);
  
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      img.removeEventListener('mouseup', onMouseUp);
      elementStyle(img, 'cursor', 'grab');
    }

    img.addEventListener('mouseup', onMouseUp);
  });
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