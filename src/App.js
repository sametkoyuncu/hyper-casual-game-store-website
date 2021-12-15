import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import GameSection from './components/GameSection'

import './FoodThemeCss.css'
import './App.css'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div id="games">
        <GameSection
          bgColor="fff"
          title="Doodle Jump"
          description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
          image="img/games/doodle-jump.png"
          imagePosition="left"
          buttonOne="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
          buttonTwo="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
        />
        <GameSection
          bgColor="eee"
          title="Nokia 3310 Snake Game"
          description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
          image="img/games/snake.png"
          imagePosition="right"
          buttonOne="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
          buttonTwo="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
        />
      </div>
    </div>
  )
}

export default App
