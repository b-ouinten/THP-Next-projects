import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Colors from './components/Colors';
import Parent from './components/Parent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDrawing: false,
    };
  }

  showDrawing = () => {
    this.setState({
      showDrawing: !this.state.showDrawing,
    });
  };

  render() {
    let drawing;

    let painting = (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/520px-Meisje_met_de_parel.jpg"
        alt="Portrait de la Jeune fille à la perle, peint par Vermeer vers 1665"
      />
    );

    if (this.state.showDrawing) {
      drawing = (
        <img
          src="http://www.maisonsvictorhugo.paris.fr/sites/victorhugo/files/oeuvre/visuels_principaux/25935-15.jpg"
          alt="Dessin 'La tour des rats', peint par Victor Hugo en 1847"
        />
      );
    }

    return (
      <>
        <h1>Hello familly !</h1>
        <Counter />
        <Colors />
        <hr/>
        <Parent />
        <hr/>
        <p>What do you want to see ?</p>

        <button onClick={this.showDrawing}>A drawing</button>
        <br/>
        <br/>
        {drawing && painting}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
