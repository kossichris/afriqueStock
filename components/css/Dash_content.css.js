import css from "styled-jsx/css";
import { colors } from "../../constants/colors";

export default css.dash_content`

.containeur
{
    max-width: 93%;
    margin: auto
} 

.block-right{
    width: 100%;
    margin: auto;
}

.cont-s
{
    max-width: 95%;
    margin: auto
} 

.cont{
    max-width: 100%
}

.box_booking{
    padding: 1%;
    border-bottom: 1px solid ${colors.blue};
    margin-bottom: 0
}

.collection-btn{
    color: white;
    font-size: 12px;
    padding-left: 12px;
    padding-right: 12px;
    
}

.price-container small{
    color: ${colors.grey};
    font-size: 10px;
    margin: 22px;
}

.box_booking-prime{
    padding: 1%;
    border-bottom: none;
    background: #ffffffa8
}

.text-blue{
    color: ${colors.blue}
}

ul li {
    font-size: 13px;
    margin-right: 12px
}
ul li:hover {
    font-size: 13px;
    color: ${colors.primary}
}

.no-bottom{
    border-bottom: none
}
.img-card{
    margin-bottom: 8%;
    flex: 0 0 25%;
      max-width: 24%;
  }
  .card .text{
    color: ${colors.blue_light_3x}
  }

  .containere {
    padding: 2px 16px;
  }

  .containere small{
    font-size: 7px;
  }

  .btns .chart-btn{
    padding: 17px;
    height: 41px;
    background: white;
    color: gray;
    text-decoration: none;
    font-weight: 300;
    font-size: 15px;
  }

  .btns .chart-btn:hover{
    padding: 17px;
    height: 41px;
    background: ${colors.primary};
    color: white !important;
    border-radius: 0;
    text-decoration: none;
    font-weight: 300;
    font-size: 15px;
  }
.form-group{
    width: 73%;
    height: 50px;
    border-radius: 36px;
    border: 0.12em solid #4a4aae;
    background: #fdfaff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
}
.form-input{
    width: 75%;
    height: 50px;
    width: 75%;
    height: 50px;
    background: #f0f8ff00;
    border: none;
    padding: 24px;
    margin-top: -14px
}

.m-right{
    margin-right: 6%
}
.price-container h4{
    color: ${colors.primary};
    letter-spacing: 1px;
    margin-left: 6px;
}

.price-container h6{
    color: ${colors.primary};
    letter-spacing: 1px;
    margin-left: 19px;
    font-weight: 600;
    font-size: 27px;
}

.price-container{
  margin-top: 9px;
}

.rounded{
    background: ${colors.blue_light_3x};
    color: white;
    background: #4A4AAE;
    height: 40px;
    float: right;
    font-size: 65%;
    padding-left: 16px;
    padding-right: 16px;
    font-weight: 600;
}

input::placeholder{
    color: #c6cacd;
    font-weight: 300
  }

.download-btn{
    padding: 7px;
    border-radius: 14px;
    width: 52px;
}


.primary-btn{
    background: ${colors.primary}
}

.a_btn{
    font-weight: 300;
    text-decoration: none;
}

h4 b{
    font-weight: 600;
    color: ${colors.primary}
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 560px) {
        .img-card{
            flex: 0 0 97%;
            max-width: 98%;
        }
        .price-container{
            margin-top: 9px;
            width: 100%;
            text-align: center;
        }
        .price-container h6, .price-container h4{

    width: 90%;
        }
        .vertLine{
            height: 12px;
        }
        .m-right{
            margin-right: 0%;
        }
        .mobile-width{
            width: 49%;
        }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {
  

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 992px) {
    .form-group{
        width: 100%
    }
    .rounded{
        width: 100%;
        margin: auto;
        margin-top: 2%
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {


}

`;
