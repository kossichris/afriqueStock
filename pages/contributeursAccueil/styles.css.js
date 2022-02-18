
// styles/global.js
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.AccueilContributeurs`
.img-container{
    width: 95px;
    height: 95px;
    border-radius:80px;
    overflow: hidden
}
h3{
    color: black;
}
.title-text{
    color: #6d757c;
}
.photo_normal{
    border-radius: 95px !important;
}

.illustrations{
    width: 100%
}

p{
    font-size: 13px;
    font-weight: 400;
    color: gray;
}

.bg_color_2, .bg_color_3, .bg_color_5{
    background: #80808029;
    color: black;
}

.main_title_2{
    text-align: left
}
.right-text{
    display: flex;
    align-items: center;
}

h4{
    font-weight: 700
}

.btn-container{
    width: 100%
}

.text-log{
    color:  ${colors.primary};
    font-weight: 700
}

`