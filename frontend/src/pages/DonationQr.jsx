import qr from '../assets/images/qr.jpeg'

const DonationQr = () => {
  return (
    <section className="mt-32 max-sm:mt-20 text-8xl">
     <h2 className="text-4xl text-center max-lg:text-xl py-8">Please Scan The QR Code And Make your Donation</h2>
     <div className='w-full flex justify-center items-center mx-auto '> 
      <img src={qr} className='w-96'  />
     </div>
     <h2 className="text-3xl text-center max-lg:text-xl py-8">Thanks For Your Donation and if you have any queries please reaach out
       <br/>
       <br/>
     <a className='text-2xl max-sm:text-xl cursor-pointer font-semibold'>
      CSR-
      lathasagar.zion@gmail.com</a>
      </h2>
    </section>
  )
}

export default DonationQr
