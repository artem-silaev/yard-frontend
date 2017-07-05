import React from "react";
import { Row } from 'react-flexbox-grid';

export default props => (
	<div className="complex-offer">
	  <div className="complex-offer-title">{props.amount}-комнатные квартиры</div>
	  <dl className="complex-offer-property-block">
			<dt className="complex-offer-property-name">Площадь</dt>
			<dd className="complex-offer-property-value">от {props.square.min} до {props.square.max} м²</dd>
	  </dl>
	  <dl className="complex-offer-property-block">
			<dt className="complex-offer-property-name">Стоимость</dt>
			<dd className="complex-offer-property-value">от {props.price.min} до {props.price.max} млн руб</dd>
	  </dl>
	  <Row center="lg">
			<div className="complex-offer-button-wrapper">
			  <button className="complex-offer-button">Посмотреть предложения</button>
			</div>
	  </Row>
	</div>
);
