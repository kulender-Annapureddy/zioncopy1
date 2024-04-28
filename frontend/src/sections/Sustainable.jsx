import { SustainableIcons } from "../constants"


const Sustainable = () => {
  return (
    <section className="w-full  bg-[white]">
      <h2 className="text-center pt-12  font-semibold  max-md:text-2xl text-3xl md:text-3xl xl:text-3xl  max-sm:text-xl">TOWARDS ACHIEVING</h2>
      <h1 className="text-center  font-bold text-[56px] max-md:text-3xl md:text-3xl xl:text-3xl max-sm:text-2xl">SUSTAINABLE DEVELOPMENT GOALS</h1>
      <div className="w-full mt-20 flex-wrap flex-1 justify-center items-center gap-20 flex ">
        {SustainableIcons.map((sus) => (
          <div key={sus} className="mb-10 max-sm:mb-2">
            <img src={sus.img}
            alt={sus.alt}
            width={200}
            height={200} 
            className="max-sm:w-32"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sustainable
