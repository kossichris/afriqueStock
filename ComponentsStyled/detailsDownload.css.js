
import css from 'styled-jsx/css'
import { colors } from '../constants/colors'

export default css.styles`

.title{
    color: ${colors.blue_light}
}

.table{
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.table span{
    width: 40%
}
.table_header{
    background:  ${colors.primary};
    padding: 6px;
    color: white
}
.table_header_title{
  background:  ${colors.blue_light_2x};
    padding: 6px;
    max-width: 80.7%;
    width: 80.7%;
}
.date{
    color:  ${colors.blue_light_3x}
}
.date-exp{
    background: ${colors.blue_light_3x};
    padding: 5px 10px 5px 10px;
    color: white
}
span span{
    color: ${colors.primary}
}
.table_header_body{
  background: #ffffff;
    padding: 6px;
    margin-top: -15px;
    max-width: 80.7%;
    width: 80.7%;
    border-bottom: 1px solid #aeb2b5;
}
.bottom_txt{
    width: 100%;
    text-align: center;
    color: red;
font-size: 10px
}
form{
    width: 87%;
}
fieldset{
    margin-top: 14px;
}
input{
width: 100%

}
section{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 67%;
}
label{
    font-size: 12px
}
`