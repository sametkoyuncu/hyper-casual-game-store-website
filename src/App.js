import HeroSectionTailwind from './components/HeroSectionTailwind'
import GameSectionTailwind from './components/GameSectionTailwind'
import GameCard from './components/GameCard'

import './FoodThemeCss.css'
import './App.css'

import Navbar from './components/Navbar'
import { useEffect } from 'react'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Games', href: '#games' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#' },
]

function App() {
  let gamesSection = window.document.querySelector('#games')
  useEffect(() => {
    gamesSection = window.document.querySelector('#games')
  }, [])

  const handleScrollRight = () => {
    console.log('clicked')
    gamesSection.scrollLeft += 400
  }
  const handleScrollLeft = () => {
    console.log('clicked')
    gamesSection.scrollLeft -= 400
  }
  return (
    <div className="App">
      <div className="bg-white dark:!bg-zinc-800 sticky top-0 z-50 shadow-lg shadow-indigo-500/20">
        <Navbar navItems={navigation} />
      </div>
      <HeroSectionTailwind />
      <div className="relative">
        {/* <button
          className="invisible md:visible absolute inset-y-0 left-0 px-5 py-5 z-20 bg-zinc-600/20"
          onClick={handleScrollLeft}
        >
          {`<`}
        </button>
        <button
          className="invisible md:visible absolute inset-y-0 right-0 px-5 z-20 bg-zinc-600/20"
          onClick={handleScrollRight}
        >
          {`>`}
        </button> */}
        <section
          id="games"
          className="flex flex-row flex-nowrap overflow-x-auto scroll-smooth space-x-5 h-screen px-5 pt-52 bg-indigo-100 dark:bg-zinc-600 md:grid md:gap-4 md:px-20 md:gap-y-28 md:grid-cols-2 lg:grid-cols-3  pb-20"
        >
          <GameCard
            index={0}
            bgColor="indigo"
            title="Doodle Jump"
            description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis."
            image="img/games/doodle-jump.png"
            buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
            buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
          />
          <GameCard
            index={1}
            bgColor="blue"
            title="Nokia 3310 Snake Game"
            description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis."
            image="img/games/snake.png"
            buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
            buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
          />
          <GameCard
            index={2}
            bgColor="indigo"
            title="Doodle Jump"
            description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
            image="img/games/doodle-jump.png"
            buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
            buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
          />
          <GameCard
            index={3}
            bgColor="blue"
            title="Nokia 3310 Snake Game"
            description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
            image="img/games/snake.png"
            buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
            buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
          />
          <GameCard
            index={4}
            bgColor="indigo"
            title="Doodle Jump"
            description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
            image="img/games/doodle-jump.png"
            buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
            buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
          />

          <GameCard
            index={5}
            bgColor="blue"
            title="Nokia 3310 Snake Game"
            description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
            image="img/games/snake.png"
            buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
            buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
          />
          <GameCard
            index={6}
            bgColor="indigo"
            title="Doodle Jump"
            description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
            image="img/games/doodle-jump.png"
            buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
            buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/1-doodle-jump"
          />
          <GameCard
            index={7}
            bgColor="blue"
            title="Nokia 3310 Snake Game"
            description="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
            image="img/games/snake.png"
            buttonGithub="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
            buttonPlay="https://github.com/sametkoyuncu/hyper-casual-games-with-js/tree/2-snake-nokia-3310/snakeNokia3310"
          />
        </section>
      </div>
    </div>
  )
}

export default App
