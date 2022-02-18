import React, { useState } from 'react';
import Abonnements from '../../components/clientAccount/Abonnements';
import Detailpaiement from '../../components/clientAccount/DetailPaiement';
import Downloads from '../../components/clientAccount/Downloads';
import Equipe from '../../components/clientAccount/Equipe';
import Facture from '../../components/clientAccount/Facture';
import Favorites from '../../components/clientAccount/Favorites';
import Favoritesphotos from '../../components/clientAccount/FavoritesPhotos';
import Invitationsent from '../../components/clientAccount/InvitationSent';
import InvitationsentPrime from '../../components/clientAccount/InvitationSentPrime';
import Profile from '../../components/clientAccount/Profile';
import Searchbar from '../../components/SearchBar';
import Stickynavbar from '../../components/StickyNavbar';
import styles from '../../components/css/PricingTable.module.scss'
import PricingStyles from '../../components/css/PricingSubTable.module.scss'
import { colors } from '../../constants/colors';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter()
    const [tab1, setTab1] = useState(false);
    const [tab2, setTab2] = useState(false);
    const [tab3, setTab3] = useState(false);
    const [tab4, setTab4] = useState(false);
    const [tab5, setTab5] = useState(false);
    const [tab6, setTab6] = useState(false);
    const [tab7, setTab7] = useState(false);

    const toggleTab = (tab) => {
        router.query.name = tab
    }

    return (
        <>

            <main>
                <Stickynavbar />
                <div className="searchbar-cont mt-5">
                    <Searchbar />
                </div>

                <div className={styles.tabwrap + " " + "mt-5 mb-5   "} >

                    <input type="radio" id="tab1" name="tabGroup1" onChange={() => toggleTab("PROFILE")} className={styles.tab} checked={router.query.name === "PROFILE" ? true : false} />
                    <label htmlFor="tab1"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-check" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke={colors.primary} fill="none" strokewinecap="round" strokewinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        <path d="M16 11l2 2l4 -4" />
                    </svg>
                        <span className="ml-1">Profil</span> </label>

                    <input type="radio" id="tab2" name="tabGroup2" onChange={() => toggleTab("DOWNLOAD")} className={styles.tab} checked={router.query.name === "DOWNLOAD" ? true : false} />
                    <label htmlFor="tab2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-download" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke={colors.primary} fill="none" strokewinecap="round" strokewinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" />
                            <line x1="12" y1="13" x2="12" y2="22" />
                            <polyline points="9 19 12 22 15 19" />
                        </svg>
                        <span className="ml-1">Téléchargements </span></label>

                    <input type="radio" id="tab3" name="tabGroup3" onChange={() => toggleTab("FAVORITE")} className={styles.tab} checked={router.query.name === "FAVORITE" ? true : false} />
                    <label htmlFor="tab3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke={colors.primary} fill="none" strokewinecap="round" strokewinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                        </svg>
                        <span className="ml-1">Favoris </span>
                    </label>

                    <input type="radio" id="tab4" name="tabGroup4" onChange={() => toggleTab("FACTURE")} className={styles.tab} checked={router.query.name === "FACTURE" ? true : false} />
                    <label htmlFor="tab4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-invoice" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke={colors.primary} fill="none" strokewinecap="round" strokewinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <line x1="9" y1="7" x2="10" y2="7" />
                            <line x1="9" y1="13" x2="15" y2="13" />
                            <line x1="13" y1="17" x2="15" y2="17" />
                        </svg>
                        <span className="ml-1">Factures</span>
                    </label>

                    <input type="radio" id="tab5" name="tabGroup5" onChange={() => toggleTab("FORMULE")} className={styles.tab} checked={router.query.name === "FORMULE" ? true : false} />
                    <label htmlFor="tab5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tablerWist-check" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke={colors.primary} fill="none" strokewinecap="round" strokewinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
                            <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
                            <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
                            <line x1="11" y1="6" x2="20" y2="6" />
                            <line x1="11" y1="12" x2="20" y2="12" />
                            <line x1="11" y1="18" x2="20" y2="18" />
                        </svg>
                        <span className="ml-1">Formules d'abonnements </span>
                    </label>

                    <input type="radio" id="tab6" name="tabGroup6" onChange={() => toggleTab("PAYMENT")} className={styles.tab} checked={router.query.name === "PAYMENT" ? true : false} />
                    <label htmlFor="tab6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke={colors.primary} fill="none" strokewinecap="round" strokewinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="6" cy="19" r="2" />
                            <circle cx="17" cy="19" r="2" />
                            <path d="M17 17h-11v-14h-2" />
                            <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                        <span className="ml-1">Détails de paiement</span>
                    </label>

                    <input type="radio" id="tab7" name="tabGroup7" onChange={() => toggleTab("TEAM")} className={styles.tab} checked={router.query.name === "TEAM" ? true : false} />
                    <label htmlFor="tab7">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke={colors.primary} fill="none" strokewinecap="round" strokewinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                        </svg>
                        <span className="ml-1">Mon équipe </span>
                    </label>


                    <div className={styles.tab__content} style={{ backgroundColor: "#dadff152" }}>
                        <Profile />
                    </div>

                    <div className={styles.tab__content}>
                        <Downloads />
                    </div>
                    <div className={styles.tab__content}>
                        <Favorites />
                    </div>
                    <div className={styles.tab__content}>
                        <Facture />
                    </div>
                    <div className={styles.tab__content}>
                        <Abonnements />
                    </div>
                    <div className={styles.tab__content}>
                        <Detailpaiement />
                    </div>
                    <div className={styles.tab__content}>
                        <Equipe />
                    </div>

                </div>

            </main>
            <div className="footer-wrapper">
                <Footer />
            </div>

            {/*<Invitationsent />*/}
            {/*<InvitationsentPrime />*/}
            {/*<Canceling />*/}
            {/*<Favoritesphotos />*/}
        </>


    );
}

export default Index;
