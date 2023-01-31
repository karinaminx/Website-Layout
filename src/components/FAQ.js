import React from "react";
import '../CSS/FAQ.css';
import {Route, Routes, Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavFomos from './Nav-Fomos.js';
import FooterFomos from './Footer-Fomos.js';

const lngs = [
    { code: "de", native: "Deutsch" },
    { code: "en", native: "English" },
  ];

function FAQ() {
    
    const { t, i18n } = useTranslation();

    const handleTrans = (code) => {
        i18n.changeLanguage(code);
      };
      
    return (
        <div>
            <NavFomos />
        
    <div>
            
        <section id="title">
        {/* Überschrift */}
        <div class="title">
          <i class="fa-regular fa-dash lineheader"></i>
            <div class="titel-text">
            <h1>{t("FAQ_Heading")}</h1>
            </div>
        </div>
    </section>


    <section id="FAQ">


    <div class="FAQintro">
        {t("FAQ_Text")}
    </div>
    <br />
    <br />

{/* button 1  */}
<div class="AuswahlFAQ">
<p>
    <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
    {t("Question1")} </a>
 </p>

  <div class="row row-background">
    <div class="col">
      <div class="collapse" id="Collapse1">
        <div class="card card-body Klapptext">
        {t("Answer1")}
        </div>
      </div>
    </div>
    </div>

   {/* zweiter button */}
    <p>
        <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">
        {t("Question2")} </a>
    </p>

      <div class="row row-background">
        <div class="col">
          <div class="collapse" id="Collapse2">
            <div class="card card-body Klapptext">
            {t("Answer2")}
            </div>
          </div>
        </div>
        </div>
        {/* 3 button */}
        <p>
            <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3">
            {t("Question3")} </a>
         </p>

          <div class="row row-background">
            <div class="col">
              <div class="collapse" id="Collapse3">
                <div class="card card-body Klapptext">
                <blockquote>
                {t("Answer3")}
                </blockquote>
                </div>
              </div>
            </div>
            </div>
        {/* 4 button */}
            <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse4" role="button" aria-expanded="false" aria-controls="multiCollapseExample4">
                {t("Question4")} </a>
             </p>

              <div class="row row-background">
                <div class="col">
                  <div class="collapse" id="Collapse4">
                    <div class="card card-body Klapptext">
                    <blockquote>
                    {t("Answer4")}
                    </blockquote>
                    </div>
                  </div>
                </div>
                </div>
         {/* 5 button */}
                <p>
                    <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse5" role="button" aria-expanded="false" aria-controls="multiCollapseExample5">
                    {t("Question5")} </a>
                 </p>

                  <div class="row row-background">
                    <div class="col">
                    <div class="collapse" id="Collapse5">
                    <div class="card card-body Klapptext">
                    <blockquote>
                    {t("Answer5")}
                    </blockquote>
                    </div>
                    </div>
                    </div>
                    </div>
        {/*  6 button */}
            <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse6" role="button" aria-expanded="false" aria-controls="multiCollapseExample6">
                {t("Question6")} 
                </a>
            </p>

              <div class="row row-background">
                <div class="col">
                  <div class="collapse" id="Collapse6">
                    <div class="card card-body Klapptext">
                    {t("Answer6")}
                    </div>
                  </div>
                </div>
                </div>

        {/* 7 button  */}
        <p>
            <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse7" role="button" aria-expanded="false" aria-controls="multiCollapseExample7">
            {t("Question7")} 
            </a>
        </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse7">
                <div class="card card-body Klapptext">
                    <blockquote>
                    {t("Answer7")}
                    </blockquote>
                </div>
            </div>
            </div>
            </div>

        {/* <!-- 8 button--> */}
            <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse8" role="button" aria-expanded="false" aria-controls="multiCollapseExample8">
                {t("Question8")} 
                </a>
            </p>

            <div class="row row-background">
                <div class="col">
                <div class="collapse" id="Collapse8">
                    <div class="card card-body Klapptext">
                        <blockquote>
                        {t("Answer8")}
                        </blockquote>
                    </div>
                </div>
                </div>
                </div>


        {/* <!-- 9 button--> */}
                <p>
                    <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse9" role="button" aria-expanded="false" aria-controls="multiCollapseExample9">
                    {t("Question9")} </a>
                </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse9">
                <div class="card card-body Klapptext">
                {t("Answer9")}
                </div>
            </div>
            </div>
        </div>

            {/*10 button */}
            <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse10" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">
                {t("Question10")} 
                </a>
            </p>

            <div class="row row-background">
                <div class="col">
                <div class="collapse" id="Collapse10">
                    <div class="card card-body Klapptext">
                    {t("Answer10")}
                    </div>
                </div>
                </div>
            </div>

            
        {/* <!-- 11 button--> */}
                <p>
                    <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse11" role="button" aria-expanded="false" aria-controls="multiCollapseExample9">
                    {t("Question11")}  </a>
                </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse11">
                <div class="card card-body Klapptext">
                {t("Answer11")}
                </div>
            </div>
            </div>
        </div>

        {/* <!-- 12 button--> */}
                <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse12" role="button" aria-expanded="false" aria-controls="multiCollapseExample9">
                {t("Question12")}  </a>
                </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse12">
                <div class="card card-body Klapptext">
                {t("Answer12")}
                </div>
            </div>
            </div>
        </div>

        {/* <!-- 13 button--> */}
                <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse13" role="button" aria-expanded="false" aria-controls="multiCollapseExample9">
                {t("Question13")} </a>
                </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse13">
                <div class="card card-body Klapptext">
                {t("Answer13")}
                </div>
            </div>
            </div>
        </div>

        {/* <!-- 14 button--> */}
                <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse14" role="button" aria-expanded="false" aria-controls="multiCollapseExample9">
                {t("Question14")} </a>
                </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse14">
                <div class="card card-body Klapptext">
                {t("Answer14")}
                </div>
            </div>
            </div>
        </div>

        {/* <!-- 15 button--> */}
                <p>
                <a class="btn btn-primary btn-light d-grid gap-2 Knopf" data-bs-toggle="collapse" href="#Collapse15" role="button" aria-expanded="false" aria-controls="multiCollapseExample9">
                {t("Question15")}  </a>
                </p>

        <div class="row row-background">
            <div class="col">
            <div class="collapse" id="Collapse15">
                <div class="card card-body Klapptext">
                {t("Answer15")}</div>
            </div>
            </div>
        </div>

    
    </div>
    </section>

    </div>
    <FooterFomos />
    </div>
    );
}

export default FAQ;