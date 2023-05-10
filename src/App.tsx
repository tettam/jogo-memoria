import * as Component from './App.styles'
import logoImage from './assets/devmemory_logo.png'

const App = () => {
  return (
    <>
      <Component.Container>
        <Component.Info>
          <Component.LogoLink hred="">
            <img src={logoImage} width='200' alt=''/>
          </Component.LogoLink>
        </Component.Info>
        <Component.InfoArea>
          
        </Component.InfoArea>
        <Component.GridArea>
            
        </Component.GridArea>
      </Component.Container>
    </>
  )
}

export default App