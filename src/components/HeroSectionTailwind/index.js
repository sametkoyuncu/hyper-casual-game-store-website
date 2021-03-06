export default function Example() {
  return (
    <div className="relative bg-white dark:bg-zinc-800 overflow-hidden h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 h-screen bg-white dark:bg-zinc-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Hello, world! </span>
                <br />
                <span className="block text-2xl sm:text-4xl md:text-5xl text-indigo-600 xl:inline">
                  Welcome to my game universe.
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                This journey is about making hyper-casual games using pure JavaScript.
              </p>
              <div className="mt-5 items-center sm:mt-8 sm:flex sm:justify-center lg:justify-start ">
                <div className="rounded-full mt-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white  md:py-4 md:text-lg md:px-10 btn-indigo"
                  >
                    Github
                  </a>
                </div>
                <div className="mt-3 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full md:py-4 md:text-lg md:px-10 btn-outline-indigo"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="bg-indigo-600/50">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full lg:inset-y-0"
            src="/img/hero-img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
