
import css from 'styled-jsx/css'
import { colors } from '../constants/colors'

export default css.auth`
h2{
color: ${colors.primary};
}
.login_link{
color: ${colors.primary};
}
::placeholder {
  color: ${colors.light};
font-size: 12px
}

.form-control{
  border: 1px solid #49b620;
background: #ffff
}
`