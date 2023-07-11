'use client';
import CustomButton from './CustomButton';
import Image from 'next/image';

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 mx-auto overflow-hidden'>
      <div className='flex-1 pt-36 sm:px-16 px-6'>
        <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold'>
          Find or rent a car - quickly and easily!
        </h1>
        <p className='text-[27px] font-light mt-5'>
          Streamline your car rental experience with our effortless booking
          process
        </p>
        <CustomButton
          title='Explore Cars'
          containerStyles='bg-main text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>
      <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen'>
        <div className='relative xl:w-full w-[90%] xl:h-full h-[590px] z-0'>
          <Image src='/hero.png' alt='hero' fill className='object-contain' />
        </div>
        <div className='absolute xl:-top-24 xl:-right-1/3 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px]'></div>
      </div>
    </div>
  );
};
export default Hero;
