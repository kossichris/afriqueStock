import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.lig`
.grid-container {
   display: grid; 
   grid-template-rows: 1fr 1fr;
   grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    height: 100%;
    grid-row-gap: 1px;

}
.clock-icon{
     position: relative;
    left: 3%;
    bottom: 16%;
    box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 10%);
    background: #f0f8ffd6;
    border-radius: 7px;
    padding: 5px;
    font-weight: 300;
}

.image-container{
    width: 100%
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 1000px) {
.clock-icon{
    left: 5%;
    bottom: 24%;
}

}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

.grid-container {
   display: grid; 
   grid-template-rows: 1fr 1fr 1fr;
   grid-template-columns: 1fr 1fr;
    gap: 24px;
    height: 100%;
    grid-row-gap: 1px;

}


}
`