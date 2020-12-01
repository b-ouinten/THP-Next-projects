function run() {
  const morpion = new Morpion("J1");

  document.getElementById('undo').addEventListener('click', function() {
    cursor = morpion.historyBackward();
  });

  document.getElementById('redo').addEventListener('click', function() {
    cursor = morpion.historyForwad();
  });

  document.getElementById('select-level').addEventListener('change', function() {
    morpion.difficultyLevel = this.value;
  })
}

// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
  if (document.readyState=='complete') run();
});