import homeBg from "../assets/images/home-bg.png"

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex items-center w-full bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="absolute inset-0 bg-black/60 lg:bg-transparent lg:bg-linear-to-r lg:from-[#0a0a0c]/90 lg:via-[#0a0a0c]/50 lg:to-transparent"></div>

      <div className="relative z-10 w-full px-4 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl py-20 mx-auto sm:py-25 lg:py-25 lg:mx-0">
          
          <h2 className="w-fit px-4 py-2 mb-6 text-lg font-bold text-center text-white border-2 border-white sm:text-2xl">
            Welcome to my Portfolio
          </h2>
          
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm Osama Samy, <br />
            a Full Stack Developer, <br />
            I create beautiful websites
          </h1>
          
          <p className="mt-8 text-lg font-medium text-gray-300 text-pretty sm:text-xl/8">
            Hello Everyone! I am a fresh 2025 Computer Science graduate specializing in the MERN stack and building robust backend systems
          </p>
          
          <div className="flex mt-10 gap-x-6">
            <a href="#" className="font-semibold text-white transition-all text-sm/6 hover:translate-x-2">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Home