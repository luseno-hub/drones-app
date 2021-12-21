import drone1 from "../../../drones-app/src/Assets/jason-blackeye-XYrjl3j7smo-unsplash.jpg";

function Drone() {
  return ( 
    <div className="drone-info--wrapper">
      <div className="drone-info">
        <div class="drone-info__IMG-droneWrap">
          <img src={drone1} className="img-IMG" alt="drone in forest"/>
        </div>
        <div className="drone-info__name-price">
          <p className="drone-info__title-name">BK - 950Z</p>
          <p className="drone-info__title-price">USD 9,500</p>
        </div>
      </div>
    </div>
   );
}

export default Drone;