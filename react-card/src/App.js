import React, { Component } from 'react';
import './App.css';
import ProfileImage from './assets/Sazh.Katzroy..jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Sazh Katzroy ',
        bio: 'Sazh Katzroy is a middle-aged man with an afro who works as an airship pilot and appears in the Lightning Saga of the Final Fantasy series. He is the father of Dajh and becomes a playable character in Final Fantasy XIII and in a downloadable episode of Final Fantasy XIII-2. In Lightning Returns: Final Fantasy XIII, he appears as a non-player character. Sazh is known for his cheerful and lively personality, and his primary motivation is protecting his son. After Dajh becomes a Sanctum lCie, Sazh becomes more level-headed and mature, often serving as the voice of reason. In Lightning Returns: Final Fantasy XIII, Sazh has lost his cheerfulness due to grief. His eidolith is a chocobo feather, and his Eidolon is Brynhildr.',
        imgSrc: ProfileImage,
        profession: 'Air-Pilot, Final Fantasy  XIII',
      },
      show: false,
      mountedTime: new Date(),
    };
  }
        // toggle 
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };
      // timed interval
  componentDidMount() {
    this.interval = setInterval(() => this.setState({}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>    
          Toggle Profile
        </button>
        {show && (
          <div className='profileContainer'>
              <h2>Name: {fullName}</h2>
              <p>Bio: {bio}</p>
              <p>Profession: {profession}</p>
              <img src={imgSrc} alt="Profile" />
            <p>Time since mounted: {Math.round((new Date() - mountedTime) / 1000)} seconds</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;