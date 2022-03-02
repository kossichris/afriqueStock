import React from "react";
import { colors } from "../../constants/colors";
import Styles from "../css/ImportContent.css";

const ImportContent = () => {
  return (
    <>
      <div className="containeur margin_60_35 mt-5">
        <div className="row  mt-5">
          <h4>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-left"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke={colors.primary}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
            Retour
          </h4>
          <div className="txt-title mb-3">
            <h3>Importer des données</h3>
            <span>Transférez vos fichiers pour commencer à les vendre</span>
          </div>
          <div className="box_booking">Ok</div>
          <div className="col-lg-3">
            <div className="box_booking">
              {" "}
              <div className="illust">
                <span>
                  EXIGENCES POUR LES <br /> <b>PHOTOS</b>{" "}
                </span>
              </div>
              <div className="gray-block">
                <ul>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-check"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke={colors.primary}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </span>
                    <span>
                      Les images doivent avoir pas moins de 6 megapixels et une
                      taille de fichier qui ne dépasse pas 40Mo
                    </span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-check"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke={colors.primary}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    Les images doivent être au format JPEG et en compression de
                    qualité minimale de 80%{" "}
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-check"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke={colors.primary}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    Les images doivent pas contenir des noms de sociétés, noms
                    de produits, marques reconnaissables, date ou marques
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-check"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke={colors.primary}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    Les mots-clés protégés par copyright et les noms des
                    appareils et cameras utilisés NE DOIVENT PAS être inclus
                    dans le champs de description ou des mots-clés.
                    <p>Les images avec modèle(s) d'autorisation valide </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="box_booking">ok</div>
          </div>
          <div className="col-lg-3">
            <div className="box_booking">ok</div>
          </div>
          <div className="col-lg-3">
            <div className="box_booking">ok</div>
          </div>
        </div>
      </div>
      <style jsx>{Styles}</style>
    </>
  );
};

export default ImportContent;
