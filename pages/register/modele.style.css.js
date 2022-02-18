
// styles/global.js
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.modele`
.title{
 color: ${colors.blue_light};
}

input, select{
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0
}
.text-area{
    border-top: none;
    border-left: none;
    border-right: none;
}

.btn_home_align{
    padding: 44px;
    background: #f7f7f7;
    border-radius: 5px;
    border: 1px solid #c7c7c7;
    text-align: center
}
.rounded-btn{
    background: ${colors.blue_light};
    padding: 12px;
    border-radius: 57%;
    margin: auto;
    cursor: pointer
}
.btn_home_align div{
    font-size: 13px;
    color: #767070;
}


.border_radius_40{
        border-radius: 0px;
        background: ${colors.bleu_dark};

}

.bottom_bar{
    position: absolute;
    bottom: 0;
    width: 100%;
}

`