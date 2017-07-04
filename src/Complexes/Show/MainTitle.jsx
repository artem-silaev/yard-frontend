import React from "react";

export default () => {
  return ( 
   <section className="complex-header">
      <div className="container">
        <div className="row between-lg">
          <div className="col-lg">
            <h1 className="complex-name">Жилой комплекс «Полянка/44»</h1>
            <p className="complex-address">Район Якиманка, улица Большая Полянка, дом 44 • 119180</p>
          </div>
          <div className="complex-add-to-favorite-wrapper">
            <button className="complex-add-to-favorite">В избранное</button>
          </div>
        </div>
      </div>
   </section>
   );
}