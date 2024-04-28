import health from '../../assets/images/health.png'
import reach from '../../assets/images/reach.png'
import home2 from '../../assets/images/home1.jpg'

const Health = () => {
  return (
    <section className=" mt-32 max-sm:mt-20 text-8xl font-montserrat">
      <div className="w-full p-10 max-sm:p-5  ">
        <img src={home2}
         alt="background"
         className="w-full" />
      </div>
      <div className="w-[92%] m-auto ">
         <div className="w-full pt-10">
          <h1 className="text-4xl max-sm:text-3xl max-sm:py-2 font-semibold
           text-blue-500 py-5 ">Why  Health Care</h1>
          <p className="text-xl max-sm:text-lg">
          1. Promoting Wellness: Healthcare services focus on preventive care, helping individuals maintain good health and prevent diseases through regular check-ups, screenings, and vaccinations.
          <br/>
          <br/>
          2. Treating Illnesses: Healthcare provides treatment for illnesses, injuries, and chronic conditions, alleviating suffering and improving quality of life.
          <br/>
          <br/>
          3. Extending Lifespan: Access to healthcare services can extend lifespan by addressing health issues early and providing timely interventions and treatments.
          <br/>
          <br/>
          4. Improving Quality of Life: Healthcare interventions help individuals manage their health conditions effectively, allowing them to lead healthier, more fulfilling lives.
          <br/>
          <br/>
          5. Reducing Health Disparities: Healthcare aims to address health disparities by providing equitable access to services, regardless of socioeconomic status, geographic location, or other factors.
          <br/>
          <br/>
          6. Boosting Productivity: Healthy individuals are more productive, contributing positively to their families, communities, and economies.
          <br/>
          <br/>
          7. Supporting Economic Development: Access to healthcare services is essential for economic development, as healthy populations are better able to participate in the workforce and contribute to economic growth.
          <br/>
          <br/>
          8. Fostering Social Cohesion: Healthcare strengthens communities by promoting social cohesion and resilience, as healthy individuals are better able to engage with others and contribute to community well-being.
          <br/>
          <br/>
          9. Preventing Public Health Crises: Healthcare infrastructure and systems play a crucial role in preventing and managing public health crises, such as pandemics, by facilitating disease surveillance, prevention, and response efforts.
          <br/>
          <br/>
          10. Ensuring Human Rights: Access to healthcare is considered a fundamental human right, as recognized by international human rights treaties and conventions. Healthcare is essential for ensuring that individuals can live with dignity and enjoy their fundamental rights to health and well-being.

          </p>
         </div>
         <div>
          <h1 className="text-4xl py-5
          max-sm:text-3xl max-sm:py-2 font-semibold text-blue-500">Our Engagements</h1>
          <p  className="text-xl max-sm:text-lg ">
          At Zion Mission Foundation, we are committed to promoting health
           and well-being in underserved communities through a variety of 
           initiatives. Our healthcare programs aim to address the
            healthcare needs of vulnerable populations and empower
             individuals with the knowledge and resources to lead 
             healthy lives.
             <br/>
             <br/>
             <span className='font-semibold'>Medical Camps for Remote and Underprivileged Areas </span>
              <br/>
              
              We conduct regular medical camps in remote and underprivileged 
              areas, bringing essential healthcare services directly to those 
              who need them most. Our medical camps provide free health 
              check-ups, consultations, and basic treatment to individuals 
              who may not have regular access to healthcare facilities. 
              By reaching out to these communities, we aim to bridge the gap 
              in healthcare access and improve health outcomes for all.
              <br/>
              <br/>
              <span className='font-semibold'> Health Awareness Camps in Schools and Remote Areas</span>
              <br/>
               Prevention is key to maintaining good health. {"That's"} why 
               we organize health awareness camps in schools and remote 
               areas to educate individuals about preventive healthcare 
               measures and promote healthy lifestyle practices. 
               Through interactive workshops, presentations, and 
               demonstrations, we raise awareness about common health 
               issues, such as hygiene, nutrition, and disease prevention,
                empowering individuals to take control of their health and well-being.
                <br/>
                <br/>
                <span className='font-semibold'> Teaching Healthy Lifestyle Practices to Children and Women</span>
                <br/>
                 We believe that instilling healthy habits early in life 
                 is essential for lifelong well-being. {"That's"} why we focus 
                 on teaching healthy lifestyle practices to children and 
                 women in the communities we serve. Through educational 
                 programs and workshops, we educate children about the 
                 importance of nutrition, physical activity, and hygiene, 
                 equipping them with the knowledge and skills to make 
                 healthy choices. Additionally, we empower women with information 
                 and resources to prioritize their health and the health of their 
                 families, fostering a culture of wellness within the community.
                 <br/>
                 <br/>
                 <span className='font-semibold'> Making a Difference, One Life at a Time</span>
                 <br/>
                 Through our healthcare initiatives, we have touched the 
                 lives of countless individuals and families, providing 
                 them with access to essential healthcare services,
                  empowering them with knowledge, and promoting healthier
                   lifestyles. By addressing the healthcare needs of 
                   underserved communities and promoting preventive care,
                    we are making a tangible difference in improving
                     health outcomes and building healthier, more 
                     resilient communities.

          </p>
         </div>
         <div className='mt-10'>
          <h1 className="text-4xl py-8 
          max-sm:text-3xl max-sm:py-2
          font-semibold text-blue-500">Our Focus</h1>
          <img src={health}
          className='object-cover'
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

export default Health
