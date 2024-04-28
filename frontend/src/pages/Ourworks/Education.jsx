import reach from '../../assets/images/reach.png'
import education from '../../assets/images/eduction.png'
import home2 from '../../assets/images/education.jpg'

const Education = () => {
  return (
    <section className=" mt-32 max-sm:mt-20 text-8xl font-montserrat">
       <div className="w-full p-10 max-sm:p-5 ">
        <img src={home2}
         alt="background"
         className="w-full" />
         </div>
      <div className="w-[92%] m-auto ">
         <div className="w-full pt-10">
          <h1 className="text-4xl max-sm:text-3xl max-sm:py-2 font-semibold
           text-blue-500 py-5 "> Why Education is Important</h1>
          <p className="text-xl max-sm:text-lg">
          Education is widely recognized as one of the most powerful tools for personal and societal development. Its significance transcends individual achievement, impacting communities, economies, and the world at large. Here are several reasons why education is crucial:
          <br/>
          <br/>
          <span className='font-semibold'>Empowerment</span>
          <br/>
          Education empowers individuals by equipping them with knowledge, skills, and abilities to navigate the complexities of life. It fosters critical thinking, problem-solving, and decision-making, enabling individuals to make informed choices and pursue opportunities for personal and professional growth.
          <br/>
          <br/>
          <span className='font-semibold'>Social Mobility</span>
          <br/>
          Education serves as a pathway to social mobility, offering individuals from diverse backgrounds the opportunity to improve their socioeconomic status. It breaks down barriers and creates equal access to opportunities, enabling individuals to transcend circumstances of poverty, discrimination, and inequality.
          <br/>
          <br/>
          <span className='font-semibold'>Economic Development</span>
          <br/>
          A well-educated population is essential for economic growth and prosperity. Education fuels innovation, entrepreneurship, and productivity, driving economic development and competitiveness in the global market. It creates a skilled workforce capable of contributing to various industries and sectors, thereby fostering sustainable economic growth.
          <br/>
          <br/>
          <span className='font-semibold'>Health and Well-being</span>
          <br/>
          Education is closely linked to better health outcomes and overall well-being. It promotes healthy behaviors, disease prevention, and access to healthcare services through improved health literacy. Educated individuals tend to lead healthier lifestyles, make informed choices regarding their physical and mental health, and contribute to healthier communities.
          <br/>
          <br/>
          <span className='font-semibold'>Civic Engagement</span>
          <br/>
          Education cultivates active and engaged citizens who participate in democratic processes, advocate for social justice, and contribute to community development. It fosters a sense of civic responsibility, respect for diversity, and commitment to social change, thereby strengthening the fabric of society.
          <br/>
          <br/>
          <span className='font-semibold'>Global Understanding</span>
          <br/>
          In an interconnected world, education fosters global awareness, cultural competence, and understanding across borders. It promotes tolerance, empathy, and appreciation for diverse perspectives, fostering peace, cooperation, and collaboration on a global scale.
          <br/>
          <br/>
          <span className='font-semibold'>Environmental Sustainability</span>
          <br/>
          Education plays a crucial role in promoting environmental stewardship and sustainability. It raises awareness about environmental issues, encourages responsible behavior, and equips individuals with the knowledge and skills needed to address environmental challenges facing our planet.
          <br/>
          
          </p>
         </div>
         <div>
          <h1 className="text-4xl py-5
          max-sm:text-3xl max-sm:py-2 font-semibold text-blue-500">WHAT WE DO</h1>
          <p  className="text-xl max-sm:text-lg ">
          At Zion Mission Foundation, we are passionate about empowering individuals through education. Our education initiatives aim to provide opportunities for learning, skill development, and personal growth, ensuring that every child has access to quality education regardless of their background or circumstances.
             <br/>
             <br/>
             <span className='font-semibold'>Scholarships for Bright Futures</span>
              <br/>
              
              We believe that every child deserves the opportunity to pursue their dreams through education. {"That's"} why Zion Mission Foundation offers scholarships to children from disadvantaged backgrounds, helping them access quality schooling and pursue higher education. These scholarships not only provide financial support but also inspire and motivate children to excel academically and realize their full potential.
              <br/>
              <br/>
              <span className='font-semibold'> Skill Development Centers: Empowering Through Vocational Training</span>
              <br/>
              In addition to academic support, we recognize the importance of equipping individuals with practical skills that prepare them for the workforce. Our skill development centers offer vocational training programs designed to enhance employability and create sustainable livelihoods. From technical skills to soft skills development, we provide comprehensive training that empowers individuals to secure gainful employment and build a better future for themselves and their families.
                <br/>
                <br/>
                <span className='font-semibold'> Impacting Lives, Transforming Communities</span>
                <br/>
                Through our education initiatives, we have witnessed firsthand the transformative power of education in breaking the cycle of poverty and creating pathways to success. By providing scholarships and vocational training opportunities, we are not only investing in the future of individual children but also in the prosperity and development of entire communities. Together, we are building a brighter and more inclusive future for all.
                

          </p>
         </div>
         <div className='mt-10'>
          <h1 className="text-4xl py-8 
          max-sm:text-3xl max-sm:py-2
          font-semibold text-blue-500">Our Focus</h1>
          <img src={education}
          className='object-cover mx-auto'
          />
         </div>
         <div className='my-10 max-sm:my-4'>
          <h1 className="text-4xl py-8
          max-sm:text-3xl max-sm:py-2
          font-semibold text-blue-500">Reach & Presence</h1>
          <img src={reach}
          className=' mx-auto object-cover'/>
         </div>
         <div className='flex flex-wrap justify-center items-center gap-20
         max-sm:gap-2 my-16 max-sm:my-2'>
          <div >
          <a className="text-3xl max-sm:text-2xl font-semibold  px-5 py-3
           text-white bg-[#3D496F] rounded-xl">Support for a cause</a>
          </div>
          <div>
            <p className='text-3xl max-sm:text-3xl leading-normal font-semibold'>FOR CSR SUPPORT</p>
            <div className='flex flex-col justify-center  gap-3'>
            <span className='text-xl from-neutral-700'>Write to</span>
            <span className='text-xl font-medium'>Latha Rani Kavuri - Director of Projects -
            <br/>
            <a>lathasagar.zion@gmail.com</a> </span>
            </div>
            
          </div>
          
          </div> 
      </div>
    </section>
  )
}

export default Education
