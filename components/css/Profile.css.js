
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.offer`
.rounded-full{
 border-radius: 50%
}

.box_contacts .info{
    margin-top: -68px;
    padding-bottom: 39px;
}

.text-1, .text-2{
align-items: self-start;
width: 55%;
line-height: 45px
}

span strong{
    color: ${colors.blue_light}
}
span span{
    color: ${colors.grey}
}
.form-group{
width: 71%
}
h6{
 text-align: left
}
.box_contacts h5{
    text-align: start
}
.credit-card-img{
    width: 43px;
    position: absolute
}
.add_new_adress_line{
    color: ${colors.light_secondary};
text-align: start
}
`