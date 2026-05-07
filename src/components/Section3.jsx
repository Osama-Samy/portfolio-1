import imgsec from "../assets/images/Screenshot_10.png"
const Section3 = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-6 lg:flex-row lg:p-10 bg-linear-to-r from-[#a23b7e] to-[#4a3799] w-full">
      <div className="w-full lg:w-1/2">
        <img 
          src= {imgsec}
          alt="Contact Illustration" 
          className="w-full h-auto" 
        />
      </div>
      
      <div className="w-full lg:w-1/2">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Get In Touch
        </h2>
        
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input 
              type="text" 
              placeholder="First Name" 
              className="w-full px-4 py-3 text-white transition-all bg-transparent border border-white/30 rounded-2xl placeholder:text-gray-400 hover:bg-white hover:text-black hover:placeholder:text-gray-500 focus:bg-white focus:text-black focus:placeholder:text-gray-500 outline-none" 
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              className="w-full px-4 py-3 text-white transition-all bg-transparent border border-white/30 rounded-2xl placeholder:text-gray-400 hover:bg-white hover:text-black hover:placeholder:text-gray-500 focus:bg-white focus:text-black focus:placeholder:text-gray-500 outline-none" 
            />
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full px-4 py-3 text-white transition-all bg-transparent border border-white/30 rounded-2xl placeholder:text-gray-400 hover:bg-white hover:text-black hover:placeholder:text-gray-500 focus:bg-white focus:text-black focus:placeholder:text-gray-500 outline-none" 
            />
            <input 
              type="tel" 
              placeholder="Phone No." 
              className="w-full px-4 py-3 text-white transition-all bg-transparent border border-white/30 rounded-2xl placeholder:text-gray-400 hover:bg-white hover:text-black hover:placeholder:text-gray-500 focus:bg-white focus:text-black focus:placeholder:text-gray-500 outline-none" 
            />
          </div>
          
          <textarea 
            placeholder="Message" 
            className="w-full px-4 py-3 h-32 text-white transition-all bg-transparent border border-white/30 rounded-2xl placeholder:text-gray-400 hover:bg-white hover:text-black hover:placeholder:text-gray-500 focus:bg-white focus:text-black focus:placeholder:text-gray-500 outline-none resize-none"
          ></textarea>
          
          <button 
            type="submit" 
            className="px-10 py-3 mt-2 font-bold text-black transition-all bg-white rounded-lg w-fit hover:bg-gray-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Section3