import React from 'react';
import styles from './css/PricingTable.module.scss'
import PricingStyles from '../components/css/PricingSubTable.module.scss'
import Tabs from './Tabs';


const Pricingtable = () => {
    return (
        <>
            <div className="container margin_60_35">
                <div className="pricing-container cd-has-margins">
                    <div className={styles.tabwrap} >

                        <input type="radio" id="tab1" name="tabGroup1" readOnly className={styles.tab} />
                        <label htmlFor="tab1">Images</label>

                        <input type="radio" id="tab2" name="tabGroup1" readOnly className={styles.tab} checked />
                        <label htmlFor="tab2">Vidéos 4K,HD,SD </label>

                        <div className={styles.tab__content}>
                            <Tabs />
                        </div>

                        <div className={styles.tab__content}>
                            <Tabs />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Pricingtable;
