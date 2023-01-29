import React from "react";
import '../CSS/Footer.css';

import {Route, Routes, Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const lngs = [
    { code: "de", native: "Deutsch" },
    { code: "en", native: "English" },
  ];


function Footer() {

    const { t, i18n } = useTranslation();

    const handleTrans = (code) => {
        i18n.changeLanguage(code);
      };
      
return (
        

<section id="footer">
    <footer>
        <div class="row rowfooter">
            <div class="col-lg-8 col-md-8 col-sm-12">
                <h1 class="footer-h1">NOWCAST</h1>
                <div>
                <p>{t("KIT")} </p>
                <p>{t("HITS")} </p>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 ">
                <table className="footer_table">
                <tr><Link to="/kontakthome"><p>{t("kontakt")}</p></Link></tr>
                <tr><p><a href="erklärung.html">{t("Datenschutz")}</a></p></tr>
                <tr>
                    <p>Copyright ⓒ {new Date().getFullYear()}</p>
                </tr>
            
                </table>
            </div>
        </div>  
    </footer>
</section>
  

    );
}
    
export default Footer;