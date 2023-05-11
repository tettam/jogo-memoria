import * as Component from './App.styles';
import RestartIcon from './svgs/restart.svg'
import logoImage from './assets/devmemory_logo.png';
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';
import  items  from './data/Items';

const App = () => {
  const resetAndCreatGrid = () => {
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
            <InfoItem label='Tempo' value='00:00' />
            <InfoItem label='Movimentos' value=' 0'/>
          </Component.InfoArea>  

        <Button label='Reiniciar' icon={RestartIcon} onClick={resetAndCreatGrid}/>
        </Component.Info>
       
        <Component.GridArea>    
          <Component.Grid></Component.Grid>
        </Component.GridArea>
      </Component.Container>
    </>
  )
}

export default App