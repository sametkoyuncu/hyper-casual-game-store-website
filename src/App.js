import HeroSectionTailwind from './components/HeroSectionTailwind'
import GameSectionTailwind from './components/GameSectionTailwind'
import Card from './components/Card'

import './FoodThemeCss.css'
import './App.css'

import Navbar from './components/Navbar'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Games', href: '#games' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#' },
]

function App() {
  return (
    <div className="App">
      <div className="bg-white dark:!bg-zinc-800 sticky top-0 z-50">
        <Navbar navItems={navigation} />
      </div>
      <HeroSectionTailwind />
      <section
        id="games"
        className="flex flex-row flex-nowrap overflow-x-auto space-x-5 py-16 px-3 md:space-x-10 md:py-36 md:px-10 bg-indigo-100 dark:bg-zinc-600"
      >
        <Card
          index={0}
          bgColor="indigo"
          title="Doodle Jump"
          description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis."
          image="img/games/doodle-jump.png"
          buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
          buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
        />
        <Card
          index={1}
          bgColor="blue"
          title="Nokia 3310 Snake Game"
          description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis."
          image="img/games/snake.png"
          buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
          buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
        />
        <Card
          index={2}
          bgColor="indigo"
          title="Doodle Jump"
          description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
          image="img/games/doodle-jump.png"
          buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
          buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
        />
        <Card
          index={3}
          bgColor="blue"
          title="Nokia 3310 Snake Game"
          description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
          image="img/games/snake.png"
          buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
          buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
        />
        <Card
          index={4}
          bgColor="indigo"
          title="Doodle Jump"
          description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
          image="img/games/doodle-jump.png"
          buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
          buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
        />
        <Card
          index={5}
          bgColor="blue"
          title="Nokia 3310 Snake Game"
          description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
          image="img/games/snake.png"
          buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
          buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
        />
        <Card
          index={6}
          bgColor="indigo"
          title="Doodle Jump"
          description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
          image="img/games/doodle-jump.png"
          buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
          buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
        />
        <Card
          index={7}
          bgColor="blue"
          title="Nokia 3310 Snake Game"
          description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
          image="img/games/snake.png"
          buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
          buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
        />
      </section>
      <div id="about">
        <GameSectionTailwind
          index={8}
          bgColor="indigo"
          title="Doodle Jump"
          description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
          image="img/games/doodle-jump.png"
          buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
          buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
        />

        <GameSectionTailwind
          index={9}
          bgColor="blue"
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
