import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu'

const App = () => {
  return (
    <div id="main">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F65oO2hg3xAX04%2Fgiphy.gif&f=1&nofb=1" />
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmugen%2Fimages%2F1%2F1d%2FGladiazardS1_1.gif%2Frevision%2Flatest%3Fcb%3D20150807001418&f=1&nofb=1" className="rotating" />
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F65oO2hg3xAX04%2Fgiphy.gif&f=1&nofb=1" />

      <h1 className="main-title">Super Note app</h1>
      <Menu />
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcutekawaiiresources.files.wordpress.com%2F2014%2F10%2Fmeichama.gif&f=1&nofb=1" />
      <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwfarm1.dataknet.com%2Fstatic%2Fresources%2Ficons%2Fset47%2Fa419f51b.png&f=1&nofb=1" className="rotating" />
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcutekawaiiresources.files.wordpress.com%2F2014%2F10%2Fmeichama.gif&f=1&nofb=1" />

    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));