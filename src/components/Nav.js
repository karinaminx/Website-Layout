import React from "react";
import '../CSS/Nav.css';
import { useTranslation } from 'react-i18next';
import { initReactI18next } from 'react-i18next';

import {Route, Routes, Link, useLocation} from 'react-router-dom';
import fomoslogo from '../images/fomos-logo.png';

const lngs = [
  { code: "de", native: "Deutsch" },
  { code: "en", native: "English" },
];


/* Nav Bar aller Seiten */

const Home = () =>(
  <div>
    <h1>Home</h1>
  </div>
);





function Nav() {

  const { t, i18n } = useTranslation();
  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

    const navStyle={
        color: "white",
        textDecoration: 'none',
    };

    
  return (
    <section id="header">
  <div class = "container-fluid">

    <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      
    <div>
      <a class="navbar-brand">
      <Link style={navStyle} to="/">
        <img src={fomoslogo} alt="Logo" width="35%" class="d-inline-block" />
      </Link>
      </a>
    </div>
    </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#target1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="target1">
          <ul class="navbar-nav ms-auto">
            
            
            <li class="nav-item">
                <Link style={navStyle} to="/kontakthome">
                    <a class="nav-link" >{t("kontakt")}</a>
                </Link>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle btn btn-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t("sprache")}
                </a>
                {/*Language*/}
                <ul class="dropdown-menu">
                  {lngs.map((lng, i) => {
                  const { code, native } = lng;
                  return <button class="dropdown-item" onClick={() => handleTrans(code)}>{native}</button>;
                  })}
                  </ul>
            </li>
          </ul>
          </div>
      </nav>
  </div>
 </section>
  );
}

export default Nav;


 