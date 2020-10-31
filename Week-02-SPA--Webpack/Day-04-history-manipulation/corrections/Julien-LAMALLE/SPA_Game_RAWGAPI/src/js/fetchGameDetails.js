const getScreenshots = url => {
  fetch(url) 
    .then(response => response.json())
    .then(response => {
      let screenshots = response.results;
      document.getElementById("screenshot").innerHTML = `
        <div class="col-lg-6 col-sm-12 text-center px-2 my-2"><img src="${screenshots[0].image}"></div>
        <div class="col-lg-6 col-sm-12 text-center px-2 my-2"><img src="${screenshots[1].image}"></div>
        <div class="col-lg-6 col-sm-12 text-center px-2 my-2"><img src="${screenshots[2].image}"></div>
        <div class="col-lg-6 col-sm-12 text-center px-2 my-2"><img src="${screenshots[3].image}"></div>`;
    });
}


export {getScreenshots}