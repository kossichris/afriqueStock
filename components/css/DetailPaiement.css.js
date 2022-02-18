
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.detailPaiement`
.grey_container{
   background: ${colors.grey_light};
    margin: auto;
}

.add_container{
display: flex;
    flex-direction: column;
    justify-content: center;
}
.payment_container{
    width: 100%;
    padding: 19px;
}

.pricing_wrapper{
     padding: 40px;
}

.pricing-list{
    background:  ${colors.blue_light};
    color: white;
    padding: 39px;
}

.mode_pay_container{
    width: 100%;
    padding: 17px;
    border: 1px solid ${colors.grey_dark};
    border-radius: 11px;
    background: aliceblue;
}

.update_btn{
    margin-top: 0px
}
.lastname_contact{
    width: 48%
}
textarea{
    border: 1px solid #d5d9db;
    height: 150px;
    width: 50%
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .lastname_contact{
    width: 100%
}

.update_btn{
    margin-top: 12px;
    width: 100%
}
.update_btn_2{
   margin: auto;
}
.message_contact{
    width: 100%
}
textarea{
    border: 1px solid #d5d9db;
    width: 100%

}

.add_large_button{
    padding: 66px;
}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
`