import { FaBookOpen } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";


const Programs = () => {
  return (
    <section className="bg-white mt-20">
      
      <h1 className="text-center font-bold  text-4xl max-md:text-4xl
      max-sm:text-3xl">Our Initiatives</h1>

      <div className="w-full flex  flex-wrap justify-evenly  
      items-center gap-50 my-10 "> 
      <div className=" flex items-center max-sm:gap-6 gap-10 
         mb-10 max-sm:px-2 cursor-pointer">
          <MdOutlineHealthAndSafety className="text-8xl text-white 
          max-md:text-6xl max-sm:rounded-[10px]
          max-sm:p-1 max-sm:text-[80px]  bg-orange-500 
          p-4 rounded-full" />
         <a href="" className="text-3xl max-sm:text-3xl  max-md:text-[40px] font-bold text-orange-500">Health Care
         <br/>
         <p className="text-xl max-sm:text-xl text-black font-semibold ">Taking healthcare sevices doorsteps 
          <br/>
          Hard to reach communities
          </p>
         </a>
          
         </div>
         <div className="flex items-center gap-10
          max-sm:gap-6 mb-10 cursor-pointer max-sm:px-2"> 
          <FaBookOpen className="text-8xl max-md:text-6xl
           max-sm:text-[70px] max-sm:p-1  text-white bg-violet-500
            rounded-full p-4 max-sm:rounded-[10px]  " />
         <a href="" className="text-3xl max-md:text-[40px] 
         font-bold max-sm:text-3xl text-violet-500">Education
         <br/>
         <p className="text-xl text-black  
          max-sm:text-xl font-semibold ">Education, nutrition and holistic
          <br/>
          development of children
         </p>
         </a>
         </div>
         
      </div>
      </section>
  )
}

export default Programs
