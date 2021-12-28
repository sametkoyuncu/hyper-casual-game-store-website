import HeroSectionTailwind from './components/HeroSectionTailwind'
import GameSectionTailwind from './components/GameSectionTailwind'

import './FoodThemeCss.css'
import './App.css'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <HeroSectionTailwind />
      <div id="games">
        <GameSectionTailwind
          index={0}
          bgColor="indigo"
          title="Doodle Jump"
          description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
          image="img/games/doodle-jump.png"
          buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
          buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
        />

        <GameSectionTailwind
          index={1}
          bgColor="red"
          title="Nokia 3310 Snake Game"
          description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
          image="img/games/snake.png"
          buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
          buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
        />
      </div>
    </div>
  )
}

export default App
