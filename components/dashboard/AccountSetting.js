import React, { useState } from "react";
import tabsStyles from "../css/DashTabs.module.scss";
import styles from "../css/AccountSetting.css";
import visa from "/public/images/visa_transparent.png";
import mc from "/public/images/master_card.png";
import ampExp from "/public/images/amExp.png";
import moov from "/public/images/moov_flooz.jpeg";
import mtn from "/public/images/MTN.jpeg";
import Image from "next/image";
import { colors } from "../../constants/colors";

const AccountSetting = () => {
  const [checked, setchecked] = useState(false);

  return (
    <>
      <div className="containeur  mt-5">
        <div className="row  mt-5">
          <div className="box_booking">
            <div className="ml-5 mt-5 light-txt">Paramètre du compte</div>

            <div className="d-flex flex-row wrap-container mt-5">
              <div className={tabsStyles.tabwrap}>
                <input
                  type="radio"
                  id="tab2"
                  name="tabGroup1"
                  className={tabsStyles.tab}
                  readOnly
                  checked
                />
                <label htmlFor="tab2">DETAILS DE MON COMPTE </label>

                <input
                  type="radio"
                  id="tab3"
                  name="tabGroup1"
                  readOnly
                  className={tabsStyles.tab}
                />
                <label htmlFor="tab3">DETAILS DE PAIEMENT</label>

                <div className={tabsStyles.tab__content}>
                  <div className="container">
                    <div className="row mt-5">
                      <div className="col-lg-3 text-center">
                        <div className="container-user">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-user"
                            width="84"
                            height="84"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke={colors.primary}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="7" r="4" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          </svg>
                        </div>
                        <div className=" mt-3">
                          <small>Ajouter une photo</small>
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <form
                          method="post"
                          action="assets/contact.php"
                          id="contactform"
                          autoComplete="off"
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="form-label">Noms</label>
                                <input
                                  className="form-input"
                                  type="text"
                                  id="name_contact"
                                  name="name_contact"
                                  placeholder="JOHN"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="form-label">Prénoms</label>
                                <input
                                  className="form-input"
                                  type="text"
                                  id="lastname_contact"
                                  name="lastname_contact"
                                  placeholder="Kater"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="form-label">
                                  Nom de votre entreprise
                                </label>
                                <input
                                  className="form-input"
                                  type="email"
                                  id="email_contact"
                                  name="email_contact"
                                  placeholder="Dieubeni"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="form-label">Pays</label>
                                <select className="form-input">
                                  <option>Hod</option>
                                  <option>Hod</option>
                                  <option>Hod</option>
                                  <option>Hod</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="form-label">Adresse 1</label>
                                <input
                                  className="form-input"
                                  type="text"
                                  id="verify_contact"
                                  name="verify_contact"
                                  placeholder="Toliam 200 Bidonvie rue  33"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="form-label">Adresse 2</label>
                                <input
                                  className="form-input"
                                  type="text"
                                  id="verify_contact"
                                  name="verify_contact"
                                  placeholder="Toliam 200 Bidonvie rue  33"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="form-label">Ville</label>
                                <input
                                  className="form-input"
                                  type="text"
                                  id="name_contact"
                                  name="name_contact"
                                  placeholder="Boliville"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="form-label">
                                  Code Postal{" "}
                                </label>
                                <input
                                  className="form-input"
                                  type="text"
                                  id="lastname_contact"
                                  name="lastname_contact"
                                  placeholder="24525"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="form-label">Téléphone</label>
                                <input
                                  className="form-input"
                                  type="email"
                                  id="email_contact"
                                  name="email_contact"
                                  placeholder="002 552 025 21"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                  className="form-input"
                                  type="email"
                                  id="email_contact"
                                  name="email_contact"
                                  placeholder="Toliam@gmail.com"
                                />
                              </div>
                            </div>
                          </div>
                          <p className="add_top_30">
                            <input
                              type="submit"
                              value="Sauvegarder"
                              className="btn_1 rounded"
                              id="submit-contact"
                            />
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={tabsStyles.tab__content}>
                  <div className="mt-5 conteneur">
                    <div className="mt-5 ml-2">
                      MasterCard est votre moyen de paiement préféré
                    </div>
                    <details className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <summary>
                        Par quel moyen de paiement souhaitez-vous êtes payés{" "}
                      </summary>
                      <div className="mt-3 d-flex flex-row radio-group ">
                        <form>
                          <fieldset>
                            <label
                              className="d-flex flex-row ml-1 mr-2"
                              htmlFor="radio-1"
                            >
                              <input
                                type="radio"
                                name="radio1"
                                id="radio-1"
                                value={checked}
                                onChange={() => setchecked(true)}
                              />
                              <div className="image-wrapper">
                                <Image
                                  src={visa}
                                  alt="Picture of the author"
                                  width={80}
                                  height={47}
                                />
                              </div>
                            </label>

                            <label
                              className="d-flex flex-row ml-1 mr-2 "
                              htmlFor="radio-2"
                            >
                              <input
                                type="radio"
                                name="radio1"
                                id="radio-2"
                                value="radio-2"
                                onChange
                              />
                              <div className="image-wrapper ">
                                <Image
                                  src={mc}
                                  alt="Picture of the author"
                                  width={70}
                                  height={40}
                                />
                              </div>
                            </label>

                            <label
                              className="d-flex flex-row ml-1 mr-2"
                              htmlFor="radio-3"
                            >
                              <input
                                type="radio"
                                name="radio1"
                                id="radio-3"
                                value="radio-3"
                                onChange
                              />
                              <div className="image-wrapper ">
                                <Image
                                  src={ampExp}
                                  alt="Picture of the author"
                                  width={70}
                                  height={36}
                                />
                              </div>
                            </label>

                            <label
                              className="d-flex flex-row ml-1 mr-2"
                              htmlFor="radio-4"
                            >
                              <input
                                type="radio"
                                name="radio1"
                                id="radio-4"
                                value="radio-4"
                                onChange
                              />
                              <div className="image-wrapper">
                                <Image
                                  src={moov}
                                  alt="Picture of the author"
                                  width={70}
                                  height={36}
                                />
                              </div>
                            </label>

                            <label
                              className="d-flex flex-row ml-1 mr-2"
                              htmlFor="radio-5"
                            >
                              <input
                                type="radio"
                                name="radio1"
                                id="radio-5"
                                value="radio-5"
                                onChange
                              />
                              <div className="image-wrapper">
                                <Image
                                  src={mtn}
                                  alt="Picture of the author"
                                  width={70}
                                  height={36}
                                />
                              </div>
                            </label>
                          </fieldset>
                        </form>
                      </div>
                    </details>

                    <div className="form-group mt-1">
                      <label className="input-label">Adresse 1</label>
                      <input
                        className="form-control mt-2"
                        onChange
                        type="text"
                        id="adresse"
                        name="adresse"
                        placeholder="Toliam 200  Bidonvie rue 33"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default AccountSetting;
