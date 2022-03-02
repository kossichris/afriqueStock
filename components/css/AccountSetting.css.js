import css from "styled-jsx/css";
import { colors } from "../../constants/colors";
import { imagesUrl } from "../../constants/images";

export default css.account`
.box_booking{
    width: 76%;
    margin: auto;
}

.light-txt{
    font-weight: 300
}

.form-label{
    font-size: 20px;
    color: #505050;
}
select{
    background: white;
}
.container-user{
    width: 140px;
    background: white;
    height: 140px;
    padding: 11%;
    border-radius: 50%;
    border: 1px solid gray;
    margin: auto;
}
div small {
    width: 100%;
    text-align: center;
    font-weight: 200;
}

.form-input{
    border-radius: 0px;
    height: 60px;
    font-size: 19px !important;
    font-weight: 200;
    padding: 24px;
    border-radius: 0;
    border: 1px solid #d2d8dd;
    color: ${colors.grey_dark}
}
.conteneur{
    margin: auto;
    width: 73%;
    line-height: 3em;
    color: #645959;
}

.form-control, .form-group{
    width: 100%;
    height: 123px;
    border-radius: 0;
    margin: auto;
    float: left;

}

.form-group{
    width: 100%;
    display: flex;
    flex-direction: column !important;
}

.rounded{
    background: ${colors.blue_light_3x};
    color: white;
    background: #4A4AAE;
    color: white;
    height: 48px;
    float: right;
}

.input-label{
    width: 100%;
    margin: auto;
}
form{
    width: 100%;
}
fieldset label{
    width: 100%;
}

fieldset {
    display: grid; 
 
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    
    gap: 0px;
    height: 100%;
    
 }

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 350px) {
    fieldset {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        gap: 0px;
        height: 100%;
        width: 15rem !important;
        margin-top: 2em !important;
     }
  
     .image-wrapper{
        width: 48px;
        height: 74px;
     }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {
    fieldset {
        display: grid; 
     
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr ;
        
        gap: 0px;
        height: 100%;
        width: 22rem;
        margin-top: 3em;
        
     }
     .image-wrapper{
        width: 48px;
        height: 74px;
     }

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 992px) {
    .input-label{
        width: 100%;
        text-align: center
    }
    .form-control{
        width: 100%

    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
.container{
margin-bottom: 0%;
}

}
`;
