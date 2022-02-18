
import css from 'styled-jsx/css'
import { colors } from '../constants/colors'

export default css.styles`
.img-container{
    width: 95px;
    height: 95px;
    border-radius:80px;
    overflow: hidden
}
h3{
    color: ${colors.blue_light_3x};
}
.photo_normal{
    border-radius: 95px !important;
}
`