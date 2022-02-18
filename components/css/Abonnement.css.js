
// styles/global.js
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.abonnement`
.subscribe{
font-weight: 300;
    font-size: 12px;

}
.description{
    width: 34%;
    margin-left: 19px;
    margin-right: 24px;
}

.conteneur{
    padding: 17px;
    background: ${colors.grey_light};
    border-radius: 0px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.subscribe span{
    color: ${colors.primary};
    font-weight: 600
}
`