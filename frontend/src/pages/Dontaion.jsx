import { useState } from 'react'
import education from '../../src/assets/images/home2.jpg'
import {Navigate} from 'react-router-dom'


const Dontaion = () => {
  

     
   const [redirect, setRedirect] = useState(false);
   const [formData, setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    dob:'',
    country:'',
    state:'',
    city:'',
    address:'',
    pincode:'',
    panno:'',
    amount:'',
   });

  //  const countryOptions = [
  //    'India'
  //    // Add more countries as needed
  //  ];
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  
    
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.dob || !formData.country || !formData.state || !formData.city || !formData.address || !formData.pincode || !formData.panno || !formData.amount) {
      alert('Please fill in all the fields');
      return;
    }
  
    // Validate phone number
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.phone)) {
      alert('Please enter a valid phone number');
      return;
    }
  
    // Validate email
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    let transformedPAN = formData.panno.toUpperCase();
  const panPattern = /^[A-Z]{5}\d{4}[A-Z]{1}$/;
  if (!panPattern.test(transformedPAN)) {
    alert('Please enter a valid PAN number (e.g., ABCCS1234E)');
    return;
  }
    // Add more specific validation if needed for other fields
  
    try {
      const response = await fetch('http://localhost:3002/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      console.log("req sent Succesfully");
      if (!response.ok) {
        console.log("server status is not ok");
      } else {
        alert("Form Submitted Successfully");
        setRedirect(true);
      }
      const data = await response.json();
      console.log("response", data);
    } catch (error) {
      console.log("submission failed", error);
    }
  }

  if (redirect) {
    return <Navigate to={'/donationqr'} />;
  }
  return (
    <section className="mt-32 max-sm:mt-20 text-8xl">
     <img src={education}
     alt="background"
     className='w-full px-10 py-4 object-contain' />
     <div className='w-[90%] mx-auto my-10 flex max-lg:flex-wrap
      justify-center gap-x-12 items-center text-center'>
       <div className='w-full '>
        <p className='text-xl max-sm:text-lg'>
        After a gap of two years, schools have reopened. Watching children go back to school, meet their friends, share lunch and play together has been a moment to rejoice. But this is just one side of the fence.

The pandemic affected every child, but some suffered more than others. Children from socio-economically weaker sections, tribal belts, remote rural areas and urban slums, became the worst sufferers. When the schools were shut, only about 28% of children living in rural areas and slums had access to digital learning. Education came to a halt for lakhs of children, who had already been struggling in the pre-pandemic world.

Smile Foundation, through its ‘Shiksha Na Ruke’ initiative, has been helping children from difficult circumstances get back to school and restart their lives positively, and with hope. At present, we are directly providing education to over 100,000 children in 23 states of India.

Despite all the odds, these young champions have not given up and continue to dream and work hard. With your support, we can fuel their dreams with accessible and quality education. Join hands with us to ensure a happy and safe childhood for all!
        </p>
      </div>
      <div className='w-full  
      rounded-3xl '>
        <div className='leading-normal bg-gradient2'>
          <h2 className='text-3xl max-sm:text-2xl text-[#3D496F] font-bold leading-normal '>Support The Cause</h2>
           <h3 className='text-3xl max-sm:text-xl  font-medium leading-normal max-sm:leading-10 '>MAKE A DIFFERENCE</h3>
           <p className='text-xl max-sm:text-xl leading-normal'>Your donation will Help for the 
           education of many children who are in Need.</p>
           <form className='w-full flex flex-wrap justify-center  gap-6 max-sm:gap-6
           items-center my-5 max-sm:my-2' onSubmit={handleSubmit}>
            
              <input 
              type='text'
              placeholder='Enter Full Name'
               name='name'
              value={formData.name}
              onChange={handleInputChange}
              required
              className='w-[40%] max-sm:w-[40%] px-2 text-xl
               max-sm:text-[16px]  py-2 mx-2 
               rounded-lg
               border-4 text-black bg-gray-300' 
              ></input>
            
            
              <input 
              type='email'
              placeholder='Enter email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
              className='w-[40%]  px-2 text-xl max-sm:text-[16px] py-2 mx-2 
              rounded-lg text-black max-sm:w-[40%] bg-gray-300'
              ></input>
                        
             <input
             type='tel'
             placeholder='Enter Phone '
             name='phone'
             value={formData.phone}
             onChange={handleInputChange}
             required
             className='w-[40%] max-sm:w-[40%] text-black bg-gray-300 
             rounded-lg px-2 max-sm:text-[16px] text-xl py-2 mx-2 '
             ></input>
                        
             <input
             type='date'
             placeholder='DOB '
             name='dob'
             value={formData.dob}
             onChange={handleInputChange}
             required
             className='w-[40%] max-sm:w-[40%] text-black
             text-xl bg-gray-300 
             rounded-lg px-2 max-sm:text-[16px] py-2 mx-2 '
             ></input>
                        
            <input
             type='text'
             placeholder='Country '
             name='country'
             value={formData.country}
             onChange={handleInputChange}
             required
             className='w-[40%]  max-sm:w-[40%] text-black bg-gray-300 
             rounded-lg px-2 max-sm:text-[16px] text-xl py-2 mx-2 '
             ></input>

             <input
             type='text'
             placeholder='State '
             name='state'
             value={formData.state}
             onChange={handleInputChange}
             required
             className='w-[40%]  max-sm:w-[40%] text-black bg-gray-300 
             rounded-lg px-2 max-sm:text-[16px] text-xl py-2 mx-2 '
             ></input>
                        
             <input
             
             type='text'
             placeholder='City '
             name='city'
             value={formData.city}
             onChange={handleInputChange}
             required
             className='w-[40%] max-sm:w-[40%] text-black bg-gray-300 
             rounded-lg px-2 max-sm:text-[16px] text-xl py-2 mx-2 '
             ></input>
                        
             <input
             type='text'
             placeholder='Address '
             name='address'
             value={formData.address}
             onChange={handleInputChange}
             required
             className='w-[40%] max-sm:w-[40%] text-black bg-gray-300 
             rounded-lg px-2 max-sm:text-[16px] text-xl py-2 mx-2 '
             ></input>
                        
             <input
             type='text'
             placeholder='Pin code '
             name='pincode'
             value={formData.pincode}
             onChange={handleInputChange}
             required
             className='w-[40%] max-sm:w-[40%] text-black bg-gray-300 
             rounded-lg px-2 max-sm:text-[16px] text-xl py-2 mx-2 '
             ></input>
                        
             <input
             type='text'
             autoCapitalize='characters'
             placeholder='Pan no '
             name='panno'
             value={formData.panno}
             onChange={handleInputChange}
             required
             className='w-[40%] max-sm:w-[40%] text-black bg-gray-300 
             rounded-lg px-2 max-sm:text-[16px] text-xl py-2 mx-2 '
             ></input>

            <input
             type='tel'
             placeholder='Amount '
             name='amount'
             value={formData.amount}
             onChange={handleInputChange}
             required
             className='w-[40%] max-sm:w-[40%] text-black bg-gray-300 
             rounded-lg px-2 max-sm:text-[16px] text-xl py-2 mx-2 '
             ></input>

             <div className='w-[90%]'>
              <p className='text-lg max-sm:text-sm  justify-center
               font-montserrat leading-normal'>YOUR CONTRIBUTIONS ARE ELIGIBLE FOR UPTO 50% TAX BENFIT
                UNDER SECTION 8oG AS ZION MISSION FOUNDATION IS REGISTERED AS
                NON PROFIT ORGANIZATION
                <br/>
                <span>PAN: </span> AAAAZ9182F | 
                <span>8oG: </span> AAAAZ9182FF2023101
              </p>
              <div className='flex justify-center items-start gap-2 mt-2'>
              <input type='checkbox' id='concern' className='mt-1'
              style={{
                backgroundColor: 'white', // Background color when not hovered
                padding: '0.5rem', // Adjust padding as needed
                borderRadius: '0.25rem', // Adjust border radius as needed
                cursor: 'pointer', // Show pointer cursor
              }}></input>
                <p htmlFor='concern' className='text-lg text-left max-sm:text-sm '>
                  you agree that zion mission foundation can reach out to 
                  you through whatsapp/email/SMS.phone to provide information
                  of your donation campaigns, 8og receipt etc.
                </p>
              </div>
               
               
             <button type='submit'
               className='text-3xl max-sm:text-2xl  text-white 
            font-semibold  bg-[#3D496F] border-4 
            px-5 cursor-pointer  rounded-xl' >Submit
            </button>
             </div>
                        
            
           </form>

        </div>

      </div>
     </div>
    </section>
  )
}

export default Dontaion
