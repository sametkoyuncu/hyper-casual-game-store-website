function GameSectionTailwind({
  index,
  bgColor,
  title,
  description,
  image,
  buttonGithub,
  buttonPlay,
}) {
  return (
    <section
      key={index}
      className={`min-w-screen min-h-screen bg-indigo-300 flex items-center p-5 lg:p-10 overflow-hidden relative`}
    >
      <div className="w-full max-w-6xl rounded-lg bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full hidden md:inline-block md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <img src={image} className="w-48 mx-auto relative z-10" alt="" />
              <div
                className={`border-4 border-${bgColor}-200 absolute top-10 bottom-10 left-10 right-10 z-0`}
              ></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="mb-5">
              <h1 className="font-bold uppercase text-2xl mb-3">{title}</h1>
              <p className="text-md">{description}</p>
            </div>
            <div className="mt-5 items-center sm:mt-8 sm:flex sm:justify-center lg:justify-start ">
              <div className="rounded-full mt-3">
                <a
                  href={buttonGithub}
                  target={'_blank'}
                  className="w-full flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-full text-white  md:text-lg btn-indigo"
                >
                  Github
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href={buttonPlay}
                  target={'_blank'}
                  className="w-full flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-full md:text-lg btn-outline-indigo"
                >
                  Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameSectionTailwind
