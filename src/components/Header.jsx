import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-[#2a1b38] via-[#121215] to-[#121215] text-white shadow-lg">
      <div className="flex items-center justify-between px-6 py-5 lg:px-8">
        <div className="text-3xl font-bold tracking-wide">Portifolio</div>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-6 font-medium text-gray-200">
            <NavHashLink smooth to="#home" className="transition-colors hover:text-white">
              Home
            </NavHashLink>
            <NavHashLink smooth to="#skills" className="transition-colors hover:text-white">
              Skills
            </NavHashLink>
            <NavHashLink smooth to="#sectiontabs" className="transition-colors hover:text-white">
              Projects
            </NavHashLink>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center justify-center p-2 transition-all border border-gray-500 rounded-full hover:bg-white hover:text-black">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" className="flex items-center justify-center p-2 transition-all border border-gray-500 rounded-full hover:bg-white hover:text-black">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="flex items-center justify-center p-2 transition-all border border-gray-500 rounded-full hover:bg-white hover:text-black">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="flex items-center justify-center p-2 transition-all border border-gray-500 rounded-full hover:bg-white hover:text-black">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>

          <button className="px-6 py-2.5 text-sm font-semibold tracking-wide transition-all border border-gray-400 hover:bg-white hover:text-black">
            Let's Connect
          </button>
        </div>

        <button
          className="p-2 text-gray-300 lg:hidden hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#121215] border-t border-gray-800 absolute w-full">
          <div className="flex flex-col px-6 py-4 gap-4">
            <nav className="flex flex-col gap-4 font-medium text-gray-200">
              <NavHashLink 
                smooth 
                to="#home" 
                className="transition-colors hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavHashLink>
              <NavHashLink 
                smooth 
                to="#skills" 
                className="transition-colors hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </NavHashLink>
              <Link 
                to="/projects" 
                className="transition-colors hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </nav>

            <div className="flex items-center gap-4 py-4 border-y border-gray-800">
              <a href="#" className="flex items-center justify-center p-2 transition-all border border-gray-500 rounded-full hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="flex items-center justify-center p-2 transition-all border border-gray-500 rounded-full hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="flex items-center justify-center p-2 transition-all border border-gray-500 rounded-full hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="flex items-center justify-center p-2 transition-all border border-gray-500 rounded-full hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <button className="w-full px-6 py-3 text-sm font-semibold tracking-wide transition-all border border-gray-400 hover:bg-white hover:text-black">
              Let's Connect
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header