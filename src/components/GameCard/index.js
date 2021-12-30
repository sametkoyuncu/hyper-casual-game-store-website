function GameCard({
  index,
  bgColor,
  title,
  description,
  image,
  buttonGithub,
  buttonPlay,
}) {
  return (
    <div className="inline-flex flex-col h-80 min-w-[340px] p-5 bg-white dark:bg-zinc-800 dark:text-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 hover:shadow-indigo-500 transition-all cursor-pointer">
      <div className="relative">
        <img
          src="/img/games/doodle-jump-mobile.png"
          className="absolute left-0 right-0 mx-auto top-[-100px] w-36 h-auto bg-indigo-500 p-3 rounded-full shadow-md"
        ></img>
      </div>
      <div className="inline-flex flex-col mt-12">
        <h2 className="text-xl my-2 font-bold">{title}</h2>
        <p>{description.slice(0, 160) + '...'}</p>
      </div>
      <div className="grow"></div>
      <div className="rounded-full shadow-lg mt-3 mb-1">
        <a
          href={buttonGithub}
          target={'_blank'}
          className="w-full flex items-center justify-center px-5 py-2 text-base font-medium rounded-full text-white  md:text-lg btn-indigo"
        >
          Details
        </a>
      </div>
    </div>
  )
}

export default GameCard
