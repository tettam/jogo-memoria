import * as Component from './App.styles';
import RestartIcon from './svgs/restart.svg'
import logoImage from './assets/devmemory_logo.png';
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';
import { GridItem } from './components/GridItem';
import { useEffect , useState } from 'react';
import { GridItemType } from './types/GridItemType';
import { Items } from './data/Items';
import { formatTimeElapsed } from './helpers/formatTimeElapsed';

const App = () => {

  const [playing , setPlaying] = useState<boolean>(false);
  const [timeElapsed, setLTimeElapsed] = useState<number>(0);
  const [movieCount , setMovieCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems , setGridItems] = useState<GridItemType[]>([])

  useEffect(() =>  resetAndCreatGrid(), [])

  useEffect(() => {
    const timer = setInterval(() => {
      if(playing) setLTimeElapsed(timeElapsed + 1);
    },1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed])

  const resetAndCreatGrid = () => {
    setLTimeElapsed(0);
    setMovieCount(0);
    setShownCount(0);

    //Criando grid vazio
    const tempGrid: GridItemType[] = [];
    for(let i = 0; i < (Items.length * 2); i++){
      tempGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      })
    }

    //preencher o grid
    for(let y = 0; y <2; y++){
      for(let i = 0; i < Items.length; i++){
        let random = -1
        while (random < 0 || tempGrid[random].item !== null) {
          random = Math.floor(Math.random() * (Items.length * 2));
        }
        tempGrid[random].item = i;  
      }
    }

    //Jogar  no state
    setGridItems(tempGrid);
    console.log(gridItems)

    //Começar jogo
    setPlaying(true)
  }
  
  const handleItemClick = () => {
    console.log('ok')
  }

  return (
    <>
      <Component.Container>
        <Component.Info>
          <Component.LogoLink href="">
            <img src={logoImage} width='200' alt=''/>
          </Component.LogoLink>

          <Component.InfoArea>
            <InfoItem label='Tempo' value={formatTimeElapsed(timeElapsed)} />
            <InfoItem label='Movimentos' value=' 0'/>
          </Component.InfoArea>  

        <Button label='Reiniciar' icon={RestartIcon} onClick={resetAndCreatGrid}/>
        </Component.Info>
       
        <Component.GridArea>    
          <Component.Grid>
            {gridItems.map((item, index) => (
              <GridItem 
                key={index}
                item={item}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </Component.Grid>
        </Component.GridArea>
      </Component.Container>
    </>
  )
}

export default App