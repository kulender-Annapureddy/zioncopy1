// import home1 from '../assets/images/hom1.jpeg';
import { LiaGreaterThanSolid } from "react-icons/lia";
import { heroImg } from '../constants';
import { useEffect, useState } from "react";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImg.length);
    }, 5000); // Adjust the time interval (in milliseconds) here

    return () => clearInterval(intervalId);
  }, [heroImg.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImg.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + heroImg.length) % heroImg.length);
  };

  return (
   <section className='w-full flex flex-col bg-[#F0F1F5 ]'>
    
    <div className='relative  flex items-center justify-between w-[96%] 
     mt-36 max-sm:mt-28 mx-auto  '> 
    
    {heroImg.map((ing, index) => (
      <div key={index} className={` relative w-full ${index === currentSlide ? '' : 'hidden'}`} >
         <img src={ing.imgsrc} className="w-[80%] max-sm:w-full max-sm:object-contain max-sm:h-[200px] max-sm:object-center h-[500px] mx-auto   object-cover object-right-top" />
         <div className="absolute flex justify-between  transform 
         -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={prevSlide} className="btn btn-circle hidden">
            <FaLessThan  />
          </button>
          <button onClick={nextSlide} className="btn btn-circle hidden">
            <FaGreaterThan  className="hidden"/>
          </button>
         </div>
     </div>

    ))}
    
    
    {/* <img src={home1}
    className='w-full object-cover  max-h-screen p-12' /> */}
      <div className='absolute top-0 right-12 max-lg:hidden  '>
      <a href="https://forms.gle/zQbyWgtwZBPvbrES6  " target='_blank' 
          className="flex justify-center items-center 
          px-8 py-4 text-xl max-sm:text-lg leading-none 
          font-bold rounded-full text-white mt-2 mb-2 bg-[#3D496F]">
           Subscribe 
          </a>
      </div> 
         {/*for mobile  */}
         {/* <div className=' flex flex-col  w-full 
           items-center lg:hidden'>
      <a href="https://forms.gle/zQbyWgtwZBPvbrES6  " target='_blank' 
          className="flex justify-center items-center 
          px-4 py-4 text-xl max-sm:text-lg leading-none 
          font-bold rounded-full text-white mt-2 mb-2 bg-[black]">
           Subscribe to our Newsletter
          </a>
      </div>  */}
    </div>
    <div className=' mt-10 mx-auto md:hidden ' >
        <Link to='/donation' className='font-bold text-3xl max-lg:text-2xl py-2 px-6 shadow-3xl text-white 
         rounded-lg  bg-[#3D496F]'>Support for a Cause</Link>
        </div>
    <div className='w-full flex justify-center mt-10 items-center '>
      <p className='w-[70%]  text-xl text-wrap max-md:text-[16px] 
       max-md:w-[90%]  leading-normal text-justify font-montserrat'>
      Zion Mission Foundation, established in 2023 as a registered 
      society in Telangana, is committed to improving the lives of 
      marginalized communities in India through a holistic approach. 
      The foundation focuses on integrated healthcare access by 
      establishing healthcare facilities in remote and impoverished
       areas and providing comprehensive and affordable healthcare
       services, including preventive care and treatments. 
        Additionally, it emphasizes holistic education empowerment 
       by developing educational infrastructure, 
       and offering scholarships, grants, and vocational 
       training opportunities to economically disadvantaged 
       individuals. Collaborating with local professionals and
        organizations, Zion Mission Foundation enhances medical
         care delivery, implements health education programs, and 
         offers educational support to disadvantaged youth, ensuring
          community-centered support. By forging strategic partnerships 
          with governmental agencies, NGOs, and the private sector,
           the foundation maximizes resources, advocates for equitable
            access to healthcare and education, and drives policy 
            initiatives benefiting underserved communities. 
            Moreover, through research-driven solutions, 
            Zion Mission Foundation identifies emerging healthcare and 
            educational needs, informs strategic planning efforts, 
            and advocates for evidence-based policies and initiatives
             to uphold the rights and well-being of marginalized
              populations.
              
      </p>
    </div>
    <div className=' hidden  justify-center items-center mt-12 gap-3' >
      <a href='' className='text-2xl font-semibold text-[#382ACF]'>
        
        read more</a>

        <LiaGreaterThanSolid className='text-2xl text-[#382ACF]' />
    </div>

    
   </section>
  )
}

export default Hero




{/* <div className="carousel flex justify-between w-[96%] m-auto  gap-10">
  <div id="slide1" className="carousel-item  relative w-full">
    {/* {heroImg.map((imge) => (
      <div key={imge} className="w-full"> 
       <img src={imge.imgsrc}
        alt={imge.alt}
        className=' w-full' />
      </div>
       
    
    ))} */}
//     <img src={home1} 
//     className="w-full  " />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide4" className="btn btn-circle">❮</a> 
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide2" className="carousel-item relative w-full">
//     <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">❮</a> 
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide3" className="carousel-item relative w-full">
//     <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide2" className="btn btn-circle">❮</a> 
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide4" className="carousel-item relative w-full">
//     <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide3" className="btn btn-circle">❮</a> 
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div>
// </div> */}