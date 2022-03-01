import React from 'react'
import Styles from '../../ComponentsStyled/historicPayement.css'


const HistoricPayment = () =>{
  return (
      <div>
          <div className="container mt-5">
                <div className="row  mt-5" >
                    <div className="col-xl-12 col-lg-12 pl-xl-5">
                        <h5 className="text-center  mt-5">
                        Historique des paiements
                        </h5>
                    </div>
                    <div className="table-wrapper mt-5 mb-5">
                        <table className="fl-table">
                            <thead>
                                <tr>
                                    <th>DATE</th>
                                    <th>METHODES DE PAIEMENT </th>
                                    <th>MONTANT</th>
                                    <th>STATUTS DE PAIEMENT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>20-10-2022</td>
                                    <td>MOBILE MONEY</td>
                                    <td>254$</td>
                                    <td>PAYÉ</td>
                                </tr>
                                <tr>
                                    <td>20-10-2022</td>
                                    <td>MOBILE MONEY</td>
                                    <td>254$</td>
                                    <td>PAYÉ</td>
                              </tr>
                              <tr>
                                    <td>20-10-2022</td>
                                    <td>MOBILE MONEY</td>
                                    <td>254$</td>
                                    <td>PAYÉ</td>
                              </tr>
                              <tr>
                                    <td>20-10-2022</td>
                                    <td>MOBILE MONEY</td>
                                    <td>254$</td>
                                    <td>PAYÉ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
         
          <style jsx>
                {Styles}
            </style>
    </div>
  )
}
export default HistoricPayment;
