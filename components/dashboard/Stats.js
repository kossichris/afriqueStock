import React from "react";
import Styles from "../../components/css/Stats.css";

const Stats = () => {
  return (
    <>
      <div className="containeur margin_60_35 mt-5">
        <div className="box_booking">
          <div className="colLg-12">
            <h1>
              1200,1 <span>$</span>
            </h1>
          </div>

          <div className="mt-5">
            <div className="text mb-3">Statistique générale</div>
            <div className="gray-block ">
              <div className="block-1">
                <span>TYPE DE CONTENUE</span>

                <div>
                  <select className="mobile-select-type mt-2">
                    <option>Tous</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                  </select>
                </div>
              </div>
              <div className="block-2">
                <span>TYPE DE DONNEES</span>
                <div>
                  <select className="mobile-select-type mt-2">
                    <option>Les plus téléchargés</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                  </select>
                </div>
              </div>
              <div className="block-3">
                <span>PÉRIODE DU</span>
                <div className="d-flex flex-row justify-content-between select-container">
                  <select className="mobile-select-type day-select mt-2">
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                  </select>
                  <select className="mobile-select-type month-select mt-2">
                    <option>Mars</option>
                    <option>Mai</option>
                    <option>Avril</option>
                    <option>Juin</option>
                  </select>
                  <select className="mobile-select-type year-select mt-2">
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                  </select>
                </div>
                <span>AU</span>
                <div className="d-flex flex-row justify-content-between select-container">
                  <select className="mobile-select-type day-select mt-2">
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                  </select>
                  <select className="mobile-select-type month-select mt-2">
                    <option>Mars</option>
                    <option>Mai</option>
                    <option>Avril</option>
                    <option>Juin</option>
                  </select>
                  <select className="mobile-select-type year-select mt-2">
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                  </select>
                </div>
              </div>
              <div className="block-4">
                <span>Meilleure vente</span>
              </div>
              <div className="block-5 d-flex flex-column">
                <span>Historique des versements</span>
                <input
                  type="submit"
                  value="Voir les statistiques"
                  className="btn_1 right-btn mt-2"
                  id="submit-review"
                />
              </div>
            </div>
            <div className="table-block">
              <div className="tableWrapper mt-5 mb-5">
                <table className="fl-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>CONTENUES EN MINIATURE </th>
                      <th>DATE DE TÉLÉCHARGEMENT</th>
                      <th>MODE DE VENTE</th>
                      <th>REVENU GÉNÉRÉ</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20102022</td>
                      <td>John Jubelin</td>
                      <td>26</td>
                      <td>15/08/2022</td>
                      <td>8</td>
                      <td>
                        <a className="btn_1 download-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-download"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#fff"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                            <polyline points="7 11 12 16 17 11" />
                            <line x1="12" y1="4" x2="12" y2="16" />
                          </svg>
                        </a>
                      </td>
                      <td>
                        <div className="d-flex flex-column align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-eye"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="12" r="2" />
                            <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                          </svg>
                          <small>10k vues</small>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bottom-table">
              <div className="table-block">
                <div className="tableWrapper mt-5 mb-5">
                  <table className="fl-table fl-table-bottom ">
                    <thead>
                      <tr>
                        <th>COMPANY</th>
                        <th>DATE </th>
                        <th>SALES COUNT</th>
                        <th>EARNINGS</th>
                        <th>TAX WIDTH</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Carasco Petrolum, Inc</td>
                        <td>12 Jan 2019</td>
                        <td>41</td>
                        <td>$752.14</td>
                        <td>$12.14</td>
                      </tr>
                      <tr>
                        <td>Warah, Ltd</td>
                        <td>12 Jan 2019</td>
                        <td>41</td>
                        <td>$752.14</td>
                        <td>$12.14</td>
                      </tr>
                      <tr>
                        <td>Demon industries</td>
                        <td>12 Jan 2019</td>
                        <td>41</td>
                        <td>$752.14</td>
                        <td>$12.14</td>
                      </tr>
                      <tr>
                        <td>Ascorp industries</td>
                        <td>12 Jan 2019</td>
                        <td>41</td>
                        <td>$752.14</td>
                        <td>$12.14</td>
                      </tr>
                    </tbody>
                  </table>
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

export default Stats;
