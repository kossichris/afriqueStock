import React from 'react';
import Button from '../../components/Button';
import Footercopyrightwhitebg from '../../components/FooterCopyrightWhiteBg';
import Stickywhitenavbar from '../../components/StickyWhiteNavbar';
import { colors } from '../../constants/colors';
import loginStyles from './style.css'

const Index = () => {
    return (
        <>
            <Stickywhitenavbar />
            <div id="login_bg"><div id="login">
                <aside>

                    <form>
                        <h2 style={{ fontWeight: "700" }}> Connectez-vous </h2>
                        <div className="divider"><span></span></div>
                        <small className="form-sm-title mb-4"> <small> Vous n'avez pas de compte?  </small><a className="login_link" href="">Inscrivez-vous maintenant</a> </small>
                        <div className="form-group mt-3">
                            <input type="email" className="form-control" readOnly placeholder="Email adress" style={{ borderRadius: "30px" }} name="email" id="email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" readOnly placeholder="Password" style={{ borderRadius: "30px" }} name="password" id="password" value="" />
                        </div>
                        <div className="clearfix add_bottom_30">

                        </div>
                        <div className="btn_auth mb-3">
                            <Button text="Connexion" color="#ffff" bgColor={colors.primary} shape="round" width="100%" />

                        </div>
                        <div className="float-right mt-1"><a id="forgot" href="javascript:void(0);">Mot de passe oublié?</a></div>

                    </form>
                </aside>
            </div>
                <style jsx>
                    {loginStyles}
                </style>
            </div>
            <Footercopyrightwhitebg />
        </>
    );
}

export default Index;
