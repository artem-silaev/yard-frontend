import React from "react";
import Offer from './Offer';

export default () => (
    <section className="complex-offers">
      <div className="container">
        <h2 className="complex-offers-title">Предложения в ЖК «Полянка/44»</h2>
        <div className="row">
          <div className="col-lg-4">
            <Offer amount={1} square={{ min: 59, max: 120 }} price={{ min: 20.3, max: 84.2 }} />
          </div>
          <div className="col-lg-4">
             <Offer amount={2} square={{ min: 20.3, max: 84.2 }} price={{ min: 20.3, max: 84.2 }} />
          </div>
          <div className="col-lg-4">
            <Offer amount={1} square={{ min: 59, max: 120 }} price={{ min: 20.3, max: 84.2 }} />
          </div>
        </div>
      </div>
    </section>
);