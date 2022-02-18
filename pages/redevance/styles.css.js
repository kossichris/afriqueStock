
// styles/global.js
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.styles`
.title, h5 {
    color: ${colors.blue_light_3x}
}

.divider{
text-align: center;
    border: 1px solid ${colors.blue_light_3x};
    width: 100%;
}
.card-revenu{
background: ${colors.gradient_1_bg} ;
background: ${colors.gradient_1} ;
    border-radius: 13px;
    width: 45%;
    margin: auto
}
.card-revenu-1{
background: ${colors.blue} ;
    border-radius: 13px;
    width: 45%;
    margin: auto
}

.card-revenu-2{
background: ${colors.blue_light_3x} ;
    border-radius: 13px;
    width: 45%;
    margin: auto
}

.card-revenu-3{
background: ${colors.bleu_dark} ;
    border-radius: 13px;
    width: 45%;
    margin: auto
}


.revenu-block-1 h5{
    color: #ffff
}
.revenu-block-1 div{
    font-size: 11px;
    margin-left: -24%;
}
.revenu-block-1 h4{
    font-size: 32px;
    color: #ffff
}

.revenu-block-2 p{
    font-size: 11px;
    color: #ffff
}

.revenu-block-2 h4{
    color: #ffff;
}

.price{
  text-align: start;
  margin-left: 18%;
}


`