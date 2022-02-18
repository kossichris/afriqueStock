import React from 'react';
import { colors } from '../../constants/colors';
import Button from '../Button';
import Buttonsmall from '../ButtonSmall';
import downloadStyles from '../css/Download.css'

const Downloads = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 pl-xl-5">
                        <h5 className="text-center mt-4 mb-4">
                            Mes téléchargements
                        </h5>
                    </div>
                    <div className="table-wrapper mb-5">
                        <table className="fl-table">
                            <thead>
                                <tr>
                                    <th>APERCU</th>
                                    <th>ID </th>
                                    <th>DATE DE TELECHARGEMENT</th>
                                    <th>DESCRIPTION</th>
                                    <th>AUTEUR</th>
                                    <th>TYPE DE CONTENU</th>
                                    <th>LICENCE</th>
                                    <th>CONTENU</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Image here</td>
                                    <td>ID: AFE2398</td>
                                    <td>22/06/2021 08:40</td>
                                    <td>Jeune médécin africain</td>
                                    <td>@DieuBeni</td>
                                    <td>Photo</td>

                                    <td> <Button text="Téléchargez la licence" hasIcon={true} iconName="cloud-download" iconColor="white" color="white" bgColor={colors.grey_odd} /> </td>
                                    <td>  <Button text="ReTéléchargez" color="white" hasIcon={true} iconName="cloud-download" iconColor="white" bgColor={colors.primary} /></td>
                                </tr>

                                <tr>
                                    <td>Image here</td>
                                    <td>ID: AFE2398</td>
                                    <td>22/06/2021 08:40</td>
                                    <td>Jeune médécin africain</td>
                                    <td>@DieuBeni</td>
                                    <td>Photo</td>

                                    <td> <Button text="Téléchargez la licence" hasIcon={true} iconName="cloud-download" iconColor="white" color="white" bgColor={colors.grey_odd} /> </td>
                                    <td>  <Button text="ReTéléchargez" color="white" hasIcon={true} iconName="cloud-download" iconColor="white" bgColor={colors.primary} /></td>
                                </tr>
                                <tr>
                                    <td>Image here</td>
                                    <td>ID: AFE2398</td>
                                    <td>22/06/2021 08:40</td>
                                    <td>Jeune médécin africain</td>
                                    <td>@DieuBeni</td>
                                    <td>Photo</td>

                                    <td> <Button text="Téléchargez la licence" hasIcon={true} iconName="cloud-download" iconColor="white" color="white" bgColor={colors.grey_odd} /> </td>
                                    <td>  <Button text="ReTéléchargez" color="white" hasIcon={true} iconName="cloud-download" iconColor="white" bgColor={colors.primary} /></td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <style jsx>
                {downloadStyles}
            </style>
        </>
    );
}

export default Downloads;
