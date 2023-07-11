import { MouseEventHandler } from 'react';

export interface CustomButton {
  title: string;
  btnType?: 'button' | 'submit'
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
