import React from 'react';
import ReactDOM from 'react-dom';
import toucan from 'assets/images/toucan.jpeg';
import kingFisher from 'assets/images/kingFisher.jpg';
import swift from 'assets/images/swift.jpg';
import parrots from 'assets/images/parrots.jpeg';
import hummingBird from 'assets/images/hummingBird.jpeg';
import BirdList from './components/BirdList';

class App extends React.Component {
  render() {
    const birds = [
      {
        name:"Toucan",
        image: toucan,
        description: "In this list of birds, the toucan is one of the beautiful beast bird which belongs to a family of Ramphastidae. This family is closely related to American barbets. The name of this bird is from Portuguese. Toucans mass ranges between 130 g -680 g, and its length lie in between 11.5 inches to 29 inches. Their bodies are short, and size is comparable to crow. Its tail is rounded and varies in length to the whole body. Its wings are small, and the neck is thick and short. These birds travel only short distances as they are forest-dwelling birds. Its tongue varies from 14-15 cm, which is a narrow and grey color. It understands the taste and is sensitive to it."
      },
      {
        name:"King fisher",
        image: kingFisher,
        description: "King fisher belongs to a family of Alcedinidae and has three other families like Alcedinidae, Halcyonidae, and Cerylidae. This beautiful bird belongs to the families that contain rivers, trees, and water kingfishers. There are about 90 species in kingfishers."
      },
      {
        name:"Swift",
        image: swift,
        description: "Swift belongs to a family of Apodidae of highly aerial birds. Treeswifts are closely related to true swifts. This family is derived from Greek, which means footless. These are flying birds and are the fastest fliers and flies about 169 km/h. Common swift can cover at least 200,000 km in a single year. Swift has large wingtip bones."
      },
      {
        name:"Parrots",
        image: parrots,
        description: "In the types of pet birds, a parrot is one. The scientific name of the parrot is Psittaciformes. They belong to a family of Psittacopasserae. These are mostly found in subtropical and tropical regions. There are about 372 species in existence in 86 general. Their size ranges from 3.5 to 40 inches and a mass of about 2.25 to 56 ounces. These birds live in groups called flocks, and each congregation contains about 20 -30 birds."
      },
      {
        name:"HummingBird",
        image: hummingBird,
        description: "Hummingbird is a small bird and a family member of Trochilidae. And its scientific name is also Trochilidae. These are the smallest birds, which range from 7.5 to 13 cm. These are well known as hummingbirds because when their wings flap, a humming sound is created. They can fly in all directions."
      },
    ]
    return (
      <>
        <h1>These are some kinds of bird !</h1>
        <BirdList birds={birds}></BirdList>
      </>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));