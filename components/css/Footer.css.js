
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.styles`

footer ul li .rs{
    background: white;
    border-radius: 40px;
    padding: 4px;
}

.contact_ass{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: end;
}

.btn{
    background:  ${colors.yellow}
}
.btn:hover{
    background: white
}

details{
    color: white
}


`