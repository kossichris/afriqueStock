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
                            <h3>Medium Section</h3>
                            <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

                            <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Morbi mattis ullamcorper velit. Pellentesque posuere. Etiam ut purus mattis mauris sodales aliquam. Praesent nec nisl a purus blandit viverra.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Pricingtable;
