import heroImg from "../../../drones-app/src/Assets/jason-blackeye-XYrjl3j7smo-unsplash.jpg";

function Hero() {
  return ( 
    <div className="hero-sec">
      <div className="hero-wrapper">
        <img src= {heroImg} alt="landing" />
      </div>
    </div>
   );
}

export default Hero;