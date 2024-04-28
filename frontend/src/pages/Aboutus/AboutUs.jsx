import home2 from '../../assets/images/home2.jpg'
import home3 from '../../assets/images/home3.jpg'

const AboutUs = () => {
  return (
    <section className="mt-32 max-sm:mt-20  bg-[#E6E7EB]  text-8xl" id='about-us'> 
      <div className="w-full p-10 ">
        <img src={home2}
         alt="background"
         className="w-[80%] mx-auto" />
      </div>
      <div className='w-[92%] mx-sm:w-full m-auto px-5 max-sm:px-1 ' id='our'>
        <ul className=' w-[88%] mx-auto flex flex-wrap justify-center gap-24 
        items-center  text-xl max-sm:text-lg max-sm:gap-5
         max-sm:px-0 lg:text-2xl px-2 py-3 font-montserrat
          shadow-3xl  bg-[#3D496F] rounded-lg  text-white '>
          <a href='#our' className='cursor-pointer text-black bg-white
            font-bold  rounded-lg px-2 py-2' >our story</a>
          <a href='#vision' className='cursor-pointer'>Vision</a>
          <a href='#mission' className='cursor-pointer'>Mission</a>
          <a href='#how  ' className='cursor-pointer'>How We Work</a>
          <a href='#Why' className='cursor-pointer'>Why Trust Us? </a> 
          
        </ul>
        <div >
        <p className='text-xl flex justify-center items-center  
        font-montserrat  
         py-8 text-center max-sm:text-lg' 
          >At Zion Mission Foundation we are dedicated 
           improving the lives of underprivileged communities
            through our focus on health and education. Our organization
             is driven by the belief that everyone deserves access to 
             quality healthcare and educational opportunities,
              regardless of their socio-economic background.</p>
        </div>
        <div className="w-full p-10 ">
        <img src={home3}
         alt="background"
         className="w-[80%] mx-auto" />
      </div>
      <p className='text-xl flex justify-center items-center  
        font-montserrat  
         py-8 text-center max-sm:text-lg' 
          >At Zion Mission Foundation we are dedicated 
           improving the lives of underprivileged communities
            through our focus on health and education. Our organization
             is driven by the belief that everyone deserves access to 
             quality healthcare and educational opportunities,
              regardless of their socio-economic background.</p>
      
        
      </div>

      <div className='w-[92%] mx-sm:w-full m-auto px-5 max-sm:px-1 ' id='vision'>
        <ul className=' w-[88%] mx-auto flex flex-wrap  justify-center gap-24 
        items-center  text-2xl max-sm:text-lg max-sm:gap-5
        font-montserrat max-sm:px-0 lg:text-2xl px-2 py-3
          shadow-3xl bg-[#3D496F]  rounded-lg text-white    '>
          <a href='#our' className='cursor-pointer ' >our story</a>
          <a href='#vision' className='cursor-pointer text-black bg-white
            font-bold  rounded-lg px-2 py-2 '>Vision</a>
          <a href='#mission' className='cursor-pointer'>Mission</a>
          <a href='#how  ' className='cursor-pointer'>How We Work</a>
          <a href='#Why' className='cursor-pointer'>Why Trust Us? </a> 
        </ul>
        <p className='text-xl flex justify-center items-center  font-montserrat 
         py-8 text-center max-sm:text-lg' 
          >
        At Zion Mission Foundation, we envision a world where
         every individual, irrespective of their socioeconomic
          background, enjoys equitable access to healthcare and 
          education as inherent human rights. Our mission encompasses 
          the establishment of a society where disparities are 
          eradicated, and every individual is empowered to access
           essential healthcare services and quality educational 
           opportunities. In pursuit of this vision, we are committed
            to not only bridging the gaps in healthcare and education
             but also extending our support to include the establishment
              of rehabilitation centres and old age homes. Through our
               comprehensive initiatives, we aim to uplift marginalised 
               communities, ensuring that no one is marginalised or 
               neglected in their pursuit of health, education, and 
               dignity.
        </p>
       
      </div>
      <div className='w-[92%] mx-sm:w-full m-auto px-5 max-sm:px-1' id='mission'>
        <ul className=' w-[88%] mx-auto flex flex-wrap justify-center gap-24 
        items-center font-montserrat  text-2xl max-sm:text-lg
         max-sm:gap-5 max-sm:px-0 lg:text-2xl px-2 py-3 text-white 
          shadow-3xl bg-[#3D496F]  rounded-lg   '>
          <a href='#our' className='cursor-pointer ' >our story</a>
          <a href='#vision' className='cursor-pointer'>Vision</a>
          <a href='#mission' className='cursor-pointer 
           text-black bg-white font-bold  rounded-lg px-2 py-2'>Mission</a>
          <a href='#how  ' className='cursor-pointer'>How We Work</a>
          <a href='#Why' className='cursor-pointer'>Why Trust Us? </a> 
        </ul>
          <p className='text-xl flex justify-center items-center  font-montserrat 
         py-8 text-center max-sm:text-lg'  >
          At Zion Mission Foundation, our unwavering commitment lies in empowering 
          impoverished communities through a dual focus on accessible healthcare and 
          quality education. We passionately endeavour to bridge the disparity gap in 
          healthcare services and educational opportunities, ensuring that every individual,
           regardless of socioeconomic status, has the resources essential for leading 
           healthy and prosperous lives. By addressing the fundamental needs of healthcare 
           and education, we aspire to break the cycle of poverty, fostering empowerment and 
           sustainable development within these marginalised communities. Our mission is 
           not merely to provide immediate support but to lay the groundwork for enduring 
           change, building a future where everyone has equal access to the tools and 
           knowledge necessary for a brighter tomorrow.
         </p>
      </div>
      <div className='w-[92%] mx-sm:w-full m-auto px-5 max-sm:px-1' id='how'>
        <ul className=' w-[88%] mx-auto flex flex-wrap justify-center gap-24 
        items-center font-montserrat  text-2xl max-sm:text-lg
         max-sm:gap-5 max-sm:px-0 lg:text-2xl px-2 py-3 text-white 
          shadow-3xl bg-[#3D496F]  rounded-lg    '>
          <a href='#our' className='cursor-pointer ' >our story</a>
          <a href='#vision' className='cursor-pointer' >Vision</a>
          <a href='#mission' className='cursor-pointer'>Mission</a>
          <a href='#how  ' className='cursor-pointer 
           text-black bg-white font-bold rounded-lg px-2 py-2'>How We Work</a>
          <a href='#Why' className='cursor-pointer'>Why Trust Us? </a> 
        </ul>
        <p className='text-xl flex flex-col justify-center items-center  font-montserrat 
         py-8 text-center max-sm:text-lg'  >
          At Zion Mission Foundation our approach to creating positive
           change is rooted in collaboration and strategic partnerships. 
           Through the utilization of CSR funds and the generosity of our
            donors, we implement impactful programs that address the 
            pressing needs of underprivileged communities. Here how we
             make it happen:
             <ul className='list-disc text-justify flex flex-col 
justify-center items-center font-montserrat px-6  max-sm:px-1 mt-4'>
<li className='pb-2'> Identifying Needs: We begin by identifying the most pressing needs
   within the communities we serve. Whether it is an 
   access to healthcare, quality education, or livelihood opportunities, 
   we conduct thorough assessments to understand the specific challenges 
   faced by individuals and families. </li>
<li className='pb-2'>
Strategic Planning: Once needs are identified, we develop strategic  
plans to address them effectively. Our team works closely with 
stakeholders, including local authorities, community leaders, and 
experts in various fields, to design programs that are tailored to 
meet the unique needs of each community.
  </li> 
<li className='pb-2'>
Utilizing CSR Funds: We leverage CSR funds from corporate partners to 
finance our programs and initiatives. These funds play a crucial role 
in supporting our efforts to provide essential services and resources 
to those in need. Through transparent and accountable management, 
we ensure that every rupee is utilized efficiently and effectively.

</li>
<li className='pb-2'>
Engaging Donors: In addition to CSR funds, we rely on the generosity 
of individual donors who share our commitment to social impact.
 Whether  through one-time donations, recurring contributions, 
 or fundraising campaigns, every donation we receive helps us expand our
 reach and deepen our impact.
</li>
<li className='pb-2'>
Implementing Programs: With funding in place, we implement our programs
 with a focus on sustainability and scalability. We work closely with 
 local partners and volunteers to deliver services, organize events,
  and conduct awareness campaigns that address the root causes of poverty
   and inequality.

</li>
<li className='pb-2'>
Monitoring and Evaluation: Throughout the implementation process, we 
continuously monitor and evaluate the effectiveness of our programs.
 By collecting data, soliciting feedback from beneficiaries, and 
 conducting regular assessments, we ensure that our interventions are 
 making a meaningful difference in the lives of those we serve.

</li>
<li className='pb-2'>
Reporting and Transparency: We believe in transparency and accountability
 to our stakeholders. We provide regular updates and reports on the 
 progress of our programs, detailing the impact achieved and the 
 challenges faced. Our commitment to transparency builds trust and 
 confidence among our donors and supporters.
</li>

</ul>

         </p>
           
      </div>
      <div className='w-[92%] mx-sm:w-full m-auto px-5 max-sm:px-1 ' id='Why'>
        <ul className='w-[88%] mx-auto flex flex-wrap justify-center gap-24 
        items-center  text-2xl font-montserrat max-sm:text-lg 
        max-sm:gap-5 max-sm:px-0 lg:text-2xl px-1 py-3
         shadow-3xl bg-[#3D496F] rounded-lg text-white   '>
          <a href='#our' className='cursor-pointer ' >our story</a>
          <a href='#vision' className='cursor-pointer'>Vision</a>
          <a href='#mission' className='cursor-pointer'>Mission</a>
          <a href='#how  ' className='cursor-pointer'>How We Work</a>
          <a href='#Why' className='cursor-pointer  
           font-bold text-black bg-white rounded-lg px-2 py-2'>Why Trust Us? </a> 
        </ul>
        
          <p className='text-xl flex flex-col justify-center items-center  font-montserrat 
         py-8 text-center max-sm:text-lg' >
          At Zion Mission Foundation, we understand the importance 
          of trust and accountability in the nonprofit sector. 
          We strive to earn and maintain the trust of our supporters, 
          beneficiaries, and stakeholders through our unwavering 
          commitment to transparency, integrity, and impact.  
Heres why you can trust us:
<ul className='list-disc text-justify flex flex-col 
justify-center items-center px-6 max-sm:px-1 mt-4'>
<li className='pb-2'> Proven Track Record: With years of experience in serving underprivileged
   communities, we have built a proven track record of success. 
   Our past achievements and tangible impact speak volumes about our dedication 
   and effectiveness in creating positive change. </li>
<li className='pb-2'>
Transparent Operations: Transparency is at the core of everything we do. 
We believe in open communication and accountability to our donors, 
supporters, and beneficiaries. We provide detailed financial reports, 
program updates, and impact assessments to ensure transparency in 
our operations.
  </li> 
<li className='pb-2'>
Effective Utilization of Resources: We understand the value of every 
rupee donated to our cause. We are committed to maximizing the impact
 of every donation by ensuring that resources are utilized efficiently 
 and effectively. Through careful planning and strategic allocation of 
 funds, we strive to achieve the greatest possible outcomes for those we 
 serve.
</li>
<li className='pb-2'> 
Corporate Partnerships: Our partnerships with corporate entities
 through CSR initiatives provide us with additional resources and support.
  These partnerships not only enhance our ability to implement impactful 
  programs but also serve as a testament to our credibility and 
  trustworthiness.
</li>
<li className='pb-2'>
Dedicated Team: Our team is composed of passionate individuals who 
are deeply committed to our mission. From program managers to volunteers,
 each member of our team is driven by a shared vision of creating a
  better world for all. Their dedication, professionalism, and expertise
   are key factors in our success.
</li>
<li className='pb-2'>
Impactful Programs: Our programs are designed based on thorough needs 
assessments and informed by best practices in the field. We focus on 
delivering measurable and sustainable outcomes that make a real 
difference in the lives of our beneficiaries. From healthcare access to
 educational empowerment, our initiatives address the root causes of
  poverty and inequality.
</li>
<li className='pb-2'>
 Community Engagement: We believe in the power of community-led 
solutions. We actively engage with local communities, listening to 
their needs, and involving them in the design and implementation of
 our programs. By fostering collaboration and empowerment, we ensure
  that our interventions are contextually relevant and responsive to 
  the needs of the communities we serve.
</li>

</ul>
         </p>
         
      </div>
    </section>
  )
}

export default AboutUs
