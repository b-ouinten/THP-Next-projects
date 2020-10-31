import {formatDate} from './DefaultHome';

const fetchYoutube = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let video = '';

      if (response.results[0]){
        video += `
        <div class="col-lg-6 text-center mb-3">
          <iframe width="100%" height="500" src="https://www.youtube.com/embed/${response.results[0].external_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col-lg-6 text-center">
          <h3>${response.results[0].name}</h3>
          <h4 id="youtube-words">${response.results[0].channel_title} - ${formatDate(response.results[0].created)}</h4>
        </div>
        `;
      }
      document.getElementById("youtube").innerHTML = video;

      let minivideos = '';
      for(let i = 0; i < 3 ; i++){
        if (response.results[i]) {
          minivideos += `
            <div class="col-lg-4 text-center">
              <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${response.results[i].external_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <h3>${response.results[i].name}</h3>
              <h4>${response.results[i].channel_title} - ${formatDate(response.results[i].created)}</h4>
            </div>
          `;
        }
      }
      document.getElementById('youtube-mini').innerHTML = minivideos;
    });

  
}

export {fetchYoutube};