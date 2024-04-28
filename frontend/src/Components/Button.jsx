

// eslint-disable-next-line react/prop-types
const Button = ({ label }) => {
  return (
      <button className="flex justify-center items-center px-7 py-4 text-xl leading-none font-bold rounded-full text-white bg-[#382ACF]">
         {label}
      </button>
  )
}

export default Button
