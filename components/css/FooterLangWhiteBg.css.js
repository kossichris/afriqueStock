
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.footer`
#additional_links{
    flex-direction: row !important;
    justify-content: center;
    background: white
}
#additional_links a, #additional_links span {
color: ${colors.grey};
}

#additional_links a:hover{
color: ${colors.primary};
}
`