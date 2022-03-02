import React from "react";
import Styles from "../css/Dash_content.css";
import { Chart } from "react-google-charts";
import { colors } from "../../constants/colors";
import Footercopyrightwhitebg from "../FooterCopyrightWhiteBg";
import Buttonsmall from "../ButtonSmall";

const DashContent = () => {
  return (
    <>
      <div className="cont-s m-auto margin_60_35 mt-5">
        <div className="row mt-5">
          <div className="col-lg-6 ">
            <div className="box_booking no-bottom">
              <div className="row flex-wrap">
                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 d-flex flex-column justify-content-center align-items-center">
                  <div className=" cont d-flex flex-row flex-wrap justify-content-around">
                    <div className="price-container ">
                      <small>INTERVALLE DE TEMPS</small>
                      <div className="">
                        <div className="custom-select-form ml-3">
                          <select
                            className="nice-select wide wide add_bottom_10"
                            name="country"
                            id="country"
                          >
                            <option value="">Depuis 3 mois</option>
                            <option value="Europe">Depuis 2 mois</option>
                            <option value="Europe">Depuis 1 mois</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="vertLine"></div>
                    <div className="price-container ">
                      <small>TOTAL DES REVENUS</small>
                      <h6 className="d-flex flex-row">
                        <h6 className="ml-2">1201,3$</h6>
                      </h6>
                    </div>
                    <div className="vertLine"></div>
                    <div className="price-container">
                      <small>TELECHARGMENTS</small>
                      <h6 className="d-flex flex-row">
                        <h6 className="ml-2">121</h6>
                      </h6>
                    </div>
                    <div className="vertLine"></div>
                    <div className="price-container">
                      <small>POSITION</small>
                      <h6 className="d-flex flex-row">
                        <h6 className="ml-2">6e</h6>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <div className="box_booking no-bottom">
              <div className="row flex-wrap block-right">
                <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 d-flex flex-column justify-content-center align-items-center">
                  <div className="price-container mobile-width">
                    <small>REVENU NON VERSE</small>
                    <h4 className="d-flex flex-row">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-wallet mt-1"
                        width="27"
                        height="27"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="#49B521"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                        <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                      </svg>
                      <h4 className="mt-1">300,9$</h4>
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 d-flex flex-row justify-content-center align-items-center">
                  <input
                    type="submit"
                    value="Demander un paiement"
                    id="submit-contact"
                    className="btn_1 primary-btn  m-right collection-btn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containeur ">
        <div className="row ">
          <div className="box_booking no-bottom mb-5">
            <div className="row flex-wrap">
              <div className="col-md-1 col-lg-1 col-sm-1 col-xs-12"></div>
              <div className="col-md-5 col-lg-5 col-sm-5 col-xs-12">
                <div className="mt-3">TOTAL DES REVENUES 2021</div>
              </div>
              <div className="col-md-5 col-lg-5 col-sm-5 col-xs-12">
                <p className="btns d-flex flex-row flex-wrap justify-content-end">
                  <a className="btn_1  m-right chart-btn">
                    <span> Semaine</span>
                  </a>
                  <a className="btn_1  m-right chart-btn">
                    <span> Mois</span>
                  </a>
                  <a className="btn_1  m-right chart-btn">
                    <span> Ans</span>
                  </a>
                </p>
              </div>
              <div className="col-md-1 col-lg-1 col-sm-1 col-xs-12"></div>
              <div className="col-lg-12">
                <Chart
                  chartType="ScatterChart"
                  data={[
                    ["Age", "Weight"],
                    [4, 5.5],
                    [8, 12],
                  ]}
                  width="100%"
                  height="400px"
                  legendToggle
                />
              </div>
            </div>
          </div>
          <div className="box_booking">
            <div className="row">
              <div className="col-lg-12">
                <span>Gérer les autorisations</span>
              </div>
            </div>
            <div className="row flex-wrap">
              <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12">
                <div className="form-group mt-3">
                  <input
                    className="form-input"
                    type="text"
                    id="lastname_contact"
                    name="lastname_contact"
                    placeholder="Rechercher une autorisation"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={colors.blue}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                  </svg>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12">
                <p className="mt-3 btns d-flex flex-row flex-wrap justify-content-end">
                  <a className="btn_1 rounded _btn  m-right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-user"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="7" r="4" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <span> Mon portfolio</span>
                  </a>
                </p>
              </div>

              <div className="col-lg-12"></div>
            </div>
          </div>
          <div className="box_booking box_booking-prime">
            <div className="row">
              <div className="col-lg-12 text-blue">
                <span>Vos contenues acceptés sur AfriqueStock</span>
              </div>
            </div>
            <div className="row flex-wrap">
              <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12">
                <ul className="d-flex flex-row flex-wrap mt-4">
                  <li>Tous les contenues (627)</li>
                  <li>Photos (407)</li>
                  <li>Illustrations (104)</li>
                  <li>Vecteurs (40)</li>
                  <li>Vidéos (14)</li>
                  <li>Collections</li>
                </ul>
              </div>
              <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12">
                <p className="mt-3 btns d-flex flex-row flex-wrap justify-content-end">
                  <input
                    type="submit"
                    value="Ajouter à une collection"
                    className="btn_1 rounded primary-btn  m-right"
                    id="submit-contact"
                  />
                  <input
                    type="submit"
                    value="Créer une collection"
                    className="btn_1 rounded primary-btn"
                    id="submit-contact"
                  />
                </p>
              </div>

              <div className="col-lg-12">
                <div className="d-flex flex-row flex-wrap justify-content-around">
                  <div className="card img-card">
                    <img
                      src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      alt="Avatar"
                    />
                    <div className="containere mt-3 d-flex flex-row justify-content-between">
                      <h4>
                        <b>16</b>{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-download"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke={colors.bleu_dark}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                          <polyline points="7 11 12 16 17 11" />
                          <line x1="12" y1="4" x2="12" y2="16" />
                        </svg>
                      </h4>
                      <small className="mt-2 text">TÉLÉCHARGEMENT</small>
                    </div>
                  </div>
                  <div className="card img-card">
                    <img
                      src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      alt="Avatar"
                    />
                    <div className="containere mt-3 d-flex flex-row justify-content-between">
                      <h4>
                        <b>16</b>{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-download"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke={colors.bleu_dark}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                          <polyline points="7 11 12 16 17 11" />
                          <line x1="12" y1="4" x2="12" y2="16" />
                        </svg>
                      </h4>
                      <small className="mt-2 text">TÉLÉCHARGEMENT</small>
                    </div>
                  </div>
                  <div className="card img-card">
                    <img
                      src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      alt="Avatar"
                    />
                    <div className="containere mt-3 d-flex flex-row justify-content-between">
                      <h4>
                        <b>16</b>{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-download"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke={colors.bleu_dark}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                          <polyline points="7 11 12 16 17 11" />
                          <line x1="12" y1="4" x2="12" y2="16" />
                        </svg>
                      </h4>
                      <small className="mt-2 text">TÉLÉCHARGEMENT</small>
                    </div>
                  </div>
                  <div className="card img-card">
                    <img
                      src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      alt="Avatar"
                    />
                    <div className="containere mt-3 d-flex flex-row justify-content-between">
                      <h4>
                        <b>16</b>{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-download"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke={colors.bleu_dark}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                          <polyline points="7 11 12 16 17 11" />
                          <line x1="12" y1="4" x2="12" y2="16" />
                        </svg>
                      </h4>
                      <small className="mt-2 text">TÉLÉCHARGEMENT</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{Styles}</style>
    </>
  );
};

export default DashContent;
