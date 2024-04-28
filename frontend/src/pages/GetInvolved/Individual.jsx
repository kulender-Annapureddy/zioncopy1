import education from '../../assets/images/home2.jpg'

const Individual = () => {
  return (
    <section className="mt-32 max-lg:mt-20 text-8xl">
    <img src={education}
     alt="background"
     className='w-[96] px-10 mx-auto py-4 object-contain' />
     <div className='w-[300px] mx-auto  '>
      <a href="https://forms.gle/zQbyWgtwZBPvbrES6  " target='_blank' 
          className="flex justify-center items-center 
          px-8 py-4 text-xl max-sm:text-lg leading-none 
          font-bold rounded-full text-white mt-2 mb-2 bg-[#3D496F]">
           Play Your Part 
          </a>
      </div>
      <div className='w-full flex   justify-center mt-10 items-center '>
      <p className='w-[70%]  text-2xl max-md:text-[16px] 
       max-md:w-[90%]  leading-normal text-center font-montserrat'>
         <span >
          Zion Foundation is a people-driven organization-right from the 
          people who started it with a vision, to the people who work for us
          to bring charge at grassroots. to the people who support our work, and most
          importantly the people who serve on the ground though our work.
         </span>
         <br/>
         <br/>
         <span>
          committed, responsible people who are passionate to make a difference to the world
          arougn them are the backbone of Zion foundation. We have always taken our role as the
          catalyst in the process ofr bringing change, but ultimately if we aiming real 
          and sustainable development. change hast to be driven by people themselves.
         </span>
         <br/>
         <br/>
         <span>
          over the days,Zion foundation has recieved the love, support an trust of millions of individuals
          who have enabled us to create high impact programmes and benefit iver 1.5 million people
          every year. We always take pride in making our supporters active partners in our programmes 
          either than just channelize their resource to do good.  
         </span>
         <br/>
         <br/>
              
      </p>
    </div>
    <div className='flex flex-wrap justify-center items-center gap-20
         max-sm:gap-2 my-16 max-sm:my-2'>
          <div >
          <a className="text-3xl max-sm:text-2xl font-semibold  px-5 py-3
           text-white bg-[#3D496F] rounded-xl">Support for a cause</a>
          </div>
          <div className='max-sm:w-full max-sm:px-4' >
            <p className='text-3xl max-sm:text-3xl leading-normal font-semibold'>FOR CSR SUPPORT</p>
            <div className='flex flex-col justify-center  gap-3'>
            <span className='text-xl from-neutral-700'>Write to</span>
            <span className='text-xl font-medium'>Latha Rani Kavuri - Director of Projects -
            <br/>
            
            <a>lathasagar.zion@gmail.com</a> </span>
            </div>
            
          </div>
          
          </div>
  </section>
  )
}

export default Individual
