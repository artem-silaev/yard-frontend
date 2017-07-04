import React from 'react';
import arrowImage from "./images/arrow.png";

export default () =>
  (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-4">
            <h4 className="footer-title footer-name-company">ООО «Ярд»</h4>
            <p className="footer-text">ОГРН 1175074002531</p>
            <p className="footer-text">ИНН 5036165365</p>
            <p className="footer-text footer-phone">+7 (999) 821-14-88</p>
          </div>
          <div className="col-xs-2">
            <div className="footer-company">
              <h4 className="footer-title">Жилые комплексы</h4>
              <a href="#" className="footer-link">ВТБ Арена Парк</a>
              <a href="#" className="footer-link">Садовые кварталы</a>
              <a href="#" className="footer-link">Резиденция Монэ</a>
              <a href="#" className="footer-link footer-link-arrow">Все ЖК Москвы <img className="link-arrow" src={arrowImage}/></a>
            </div>
          </div>
          <div className="col-xs-2">
            <div className="footer-company">
              <h4 className="footer-title">Компания</h4>
              <a href="#" className="footer-link">Команда</a>
              <a href="#" className="footer-link">О компании</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-lg-offset-4">
            <p className="footer-copyright">
              Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
