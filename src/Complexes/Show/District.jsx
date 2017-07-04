import React from "react";

export default () => {
  return ( 
    <section className="complex-district-block">
      <div className="container">
        <div className="row middle-lg between-lg">
          <div className="col-lg-6">
            <h3 className="complex-district-heading">Якиманка</h3>
            <p className="complex-district-description">Исторический центр Москвы в двух <br/>километрах от Кремля</p>
            <a href="#" className="complex-district-link">Гид по Якиманке ></a>
          </div>
          <div className="col-lg-6">
            <img className="complex-district-photo" src="images/polyanka-photo.jpg"/>
          </div>
        </div>
      </div>
    </section>
   );
}