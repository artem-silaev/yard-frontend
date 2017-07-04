import React from "react";

export default () => {
  return ( 
    <section className="complex-location">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img className="complex-map" src="images/map.png" alt=""/>
          </div>
          <div className="col-lg-6">
            <div className="complex-location-content">
              <div className="complex-location-content-block">
                <p className="complex-location-content-block-name">Красный октябрь</p>
                <p className="complex-location-content-block-duration">24 минуты, 6 км</p>
              </div>
              <div className="complex-location-content-block">
                <p className="complex-location-content-block-name">World className</p>
                <p className="complex-location-content-block-duration">2 минуты, 300 м</p>
              </div>
              <div className="complex-location-content-block">
                <p className="complex-location-content-block-name">Третьяковская галерея</p>
                <p className="complex-location-content-block-duration">14 минуты, 4 км</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}