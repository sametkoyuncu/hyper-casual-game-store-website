function Card({
  index,
  bgColor,
  title,
  description,
  image,
  buttonGithub,
  buttonPlay,
}) {
  return (
    <div key={index} className="inline-flex" style={{ minHeight: '240px' }}>
      <div className="w-full md:w-[540px] h-[540px] md:h-[420px] md:flex shadow-lg rounded-xl">
        <div
          className="h-60 lg:h-full lg:w-60 flex-none bg-cover rounded-t-xl lg:rounded-t-none lg:rounded-l-xl text-center overflow-hidden"
          style={{
            backgroundImage: `url('https://cdnb.artstation.com/p/assets/images/images/019/806/383/large/tara-mulder-gameoverscreen.jpg?1565092022')`,
          }}
          title="Woman holding a mug"
        ></div>
        <div className="bg-white dark:bg-zinc-800 rounded-b-xl lg:rounded-b-none lg:rounded-r-xl p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8 mt-3">
            <div className="text-gray-900 dark:text-gray-200 font-bold text-xl mb-2">
              {title}
            </div>
            <p className="text-gray-700 dark:text-white text-base max-h-54">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-around pb-2">
            <div className="rounded-full mt-3">
              <a
                href={buttonGithub}
                target={'_blank'}
                className="w-full flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-full text-white  md:text-lg btn-indigo shadow-lg"
              >
                Github
              </a>
            </div>
            <div className="mt-3 sm:ml-3">
              <a
                href={buttonPlay}
                target={'_blank'}
                className="w-full flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-full md:text-lg btn-outline-indigo shadow-lg"
              >
                Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
