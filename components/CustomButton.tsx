'use client';

import { CustomButton } from '@/types';

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButton) => {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span>{title}</span>
    </button>
  );
};
export default CustomButton;