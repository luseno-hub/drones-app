function Drone( {image, name, price} ) {
  return ( 
    <div className="drone-info--wrapper" draggable="true">
      <div className="drone-info">
        <div class="drone-info__IMG-droneWrap">
          <img src={image} className="img-IMG" alt="drone in forest"/>
        </div>
        <div className="drone-info__name-price">
          <p className="drone-info__title-name">{name}</p>
          <p className="drone-info__title-price">USD {price}</p>
        </div>
      </div>
    </div>
   );
}

export default Drone;

