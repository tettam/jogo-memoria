import { GridItemType } from '../../types/GridItemType'
import * as C from './style'
import b7Svg from './../../svgs/b7.svg'
import { Items } from '../../data/Items'

type Props = {
  item:GridItemType,
  onClick: () => void
}

export const GridItem = ({ item, onClick }): Props => { 
  return (
      <C.Container onClick={onClick}>
      {item.permanentShown == false && item.shown == false &&
        <C.Icon src={b7Svg} alt=''/>
      }
      {item.permanentShow || item.shown && item.item !== null &&
        <C.Icon src={Items[item.item].icon} alt=''/>
      }
    </C.Container>
  )
}