 import logo from '../assets/logo2.svg'
 import { CiInstagram, CiMail, CiYoutube } from "react-icons/ci";
 import { IoIosContact } from "react-icons/io";
import { subLinks } from '../constants';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

 

const Footer = () => {
  return (
   <footer className="w-full bg-[#3D496F]  ">
    <div className='flex justify-evenly flex-wrap max-lg:hidden pb-20 '>
      {subLinks.map((foot) => (
        <div key={foot}> 
        <h4 className='text-white text-xl  mt-20 mb-4 cursor-pointer'>{foot.title}</h4>
        <hr/>
        <ul className='flex flex-col '>
          {foot.links.map((link) => (
            <Link key={link} to={link.link} 
            className='text-white  text-xl  leading-10'>
              {link.name}
            </Link>
          ))}
        </ul>
        </div>
      ))}
    </div>

      <hr className=' mx-auto w-[88%]  my-4 px-2 '/>

      {/* zion */}
    <div className=" flex justify-center lg:gap-16 xl:justify-evenly
    px-20 flex-wrap 
    items-center max-sm:px-1  max-sm:pt-5 ">
      <div className='flex flex-col gap-4 max-sm:gap-2'>
        <div className='flex flex-row  items-center gap-0 max-sm:gap-0 max-sm:px-2'>
        <img src={logo} 
        alt="logo"
        width={200}
        height={200}
        className='rounded-full max-sm:w-[150px]'
        />
        <p className=' text-[40px] max-sm:text-[24px] text-white
          text-center flex flex-col leading-[50px] 
          max-sm:leading-[30px] max-md:text-[30px] max-lg:text-[40px] 
          max-lg:leading-[50px] max-md:leading-[30px] ' > ZION MISSION  
        <p className='text-[40px] max-lg:text-[30px] max-sm:text-[22px]'> FOUNDATION</p>
        <p className='text-xl pt-2 max-sm:text-[14px] max-md:text-lg max-lg:text-xl '>
        A MISSION WITH ACT OF KINDNESS
        </p>
        
        </p>
        </div>
        <div className='hidden'>
        <p className='text-white px-6 text-start text-xl
         leading-normal max-sm:text-xl max-sm:text-left font-montserrat'>
          Mission, vision, and objectives are the interconnected
          <br/>
         links that guide us through the journey of purpose, 
         <br/>
         illuminate the path of aspiration, and shape the 
         <br/>
         destination of achievement</p>
      </div>
      
      </div>
      {/* adress */}
      <div className=' flex flex-col gap-3 mt-4 max-md:px-4  mb-10  '>
        <div className='flex flex-col gap-3 max-sm:gap-2'>
        <h1 className='text-white text-3xl max-sm:text-2xl'>Address</h1>
        <hr  className=' w-full max-sm:w-full mx-auto'/>
        <p className='text-white text-lg max-sm:text-lg max-sm:px-2 leading-normal'> Plot No 61, Sri Balaji West County, 
        <br/>
        Nizampet, Hyderabad,
        <br/>
         Telangana 500090
         </p>
        </div>
        <div className='flex flex-col gap-2'>
          {/* <p className='text-white text-xl max-sm:text-lg'>Contact Us: Tel: +91-89771 40093 | E-mail:foundationzionmission@gmail.com</p> */}
          <p className='text-white hidden text-xl max-sm:text-2xl'>Subscribe to our Newsletter</p>
          <a href="https://forms.gle/zQbyWgtwZBPvbrES6  " target='_blank' 
          className=" w-full max-sm:w-72 flex  justify-center items-center mx-auto 
           py-4 text-xl max-sm:text-[16px] leading-none 
          font-bold rounded-full text-[#3D496F] 
          mt-2 mb-2 bg-[white]">
           Subscribe 
          </a>
        </div>
        


      </div>


      </div>

      <div className=' flex flex-row flex-wrap  gap-2
       justify-center items-center mt-4  px-12 pb-10' >
          <a href='tel:+918977140093' className='text-white text-2xl max-sm:text-xl flex justify-center gap-2 items-center px-8 max-sm:px-0'>
  <IoIosContact className='text-4xl max-sm:text-2xl bg-white rounded-full text-black p-2 max max-sm:p-1'  />
   - +91-89771 40093 
</a>
<a href='mailto:foundationzionmission@gmail.com' className='text-white text-2xl max-sm:text-[16px] flex justify-center gap-2 items-center px-8 max-sm:px-0 max-sm:pb-2'  >
  <CiMail className='text-4xl max-sm:text-2xl text-black bg-white rounded-full p-2  max-sm:p-0' />
   foundationzionmission@gmail.com 
</a>
        </div>
        <div className='w-full flex justify-center items-center gap-4 pb-10'>
          <CiInstagram  className='text-white text-2xl font-bold'/>
          <FaFacebook className='text-white text-2xl font-bold' />
          <CiYoutube className='text-white text-2xl font-bold' />

        </div>
   </footer>
  )
}

export default Footer
