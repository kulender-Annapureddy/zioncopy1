import { useState } from "react"
import newsLetter from '../../assets/images/newsletter.png'
import newsletterpdf from '../../assets/images/draftnewsletter.pdf'


const NewsLetter = () => {
    
  const [subscibeData, setSubscribeData] = useState({
    name:'',
    email:'',
  })
  const handleInputChange = (e) => {
    const { name, value} = e.target;
    setSubscribeData({...subscibeData, [name]:value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //dev
      //const api='http://localhost:3002/api/newsletter';
      //prod
      const api ='https://zioncopy1.onrender.com/api/newsletter'
      const response  = await fetch(api, {
        method:'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify(subscibeData)
      });
      console.log('req sent successfully for subscription');
      if (!response.ok) {
        console.log("server status is not ok");
      } else {
        alert("NewsForm Submitted Successfully");
        setSubscribeData({
          name: '',
          email: ''
        });
      }
    } catch (error) {
      console.log(" sub submission failed", error);
    }
  }

  return (
    <div className="mt-32 max-lg:mt-20 ">
    <div className=" w-[90%] mx-auto flex flex-wrap 
    justify-between items-center">
    <h1 className=" text-3xl font-montserrat py-12 max-lg:text-2xl
     font-bold text-[#3D496F]">NEWSLETTER</h1>
    <div>
      <h2 className=" py-2 text-2xl " >subscribe to newsletter</h2>
    <form className="text-2xl  flex flex-row max-sm:flex-wrap gap-2 mb-2 " onSubmit={handleSubmit} >
    <input 
     type="text"
     name="name"
     value={subscibeData.name}
     onChange={handleInputChange}
     required
     placeholder="Name"
     className='w-[40%] max-sm:w-[80%] px-2 text-xl
    max-sm:text-[16px]  py-2 mx-2 
    rounded-lg
    border-4 text-black bg-gray-300'
    />
   <input
    type="email"
    name="email"
    value={subscibeData.email}
    onChange={handleInputChange}
    required
    placeholder="Email"
    className='w-[40%] max-sm:w-[80%] px-2 text-xl
     max-sm:text-[16px]  py-2 mx-2 
     rounded-lg
    border-4 text-black bg-gray-300'
    />
   <button type="submit"
    className='text-2xl max-sm:text-2xl  text-white 
    font-semibold  bg-[#3D496F] border-4 py-2
     px-5 cursor-pointer  rounded-xl'>SUBSCRIBE</button>
      </form>
    </div>
   
    </div>
    <div className="w-[90%] mx-auto my-6 ">
  <h1 className="font-montserrat text-3xl py-12 max-lg:text-3xl font-bold text-[#3D496F]">LATEST ISSUES</h1>
  <p className="text-2xl pb-4">MARCH 2024</p>
  <div className="w-80 max-sm:w-full border-2 shadow-2xl rounded-[18px]

   border-[#3D496F]">
    <h2 className="text-2xl text-left px-8 py-2">Zion Mission: Issue 1</h2>
    <a href={newsletterpdf} download="newsletter.pdf"
     className="block w-full  ">
      <img src={newsLetter} className="w-full h-full object-cover my-2" alt="Newsletter" />
    <span className="bg-[#3D496F]  flex justify-center text-white 
    px-2 py-1  rounded-br-2xl rounded-bl-2xl text-2xl">Download</span>
    </a>
  </div>
</div>
    
  </div>
  )
}

export default NewsLetter
