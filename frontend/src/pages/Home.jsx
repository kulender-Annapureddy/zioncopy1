import { Hero,  Impact, Programs, Sustainable } from "../sections"
// import Navbar from "../Components/Navbar"
import Zion from '../sections/Zion'

const Home = () => {
  return (
    <main className="relative text-black bg-white">
      {/* <Navbar/> */}
      <section className="">
        <Hero/>
      </section>
      <section className="">
        <Zion />
      </section>
      <section className="">
        <Impact />
      </section>
      <section className="">
        <Programs />
      </section>
      <section className="">
        <Sustainable/>
      </section>
      {/* <section className="">
        <Footer />
      </section> */}
      
    </main>
  )
}

export default Home
