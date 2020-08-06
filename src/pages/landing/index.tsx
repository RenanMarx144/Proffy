import React from 'react';
import {Link} from 'react-router-dom'
import logo_img from '../../assets/images/logo.svg';
import landing_img from '../../assets/images/landing.svg';
import study_icon from '../../assets/images/icons/study.svg';
import giviClasses_icon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './style.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="pagelanding-content" className="container">
                <div className="logo-container">
                    <img src={logo_img} alt="proffy"/>
                    <h2>Sua plataforma de Estudos onlline</h2>
                </div>
                
                <img src={landing_img} alt="" className="hero-img"/>
            <div className="buttons-container">
                <Link to="/study" className="study">
                    <img src={study_icon} alt="estudar"/>Estudar
                </Link>

                <Link to="/give-classes" className="give-classes">
                    <img src={giviClasses_icon} alt="Dar Aulas"/>Dar Aulas
                </Link>
            </div>
            <span className="total-connection">
                total de 200 conexões já realisadas <img src={purpleHeartIcon} alt=""/>
            </span>

            
            </div>
        </div>
    );
}

export default Landing;