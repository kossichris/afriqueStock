
import css from 'styled-jsx/css'
import { colors } from '../constants/colors'

export default css.styles`
.sticky_header{
    height: auto;
    background-color: #ffff;
}
.sticky_header h5{
    font-weight: 300;
}
.booking_buttons div {
    font-size: 10px;
}

.block-1{
    height: 128px;
}

.container-dte{
    height: 110px;
    padding: 19px;
}

.container_radios{
    padding: 5px;
    margin-left: 31px;
    margin-top: 6px;
}

.bottom-text{
    color: ${colors.blue_light_3x}
}
`