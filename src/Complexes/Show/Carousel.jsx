import React from "react";



export default () => {
  return ( 
    <section className="complex-carousel">
      <div className="complex-carousel-images">
        <img src="./images/carousel-1.jpg" alt=""/>
        <img src="./images/carousel-2.jpg" alt=""/>
        <img src="./images/carousel-3.jpg" alt=""/>
        <img src="./images/carousel-4.jpg" alt=""/>
        <img src="./images/carousel-5.jpg" alt=""/>
      </div>
      <div className="container">
        <div className="row">
          <div className="complex-carousel-button-wrap">
            <button className="complex-carousel-button-view-photos">41 фотография</button>
          </div>
        </div>
      </div>
    </section>
   );
}