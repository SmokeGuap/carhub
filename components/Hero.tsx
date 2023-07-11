'use client';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
      <div className='flex-1 pt-36 sm:px-16 px-6'>
        <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold'>
          Find or rent a car - quickly and easily!
        </h1>
        <p className='text-[27px] text-black-100 font-light mt-5'>
          Streamline your car rental experience with our effortless booking
          process
        </p>
        <CustomButton
          title='Explore Cars'
          containerStyles='bg-main text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};
export default Hero;
