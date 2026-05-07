import { NavLink } from "react-router-dom"

const SectionTabs = () => {
  return (
    <section className="py-10 bg-[#121215]" id="sectiontabs">
      <div className="flex justify-center w-full px-4 mx-auto max-w-7xl lg:px-8">
        <div className="flex w-full max-w-4xl overflow-hidden border border-gray-800 rounded-full bg-[#16161a]">
          
          <NavLink
            to="/sec1projects"
            className={({ isActive }) =>
              `flex-1 block py-4 text-center text-sm font-semibold tracking-wide text-white transition-all duration-300 border-r border-gray-800 md:text-lg ${
                isActive
                  ? "bg-linear-to-r from-[#a63c8e] to-[#5631a5]"
                  : "bg-transparent hover:bg-[#1f1f24]"
              }`
            }
          >
            1st Section
          </NavLink>

          <NavLink
            to="/section2form"
            className={({ isActive }) =>
              `flex-1 block py-4 text-center text-sm font-semibold tracking-wide text-white transition-all duration-300 border-r border-gray-800 md:text-lg ${
                isActive
                  ? "bg-linear-to-r from-[#a63c8e] to-[#5631a5]"
                  : "bg-transparent hover:bg-[#1f1f24]"
              }`
            }
          >
            2nd Section
          </NavLink>

          <NavLink
            to="/section3"
            className={({ isActive }) =>
              `flex-1 block py-4 text-center text-sm font-semibold tracking-wide text-white transition-all duration-300 md:text-lg ${
                isActive
                  ? "bg-linear-to-r from-[#a63c8e] to-[#5631a5]"
                  : "bg-transparent hover:bg-[#1f1f24]"
              }`
            }
          >
            3rd Section
          </NavLink>

        </div>
      </div>

    </section>
  )
}

export default SectionTabs