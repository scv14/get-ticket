import React from 'react';

import "./aboutUs.css";


function AboutUs (props){
    return (
            <div className="conatiner">
                <div className='aboutUs'>
                    <h1 className="aboutUsTitle">О нас</h1>
                    <p className="aboutUsDescription">
                    TESSERUS.COM — национальный билетный оператор и онлайн-сервис по продаже билетов на развлекательные мероприятия в Якутске: концерты, театральные и цирковые постановки, тренинги и семинары, шоу, фестивали, экскурсии, детские и спортивные события.<br/><br/>Компания является точкой входа для зрителей при выборе билетов на развлекательные мероприятия и предлагает билеты на любые места и даты, а также делает персонализированные рекомендации пользователям, ориентируясь на их интересы.<br/><br/>Мы стремимся сделать так, чтобы каждое событие стало лучше, а его организация — проще.
                    </p>
                </div>
            </div>
    )
}

export default AboutUs;
