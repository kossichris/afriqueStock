

import css from 'styled-jsx/css'
import { colors } from '../constants/colors'

export default css.AccueilContributeurs`
#sidebar{
position: relative; overflow: visible; box-sizing: border-box; min-height: 1px
}
.range{
position: absolute; width: 1px; height: 1px; overflow: hidden; opacity: 0;
}

.theiaStickySidebar{
padding-top: 0px; padding-bottom: 1px; position: static; transform: none; left: 66px; top: 0px;

}

.resize-sensor{
position: absolute; inset: 0px; overflow: hidden; z-index: -1; visibility: hidden;
}

.resize-sensor-expand{
position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;

}

.container-shrink{
position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 334px; height: 1764px;
}
.resize-sensor-shrink{
position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;
}
.resize-sensor-shrink-child{
position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%
}

.rating strong{
    color: white
}

.grid-container{
    width: 95%;
    margin: auto;
}
`