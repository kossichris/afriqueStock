import css from "styled-jsx/css";
import { colors } from "../../constants/colors";

export default css.gc`
.containeur
{
    max-width: 95%;
    margin: auto
} 
.small-txt{
    font-size: 9px
} 

.head
{
   width: 100%;

} 

.right-icons span
{
    width: 139px;
} 

.row-content
{
    margin-top: 12%;
    border-top: 2px solid ${colors.blue}; 
   background: ${colors.grey_light};
   display: flex;
   flex-direction: row

} 

select{
    text-indent: 1px;
    text-overflow: '';
    background: #fdf1f1;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 100%;
    border-bottom: 1px solid #8080804d;
    color:  ${colors.grey};
  }
  
  select option {
    font-weight: 300
  }



.input-block-2
{

    background-color: #fdf3f3;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none !important;
    padding: -0.625rem 0.75rem;
} 

strong small
{
    font-size: 47%;
    float: right;
} 
::-webkit-input-placeholder { /* Edge */
    color:  ${colors.grey};
    font-size: 12px
  }

.input-block-2:focus
{
    outline: none !important
} 

.form-group
{
    margin-bottom: 23px
} 
input[type="email"]{ /* Edge */
    border:  1px solid  ${colors.grey_light};
    border-radius: 0;
    background: #f8f8f8;
    border: 1px solid #E4E9EC
  }
input[type="email"]::-webkit-input-placeholder { /* Edge */
    color:  ${colors.primary};
    font-size: 12px;
    background: #f8f9fa;
  }
  
  #email_newsletter::-webkit-input-placeholder {
    color:  ${colors.primary} !important;
  }

.btn_1
{
    color: white;
    border-radius: 16px;
    font-size: 9px;
    padding-left: 18px;
    padding-right: 17px;
} 

.right-btn{
    float: right;
}
.booking
{
    width: 100%;
} 

.circle-image{
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    width: 85px;
    height: 85px;
  }
  .circle-image img{
    width:100%;
    height:100%;
    object-fit: cover;
  }

.code-txt
{
    color: ${colors.grey}
}

.txt-block-2{
    font-size: 66%
}

.btn-select{
    border-radius: 0;
    margin-right: 2.4%;
    height: 4em;

}
.confirm{
    width: 47%;
}

.strong-red{
    color: red;
    font-weight: 400
}

small p{
    font-size: 8px;
    color: ${colors.grey}
}
small p a{
    color: ${colors.primary}
}
.gray-block{
    background: #D4D9DE;
    padding: 12px;
    font-size: 8px;
    line-height: 33px;
    width: 100%;
}
.btn-s-2{
    background: #e4e9ec;
    color: black;
    border: 1px solid;
    height: 4em;

}

h5 strong {
    font-size: 12px
}

h5 small {
    font-size: 12px;
    color: ${colors.grey}
}

.mobile-selector{
    width: 100%%;
    height: 3em;
}

.mobile-sel-container{
    width: 42%;
    margin-top: -8px;
}
label{
    margin-bottom: 0
}
.draft-btn{
    border-radius: 0;
    background: #8B959E;
    width: 100%;
    height: 42px;
    font-size: 16px;
}


.submit-btn{
    border-radius: 0;
    background: ${colors.primary};
    width: 100%;
    height: 42px;
    font-size: 16px;
}

.reject-btn{
    border-radius: 0;
    background: red;
    width: 100%;
    height: 42px;
    font-size: 12px;
}
.reject-btn:hover{
    color: white
}

.edit-btn{
    width: 47%;
    height: 37px;
    font-size: 11px;
    margin: 3px;
}
.delete-btn{
    width: 47%;
    height: 37px;
    font-size: 11px;
    margin: 3px;
    background: black;
    color: white !important;
}
p{
    font-weight: 300;
    color: #8495a7;
}

// Gallery images

.gallery-container{
    align-items: flex-start;
    align-items: stretch;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    font-size: 0;
    justify-content: flex-start;
    line-height: 0;
}

.img-container{
    border-radius: 10px;
    flex-basis: 100%;
    flex-basis: 2.0681265207%;
    flex-basis: auto;
    margin-right: 2.1897810219%;
    margin-top: 2.1897810219%;
    min-width: 0;
    background: transparent;
    flex-basis: auto;
    position: relative;
    transition: translate .18s,box-shadow .18s;
    margin-top: 0;
    width: 29%;
}

.img-container img{
    width: -webkit-fill-available;
}
@media only screen and (max-width: 495px) {
   .price span{
       width: 43%
   }
   .box_detail .price .score{
       width: 48%
   }
}
@media only screen and (max-width: 992px) {
    .wrap-container{
        flex-wrap: wrap
    }
    .block-2{
        margin: auto;
        width: 83% !important;
        background: #f8f8f8;
        padding: 25px;
    }

    .reject-block{
        margin: auto;
        width: 83% !important;
        background: #f8f8f8;
        padding: 25px;
    }

    .edit-btn{
        width: 100%;
        height: 37px;
        font-size: 12px;
        margin: 3px;
    }
    .delete-btn{
        width: 100%;
        height: 37px;
        font-size: 12px;
        margin: 3px;
        background: black;
        color: white !important;
    }
}
@media only screen and (min-width: 992px) {
  
.block-2
{
    width: 58% !important;
    margin-left: 2%;
    background: #f8f8f8;
    padding: 25px;
    margin-right: 2%;
    
}

.reject-block{
    width: 31% !important;
    margin-left: 2%;
    background: #f8f8f8;
    padding: 25px;
    margin-right: 2%;
}
.text-cont small strong {
    color: ${colors.primary}
}
p{
    font-size: 12px
}
p strong {
    color: #525252;
}
.price span{
    width: 100%
}
.box_detail .price .score{
    width: 27%
}
}


`;
