import './App.css';

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
        < Drone/>
        < Drone/>
        < Drone/>
        < Drone/>
        < Drone/>
      </div>
      < Spinner />
    </div>
  );
}

export default App;
