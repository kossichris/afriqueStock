import React, { useState } from "react";
import { colors } from "../../constants/colors";
import Styles from "../css/GestionContenu.css";
import tabsStyles from "../css/DashTabs.module.scss";
import Image from "next/image";
import photo from "/public/images/access_bg.jpg";
import Listimggrid from "../ListImgGrid";

const GestionContenu = () => {
  const [tab, setTab] = useState("DRAFT");

  const onTabChange = (e) => {
    console.log(e.target.value);
    setTab(e.target.value);
  };
  return (
    <>
      <div className="containeur margin_60_35 mt-5">
        <div className="row  mt-5">
          <div className="box_booking">
            <div className="box_detail booking ">
              <div className="price d-flex flex-row">
                <span>
                  Gérez les contenus <small></small>
                </span>
                <div className="score">
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-check"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke={colors.dash_blue}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <div className="small-txt">Tous sélectionner</div>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-trash"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke={colors.dash_blue}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                    <div className="small-txt">Supprimer</div>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-device-floppy"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke={colors.dash_blue}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                      <circle cx="12" cy="14" r="2" />
                      <polyline points="14 4 14 8 8 8 8 4" />
                    </svg>
                    <div className="small-txt">Enregistrer</div>
                  </span>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row wrap-container">
              <div className={tabsStyles.tabwrap}>
                <input
                  type="radio"
                  id="tab1"
                  name="tabGroup1"
                  value={"DRAFT"}
                  onChange={(e) => onTabChange(e)}
                  className={tabsStyles.tab}
                  checked={tab === "DRAFT"}
                />
                <label htmlFor="tab1">
                  Brouillon <span className="badge badge-light">9</span>
                </label>

                <input
                  type="radio"
                  id="tab2"
                  name="tabGroup1"
                  value={"PENDING"}
                  onChange={(e) => onTabChange(e)}
                  className={tabsStyles.tab}
                  checked={tab === "PENDING"}
                />
                <label htmlFor="tab2">
                  En attente de validation{" "}
                  <span className="badge badge-light">19</span>
                </label>

                <input
                  type="radio"
                  id="tab3"
                  name="tabGroup1"
                  value={"REJECT"}
                  onChange={(e) => onTabChange(e)}
                  className={tabsStyles.tab}
                  checked={tab === "REJECT"}
                />
                <label htmlFor="tab3">
                  Rejeté <span className="badge badge-light">3</span>
                </label>

                <div className={tabsStyles.tab__content}></div>

                <div className={tabsStyles.tab__content}></div>

                <div className={tabsStyles.tab__content}></div>
              </div>
              {tab === "DRAFT" && (
                <>
                  {" "}
                  <div className="box_booking mt-4 block-2">
                    <div className=" row flex-wrap ">
                      <div className="col-lg-6 col-sm-12 col-md-12 col-xs-12">
                        Description
                        <div className="form-group mb-1">
                          <input
                            type="text"
                            className="form-control input-block-2"
                            placeholder="Femme Médécin"
                            name="email"
                            id="email"
                          />
                          <input
                            type="text"
                            className="form-control input-block-2"
                            placeholder="Mots clés"
                            name="email"
                            id="email"
                          />
                        </div>
                        <div className="mt-3">
                          <div className="chip">
                            <div className="chip-content">Nature</div>
                            <div className="chip-close">
                              <svg
                                className="chip-svg"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="chip">
                            <div className="chip-content">Nature</div>
                            <div className="chip-close">
                              <svg
                                className="chip-svg"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="chip">
                            <div className="chip-content">Nature</div>
                            <div className="chip-close">
                              <svg
                                className="chip-svg"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="chip">
                            <div className="chip-content">Nature</div>
                            <div className="chip-close">
                              <svg
                                className="chip-svg"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="chip">
                            <div className="chip-content">Nature</div>
                            <div className="chip-close">
                              <svg
                                className="chip-svg"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="chip">
                            <div className="chip-content">Nature</div>
                            <div className="chip-close">
                              <svg
                                className="chip-svg"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="chip">
                            <div className="chip-content">Nature</div>
                            <div className="chip-close">
                              <svg
                                className="chip-svg"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <strong>
                            {" "}
                            <small> 20 mots clés minimum</small>{" "}
                          </strong>
                        </div>
                        <div className="form-group mt-5">
                          <input
                            type="email"
                            name="email_review"
                            id="email_review"
                            className="form-control add-key"
                          />
                          <input
                            type="submit"
                            value="Ajouter d'autres clés"
                            className="btn_1 right-btn mt-2"
                            id="submit-review"
                          />
                        </div>
                        <div className="form-group mt-5 mb-3">
                          <input
                            type="text"
                            name="email_newsletter"
                            id="email_newsletter"
                            className="form-control  input-block-2"
                            placeholder="Suggestions de mots clés"
                          />

                          <div></div>
                          <div className="mt-3">
                            <div className="chip">
                              <div className="chip-content">Nature</div>
                              <div className="chip-close">
                                <svg
                                  className="chip-svg"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                                </svg>
                              </div>
                            </div>
                            <div className="chip">
                              <div className="chip-content">Nature</div>
                              <div className="chip-close">
                                <svg
                                  className="chip-svg"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                                </svg>
                              </div>
                            </div>
                            <div className="chip">
                              <div className="chip-content">Nature</div>
                              <div className="chip-close">
                                <svg
                                  className="chip-svg"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                                </svg>
                              </div>
                            </div>
                            <div className="chip">
                              <div className="chip-content">Nature</div>
                              <div className="chip-close">
                                <svg
                                  className="chip-svg"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                                </svg>
                              </div>
                            </div>
                            <div className="chip">
                              <div className="chip-content">Nature</div>
                              <div className="chip-close">
                                <svg
                                  className="chip-svg"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                                </svg>
                              </div>
                            </div>
                            <div className="chip">
                              <div className="chip-content">Nature</div>
                              <div className="chip-close">
                                <svg
                                  className="chip-svg"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                                </svg>
                              </div>
                            </div>
                            <div className="chip">
                              <div className="chip-content">Nature</div>
                              <div className="chip-close">
                                <svg
                                  className="chip-svg"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <strong className="mt-5">
                            {" "}
                            <small>
                              {" "}
                              Cliquez sur les mots clés pour ajouter
                            </small>{" "}
                          </strong>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12 col-md-12 col-xs-12">
                        <div className=" d-flex flex-row align-item-center">
                          <span className="circle-image">
                            <img
                              src="https://images.unsplash.com/photo-1548407260-da850faa41e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                              alt="cool"
                            />
                          </span>
                          <div className="ml-4 mt-4">
                            <small className="code-txt"> 129384WF </small>
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="txt-block-2">
                            <small>
                              {" "}
                              <strong> Type de contenu </strong>{" "}
                            </small>
                          </div>
                          <input
                            type="submit"
                            value="Photo"
                            className="btn_1 btn-select mt-2"
                            id="submit-review"
                          />
                          <input
                            type="submit"
                            value="Illustration"
                            className="btn_1 btn-select btn-s-2 mt-2"
                            id="submit-review"
                          />
                          <input
                            type="submit"
                            value="Video"
                            className="btn_1 btn-select btn-s-2 mt-2"
                            id="submit-review"
                          />
                        </div>

                        <div className="mt-2">
                          <div className="txt-block-2">
                            <small>
                              {" "}
                              <strong> Type d'illustration </strong>{" "}
                            </small>
                          </div>
                          <div>
                            <input
                              type="submit"
                              value="Commercial"
                              className="btn_1 btn-select btn-s-2 mt-2"
                              id="submit-review"
                            />
                            <input
                              type="submit"
                              value="Editorial"
                              className="btn_1 btn-select mt-2"
                              id="submit-review"
                            />
                          </div>
                        </div>

                        <div className="form-group txt-block-2 mt-3 mb-3">
                          <small>
                            {" "}
                            <strong> Catégorie 1 </strong>{" "}
                          </small>

                          <div>
                            <select className="mobile-select">
                              <option>Santé</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                              <option>Option 4</option>
                              <option>Option 5</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group txt-block-2 mt-3 mb-3">
                          <small>
                            {" "}
                            <strong> Catégorie 2 </strong>{" "}
                          </small>

                          <div>
                            <select className="mobile-select">
                              <option>Médécine</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                              <option>Option 4</option>
                              <option>Option 5</option>
                            </select>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="txt-block-2">
                            <small>
                              {" "}
                              <strong>
                                {" "}
                                Ce contenu contient t'il des personnes ou des
                                biens ?
                              </strong>{" "}
                            </small>
                          </div>
                          <div>
                            <input
                              type="submit"
                              value="Oui"
                              className="btn_1 btn-select confirm mt-2"
                              id="submit-review"
                            />
                            <input
                              type="submit"
                              value="Non"
                              className="btn_1 btn-select confirm mt-2"
                              id="submit-review"
                            />
                          </div>
                        </div>
                        <div className="txt-block-2 mt-3 mb-3">
                          <small>
                            {" "}
                            <strong className="strong-red">
                              {" "}
                              L'autorisation de droit à l'image du (des)
                              modèle(s) identifié est obligatoire pour continuer
                            </strong>{" "}
                          </small>
                        </div>

                        <small className="mt-5">
                          <p>
                            Voulez-vous en savoir plus ? Consultez la page{" "}
                            <a>Conditions d'utilisation </a> session
                            contributeur pour comprendre le rôle des
                            autorisations de droit à l'image et comment les
                            utiliser{" "}
                          </p>
                        </small>

                        <div className="gray-block">
                          <strong>Autorisations signé en papier</strong>
                          <ul>
                            <li>
                              <span>
                                {" "}
                                Rechercher et associer une autorisation
                                existante
                              </span>
                            </li>
                            <li>
                              Joindre une autorisation depuis votre ordinateur
                            </li>
                            <li>Téléchargez un formulaire d'autorisation</li>
                          </ul>
                        </div>
                        <div className="mt-5">
                          <h5>
                            <strong>LOCALISATION</strong>{" "}
                            <small>
                              {" "}
                              * (Dans quel pays elle a été prise ?)
                            </small>{" "}
                          </h5>
                          <div className="gray-block">
                            <span className="d-flex flex-row justify-content-between">
                              <div className="d-flex flex-column mobile-sel-container">
                                <label>Pays</label>
                                <select className="mobile-selector">
                                  <option>Santé</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                  <option>Option 4</option>
                                  <option>Option 5</option>
                                </select>
                              </div>
                              <div className="d-flex flex-column mobile-sel-container">
                                <label>Capitale</label>
                                <select className="mobile-selector">
                                  <option>Santé</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                  <option>Option 4</option>
                                  <option>Option 5</option>
                                </select>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <input
                      type="submit"
                      value="Enregistrer le brouillon"
                      className="btn_1 draft-btn mt-4"
                      id="submit-review"
                    />
                    <input
                      type="submit"
                      value="Soumettre pour examen"
                      className="btn_1 submit-btn mt-3"
                      id="submit-review"
                    />
                  </div>
                </>
              )}
              {tab === "REJECT" && (
                <>
                  {" "}
                  <div className="box_booking mt-4 block-2 reject-block">
                    <div>
                      <small>
                        {" "}
                        <strong>Envoyé il y a 17 jours</strong>{" "}
                      </small>
                      <p className="mt-4">
                        Jeune fille africaine joyeuse à la plage en tenue
                        traditionnelle
                      </p>
                      <input
                        type="submit"
                        value="REFUS LIE À LA PROPRIÉTÉ INTELLECTUELLE"
                        className="btn_1 reject-btn mt-3"
                        id="submit-review"
                      />
                      <p className="mt-4">Merci d'avoir proposé cette image</p>
                      <p className="mt-4">
                        En examinant votre fichier , nous avons constaté qu'il
                        contient certains éléments protégés par la législation
                        sur la propriété intellectuelle ; nous ne pouvons donc
                        pas l'accepter dans notre collection. Il est possible
                        que des éléments protégés par la propriété
                        intellectuelle apparaissent dans l'image, la
                        description, le titre et/ou les mots-clés.
                      </p>
                      <p className="mt-4">
                        Pour en savoir plus sur les raisons qui nous poussent à
                        refuser certaines images, notamment les problèmes
                        techniques, Consultez cette page :
                        https://www.afriquestock.com/contributeur-help
                      </p>
                      <p className="mt-4">ID de fichier : 4201923300</p>

                      <p className="mt-4">
                        Nom d'origine : blurred-library-bookselevs.jpg
                      </p>
                      <span>
                        <div className="d-flex flex-row flex-wrap">
                          <input
                            type="submit"
                            value="Modifier et renvoyer"
                            className="btn_1 edit-btn mt-2"
                            id="submit-review"
                          />
                          <input
                            type="submit"
                            value="Supprimer le fichier"
                            className="btn_1 delete-btn mt-2"
                            id="submit-review"
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                </>
              )}

              {tab === "PENDING" && (
                <>
                  {" "}
                  <div className="box_booking mt-4 block-2 reject-block">
                    <div className="text-cont">
                      <small>
                        {" "}
                        <strong>INFORMATION SUR LE CONTENU</strong>{" "}
                      </small>
                      <div>
                        <small>Envoyé il y a 19heures</small>
                      </div>
                      <p className="mt-4">
                        <strong> Type de support : </strong>
                        <span>Photos</span>
                      </p>
                      <p className="mt-4">
                        <strong> Titre : </strong>
                        <span>Design Coffee Shop</span>
                      </p>
                      <p className="mt-4">
                        <strong> Langues des mots clés : </strong>
                        <span>Français</span>
                      </p>
                      <p className="mt-4">
                        <strong> Mots clés : </strong>
                        <span>
                          3d rendering, mockups, poster, canvas , frame, Coffee
                          Shop, bar , restaurant, local, interior Design
                        </span>
                      </p>
                      <p className="mt-4">
                        <strong> Catégorie : </strong>
                        <span>Batiments & architecture</span>
                      </p>

                      <p className="mt-4">
                        Autorisations de droit à l'image : assagba-monica.pdf
                      </p>

                      <p className="mt-4">
                        <strong> ID de fichier :</strong> 4201923300
                      </p>

                      <p className="mt-4">
                        <strong> Nom d'origine :</strong>{" "}
                        blurred-library-bookselevs.jpg
                      </p>
                      <span>
                        <div className="d-flex flex-row flex-wrap">
                          <input
                            type="submit"
                            value="Supprimer le fichier"
                            className="btn_1 delete-btn mt-2"
                            id="submit-review"
                          />
                          <input
                            type="submit"
                            value="Modifier"
                            className="btn_1 delete-btn mt-2"
                            id="submit-review"
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{Styles}</style>
    </>
  );
};

export default GestionContenu;
