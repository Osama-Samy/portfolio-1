import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="w-full">
      
      <div className="relative pt-24 pb-32 bg-linear-to-r from-[#a23b7e] to-[#4a3799]">
        <div className="absolute left-0 right-0 px-4 mx-auto max-w-5xl -bottom-20 lg:-bottom-24">
          <div className="flex flex-col items-center justify-between w-full gap-8 p-8 bg-white lg:flex-row lg:p-14 rounded-[3rem] shadow-2xl">
            <h3 className="w-full text-2xl font-bold text-black lg:w-[45%] lg:text-3xl">
              See My Projects At Once & leave Here Your E-mail Address
            </h3>
            
            <div className="w-full lg:w-[55%]">
              <div className="flex items-center p-1 bg-white border border-[#a23b7e] rounded-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 text-black bg-transparent outline-none rounded-l-full placeholder:text-gray-500"
                />
                <button className="px-10 py-4 font-bold text-white transition-transform rounded-full bg-linear-to-r from-[#a23b7e] to-[#4a3799] hover:scale-105 shrink-0">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#121215] pt-36 pb-12">
        <div className="px-4 mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="text-4xl font-bold tracking-wide text-white">
              Portifolio
            </div>

            <div className="flex flex-col items-center gap-6 lg:items-end">
              <div className="flex items-center gap-4">
                <a href="#" className="flex items-center justify-center p-3 text-white transition-all border border-gray-500 rounded-full hover:bg-white hover:text-black">
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
                </a>
                <a href="#" className="flex items-center justify-center p-3 text-white transition-all border border-gray-500 rounded-full hover:bg-white hover:text-black">
                  <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
                </a>
                <a href="#" className="flex items-center justify-center p-3 text-white transition-all border border-gray-500 rounded-full hover:bg-white hover:text-black">
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </a>
                <a href="#" className="flex items-center justify-center p-3 text-white transition-all border border-gray-500 rounded-full hover:bg-white hover:text-black">
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                </a>
              </div>
              
              <p className="text-sm tracking-wide text-center text-gray-400 lg:text-right">
                --© Copyrights 2026-- All Rights Reserved Here By Osama Samy
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer