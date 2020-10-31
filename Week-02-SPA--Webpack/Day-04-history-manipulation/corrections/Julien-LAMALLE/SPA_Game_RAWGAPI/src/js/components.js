const header = () => {
  return `
    <nav> 
      <br>
      <div class="row">
        <div class="col-lg-8">
          <a class="reload" href="" id="reload"><h1>The Hyper Progame</h1></a><br>
        </div>
        <div class="col-lg-4">
          <div id="searchbar" class="d-flex justify-content-between flew-row align-items-center form-div">
            <i class="fas fa-search mx-3" id="search-icon"></i>
            <input type="text" id="findgame" value="" placeholder="Find a game..." class="form-control"><br><br>
          </div>
        </div>
      <br>
    </nav>
    `;
};

const footer = () => {
  return `
  <footer class="mt-3">
    <div class="bottomredline"></div>
    <p><b>Julien Lamalle © 2020</b> - Fictionnal website for exercice</p>
  </footer>
  `;
};

export {header, footer};