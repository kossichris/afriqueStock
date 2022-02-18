import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.invitation`
#additional_links a:hover{
color: ${colors.primary};
}

.conteneur{
    background: #edecec;
    text-align: center;
    padding: 0 0 35px;
    width: 60%;
    border-radius: 12px;
    margin: 0 auto
}
h5{
    font-weight: 800;
    color: ${colors.bleu_dark};

}

span{
    color: ${colors.bleu_dark};
font-size: 13px;
}

#trapezoid1 {
    border-bottom: 100px solid ${colors.blue_light_3x};
    border-left: 0px solid transparent;
    border-right: 0px solid transparent;
    height: 100;
    width: 100%;
    transform: rotate(180deg);
    border-radius: 0px 1px 13px 13px
}

#trapezoid {
    border-bottom: 100px solid ${colors.blue_light_3x};
    border-top: 0px solid transparent;
    border-left: 0px solid transparent;
    border-right: 45vw solid transparent;
    height: 100;
    width: 100%;
    transform: rotate(180deg);
}


.icon-tabler-brand-telegram{
    position: absolute;
    z-index: 20;
    right: 19%;
    top: -3%;
}
.round-container-icon{
    background: aliceblue;
    width: 7%;
    height: 80px;
    padding: 18px;
    border-radius: 40px;
    position: absolute;
    z-index: 2;
    top: 30%;
    left: 48%;
    right: 48%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;}

.round-container-icon-prime{
    background: aliceblue;
    width: 7%;
    height: 80px;
    padding: 18px;
    border-radius: 40px;
    position: absolute;
    z-index: 2;
    top: 40%;
    left: 48%;
    right: 48%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

svg{
color: #fffff
}
`