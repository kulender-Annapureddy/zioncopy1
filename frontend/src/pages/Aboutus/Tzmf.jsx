import user from '../../assets/images/pastor.jpg';
import user1 from '../../assets/images/gensec.jpg';


const Tzmf = () => {
  return (
    <section className=" mt-32 max-sm:mt-20  text-8xl">
      <div className="w-[88%] max-sm:w-full max-sm:px-3 mx-auto my-20">
        <h1 className="text-4xl  max-sm:text-3xl max-sm:mb-5 font-bold font-montserrat text-center mb-10 pt-10">Team ZMF</h1>
        <p className="text-xl text-justify max-sm:text-lg">Zion Mission Foundation, established in 2023 as a registered
           society in Telangana, is committed to improving the lives of
            marginalized communities in India through a holistic approach.
             The foundation focuses on integrated healthcare access by establishing
              healthcare facilities in remote and impoverished areas and providing 
              comprehensive and affordable healthcare services, including preventive 
              care and treatments.Additionally, it emphasizes holistic education empowerment
               by developing educational infrastructure, and offering scholarships, grants,
                and vocational training opportunities to economically disadvantaged individuals. 
                Collaborating with local professionals and organizations, Zion Mission Foundation
                 enhances medical care delivery, implements health education programs, and offers
                  educational support to disadvantaged youth, ensuring community-centered support.</p>
      </div>
      <div className="w-[96%] max-sm:w-full mx-auto my-10 bg-gray-200 p-10 max-lg:p-0 " >
        <h1 className="text-center max-sm:text-2xl font-semibold font-montserrat pb-10 leading-normal text-4xl">Meet Our Founder: A Beacon of Compassion and Commitment </h1>
        <div className='flex max-lg:flex-wrap justify-center items-center gap-20  max-sm:gap-0'>
          <img src={user}
          width={500}
          height={400}
        className=" object-cover rounded-full  ">
          
         </img>
      
          <p className='text-xl max-sm:text-lg  mt-10 text-white p-4 leading-normal  bg-[#3D496F]'>
          Behind Zion Mission Foundation stands a visionary leader whose dedication to
           public service has touched countless lives over the past decade. Our founder,
            Dr Shashi Kiran Pulukuri, is not just a leader but a beacon of compassion, integrity,
             and unwavering commitment to social change.
             <br/>
             <br/>
             Driven by a profound sense of empathy and a desire to make a difference, 
             our founder embarked on his journey of public service with a simple yet powerful 
             mission: to uplift the most vulnerable and marginalized members of society. 
             For the past 10 years, he has tirelessly devoted himself to this noble cause, 
             leaving an indelible mark on the lives of those he serves.
             <br/>
             <br/>
             Our {"Founder's"} journey is one marked by resilience and determination in the face of 
             adversity. Through his leadership, Zion Mission Foundation has grown from a small
              grassroots initiative to a formidable force for good, impacting communities far 
              and wide. His unwavering belief in the power of compassion and collective action
              has inspired countless others to join him in the fight for social justice.
              <br/>
              <br/>
              But beyond his professional achievements, it is Our {"Founder's"}  compassion and empathy
               that truly set him apart. He has a rare ability to connect with people on a deeply
                human level, understanding their struggles, their hopes, and their dreams. His 
                presence brings comfort and reassurance to those in need, serving as a guiding 
                light in their darkest moments.
                <br/>
                <br/>
                Our {"Founder's"}  commitment to public service is not just a profession but a 
                calling—a calling to serve others, to alleviate suffering, and to create a
                world where everyone has the opportunity to thrive. His leadership is not 
                defined by titles or accolades but by the lives he has touched and the hearts
                 he has uplifted.
                 <br/>
                 <br/>
                 As we continue our journey of social change, we are grateful for the vision, 
                 passion, and unwavering dedication of our founder. His legacy will forever 
                 inspire us to strive for a more compassionate and equitable world, where 
                 kindness and empathy reign supreme.
          </p>
        
        
        </div>
       


      </div>
      <div className="w-[96%] max-sm:w-full mx-auto my-10 " >
        <h1 className="text-center max-sm:text-2xl
         font-semibold font-montserrat pb-10 leading-normal 
         text-4xl">Meet Our General Secretary: A Champion for Child Nutrition and Well-being </h1>
        <div className='flex  max-lg:flex-wrap justify-center items-center gap-20 max-sm:gap-0'>
        <img src={user1}
          width={500}
          height={400}
        className=" object-cover rounded-full lg:hidden  ">
          
         </img>
          <p className='text-xl max-sm:text-lg  mt-10 text-white p-4 leading-normal  bg-[#3D496F]'>
          At Zion Mission Foundation, we are fortunate to have a dedicated General 
          Secretary Mrs. Frank Leena Pulukuri whose passion for child nutrition and 
          well-being has been a driving force behind our mission for the past decade.
           As a seasoned nutritionist, she brings a wealth of expertise and a deep commitment 
           to ensuring the health and happiness of every child we serve.
             <br/>
             <br/>
             With a background in nutrition science and a heart filled with compassion, our General 
             Secretary has dedicated her career to improving the lives of children, particularly 
             those from underserved communities. Her work is guided by the belief that every child
              deserves access to nutritious food, quality healthcare, and a nurturing environment 
              in which to thrive.
             <br/>
             <br/>
             For the past decade, our General Secretary has been at the forefront of our 
             efforts to combat malnutrition, promote healthy eating habits, and empower 
             children to lead active and fulfilling lives. Through her leadership, we have 
             implemented innovative nutrition programs, conducted awareness campaigns, 
             and provided essential resources to support the holistic development of children.
              <br/>
              <br/>
              But her impact goes beyond just numbers and statistics. It is in the smiles of children
               who have received nutritious meals, in the laughter of those who have regained their 
               health, and in the hope of families who see a brighter future for their children. 
               Her dedication and tireless advocacy have transformed countless lives and inspired 
               others to join us in our mission.
                <br/>
                <br/>
                As we continue our journey to create a world where every child has the opportunity 
                to thrive, we are grateful for the leadership, expertise, and unwavering commitment
                 of our General Secretary. Her passion for child nutrition and well-being serves as
                  a guiding light, illuminating the path forward and reminding us of the
                   transformative power of love and compassion.
                 <br/>
                 <br/>
          </p>

          <img src={user1}
          width={500}
          height={400}
        className=" object-cover rounded-full max-lg:hidden lg:block ">
          
         </img>
        
        
        </div>
       


      </div>
    </section>
  )
}

export default Tzmf
