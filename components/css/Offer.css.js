
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.offer`
.subtitle{
 color: #ffff;
font-weight: 300;
}
form{
    width: 70%;
}

.form-control, textarea{
    border-radius: 0px !important
}

#name_review, #email_review, #subject_review {
    background: #ffffff24;
}

::placeholder {
  color: ${colors.light};
font-size: 12px
}

.top{
margin-top: 2.0rem !important
}
`