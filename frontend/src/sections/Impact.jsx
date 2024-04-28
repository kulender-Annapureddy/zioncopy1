import { Impacts } from "../constants"

const Impact = () => {
  return (
    <section className="w-full h-[] mt-8  bg-[white]">
      <h2 className="w-full max-md:text-4xl
       text-4xl max-sm:text-3xl text-center  pt-7 font-montserrat font-bold">Our Impact</h2>
         <div className="flex flex-wrap pb-20 justify-center 
           items-center gap-40 max-sm:gap-y-0 " >
          {Impacts.map((impact) => (
            <div key={impact} className=" flex flex-col justify-center
             items-center mt-10  "> 
            <p className=" text-4xl max-sm:text-4xl
            font-montserrat max-md:m-0
              text-[#4443D4] text-center  font-bold">{impact.value}</p>
            <p className=" text-4xl text-[#4443D4] text-center 
            font-montserrat max-sm:text-2xl  font-semibold">{impact.label}</p>
            <p className=" text-lg max-md:text-xl text-[#4443D4]  
             font-montserrat text-center">write something that 
             <br/>
             that matters to this 
             <br/>
             section
             </p>

            </div>
          ))}
         </div>
    </section>
  )
}

export default Impact
