
// styles/global.js
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.style`

.badge{
    background: #49b620;
    border-radius: 40px;
    padding: 4px;
    margin: 5px;
    color: white;
}
.stickynav-font .infos li a{
 color: black !important
}

small{
    color: grey
}

ul .last-li{
    background: ${colors.primary};
}

`