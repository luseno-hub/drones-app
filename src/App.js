import './App.css';

// Drone Images Start
import drone1 from "../../drones-app/src/Assets/jason-blackeye-XYrjl3j7smo-unsplash.jpg";
import drone2 from "../../drones-app/src/Assets/thomas-griesbeck-oMJ5JyTffGA-unsplash.jpg";
import drone3 from "../../drones-app/src/Assets/pexels-flo-dnd-2100075.jpg";
import drone4 from "../../drones-app/src/Assets/pexels-pok-rie-1336185.jpg";
import drone5 from "../../drones-app/src/Assets/joshua-kantarges-gBy985PKkpQ-unsplash.jpg";
// Drone Images End

// Fonts Start
import "./Assets/fonts/Gilroy-Black.woff";
import "./Assets/fonts/Gilroy-BlackItalic.woff";
import "./Assets/fonts/Gilroy-Bold.woff";
import "./Assets/fonts/Gilroy-BoldItalic.woff";
import "./Assets/fonts/Gilroy-ExtraBold.woff";
import "./Assets/fonts/Gilroy-ExtraBoldItalic.woff";
import "./Assets/fonts/Gilroy-Heavy.woff";
import "./Assets/fonts/Gilroy-HeavyItalic.woff";
import "./Assets/fonts/Gilroy-Light.woff";
import "./Assets/fonts/Gilroy-LightItalic.woff";
import "./Assets/fonts/Gilroy-Medium.woff";
import "./Assets/fonts/Gilroy-MediumItalic.woff";
import "./Assets/fonts/Gilroy-Regular.woff";
import "./Assets/fonts/Gilroy-RegularItalic.woff";
import "./Assets/fonts/Gilroy-SemiBold.woff";
import "./Assets/fonts/Gilroy-SemiBoldItalic.woff";
import "./Assets/fonts/Gilroy-Thin.woff";
import "./Assets/fonts/Gilroy-ThinItalic.woff";
import "./Assets/fonts/Gilroy-UltraLight.woff";
import "./Assets/fonts/Gilroy-UltraLightItalic.woff";
// Fonts End

import Nav from './components/Nav.js';
import Drone from './components/Drone.js';
import Hero from './components/Hero.js';
import Content from './components/Content.js';
import Spinner from './components/Spinner.js';

function App() {
  return (
    <div className="App">
      <nav className="App__nav">
        < Nav />
      </nav>
      <div className="App__hero-sec">
        < Hero />
      </div>
      <div className="App__content container-fluid">
        < Content/>
      </div>
      <div>
        <h3 className="App__drones-heading container-fluid">Similar Drones</h3>
      </div>
      <div className="App__drone-section">
        < Drone image={drone1} name="BK - 950Z" price="9,500"/>
        < Drone image={drone2} name="MK - 130G" price="10,900"/>
        < Drone image={drone3} name="VB - 820P" price="7,500"/>
        < Drone image={drone4} name="MZ - 520L" price="8,600"/>
        < Drone image={drone5} name="TJ - 001L" price="17,300"/>
      </div>
      < Spinner />
    </div>
  );
}

export default App;
