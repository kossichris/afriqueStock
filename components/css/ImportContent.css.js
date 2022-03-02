import css from "styled-jsx/css";
import { colors } from "../../constants/colors";

export default css.import`

    .containeur{
        width: 94%;
        margin: auto;
    }
    .txt-title{
        width: 87%;
        text-align: center;
    }
    .txt-title h3{
        color: #746f6f;
        font-weight: 300;
    }
    .txt-title span{
        font-size: 17px;
    font-weight: 300;
    color: cadetblue;
    }

    .gray-block{
        background: #f8f9fa;
        padding: 17px;
        font-size: 11px;
        font-weight: 300;
    }

    ul li{
        margin-top: 3%
    }

    .box_booking illust{
        padding: 14%;
    font-size: 9px;
    }

    b{
        color: ${colors.primary}
    }
`;
