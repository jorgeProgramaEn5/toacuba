import Caruselsimple from './Caruselsimple';


export default function Hero() {
  return (
        <div className='flex flex-col items-center w-full h-[25vh] sm:h-[45vh] md:h-[60vh] xl:h-[100vh] '>
      <Caruselsimple/>

      <div className='flex justify-center p-1 absolute top-[50px] sm:top-[96px] md:top-[132px]'>
        <div className=' flex flex-col items-center'>
          <h1 className=' uppercase text-lg font-[700] text-white text-center'>
            Join us on a <br></br> journey
          </h1>
          <button className=' p-2 rounded-md bg-white text-sm'>Learn more</button> 
        </div>
      </div>

      </div>
  )
}
